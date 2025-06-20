import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import CanvasSortableField from "./CanvasSortableField";
import { useFormBuilderStore } from "../../../stores/useFormBuilderStore";
import FormToolBar from "../FormToolBar";

export default function CanvasDragDropAbleContainer() {
  const { setField, fields } = useFormBuilderStore();
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  function handleDragEnd(event) {
    const { active, over } = event;
    if (!over || !active || active.id === over.id) return;

    const oldIndex = fields.findIndex((field) => field.id === active.id);
    const newIndex = fields.findIndex((field) => field.id === over.id);

    if (oldIndex !== -1 && newIndex !== -1 && oldIndex !== newIndex) {
      const updatedFields = arrayMove(fields, oldIndex, newIndex);
      setField(updatedFields);
    }
  }

  return (
    <div className="flex flex-col justify-between h-full p-4">
      <div className="space-y-3 overflow-y-auto mb-5">
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={fields.map((field) => field.id)}
            strategy={verticalListSortingStrategy}
          >
            {fields.map((field, index) => (
              <CanvasSortableField key={index} field={field} id={field.id} />
            ))}
          </SortableContext>
        </DndContext>
      </div>
      <FormToolBar />
    </div>
  );
}

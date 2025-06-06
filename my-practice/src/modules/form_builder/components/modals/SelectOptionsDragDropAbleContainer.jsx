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
import SortableOption from "./SortableOption";

export default function SelectOptionsDragDropAbleContainer({
  onChangeHandler,
  options,
}) {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over || !active || active.id === over.id) return;

    const oldIndex = options.findIndex((option) => option.value === active.id);
    const newIndex = options.findIndex((option) => option.value === over.id);

    if (oldIndex !== -1 && newIndex !== -1 && oldIndex !== newIndex) {
      const updatedOptions = arrayMove(options, oldIndex, newIndex);
      onChangeHandler(updatedOptions);
    }
  };

  function updateOption(index, key, value) {
    const updatedOptions = [...(options || [])];
    updatedOptions[index] = {
      ...updatedOptions[index],
      [key]: value,
    };
    onChangeHandler(updatedOptions);
  }

  const removeOption = (index) => {
    const updatedOptions = [...(options || [])];
    updatedOptions.splice(index, 1);
    onChangeHandler(updatedOptions);
  };
  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={options.map((option) => option.value)}
        strategy={verticalListSortingStrategy}
      >
        {options.map((option, index) => {
          return (
            <SortableOption
              key={option.value}
              id={option.value}
              index={index}
              option={option}
              onUpdate={updateOption}
              onRemove={() => removeOption(index)}
            />
          );
        })}
      </SortableContext>
    </DndContext>
  );
}

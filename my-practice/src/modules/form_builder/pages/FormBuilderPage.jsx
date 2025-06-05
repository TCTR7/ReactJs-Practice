import { useFormBuilderStore } from "../stores/useFormBuilderStore";
import { DndContext } from "@dnd-kit/core";
import SideBar from "../components/form_editor/SideBar";
import Canvas from "../components/form_editor/Canvas";
import FieldEditModal from "../components/FieldEditModal";

export default function FormBuilderPage() {
  const addField = useFormBuilderStore((state) => state.addField);

  function handleDragEnd(event) {
    const { over, active } = event;
    if (over.id === "canvas") {
      addField(active.id);
    }
  }
  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="flex h-screen">
        <SideBar />
        <Canvas />
        <FieldEditModal />
      </div>
    </DndContext>
  );
}

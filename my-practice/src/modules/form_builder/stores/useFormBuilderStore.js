import { create } from "zustand";

export const useFormBuilderStore = create((set) => ({
  fields: [],
  selectedFieldId: null,
  addField: (type) => {
    const newField = {
      id: Date.now(),
      type: type,
      label: `${type[0].toUpperCase() + type.slice(1)} Field`,
      placeholder: "",
      required: false,
      options: [],
    };
    set((state) => ({
      fields: [...state.fields, newField],
    }));
  },
  setField: (fields) => set({ fields }),
  selectField: (id) => set({ selectedFieldId: id }),
  updateField: (id, updates) =>
    set((state) => ({
      fields: state.fields.map((field) => {
        console.log("Updating field:", field, "with updates:", updates);
        if (field.id === id) {
          return { ...field, ...updates };
        }
        return field;
      }),
    })),
  deselectField: () => set({ selectedFieldId: null }),
  deleteField: (id) =>
    set((state) => ({
      fields: state.fields.filter((field) => field.id !== id),
      selectedFieldId: null
    })),
}));

import { create } from 'zustand';
import { Field, INIT_FIELDS } from './fields/useFields';

type FormStore = {
  fields: Field[];
  updateField: (id: string, updatedField: Partial<Field>) => void;
  addField: () => void;
  removeField: (id: string) => void;
};

export const useFormStore = create<FormStore>((set) => ({
  fields: INIT_FIELDS,
  updateField: (id, updatedField) =>
    set((state) => ({
      fields: state.fields.map((field) =>
        field.id === id ? { ...field, ...updatedField } : field
      ),
    })),
  addField: () =>
    set((state) => {
      const newField: Field = {
        type: 'text',
        placeholder: '',
        label: null,
        id: `random-id-${Math.random().toString(36).substr(2, 9)}`,
      };
      return { fields: [...state.fields, newField] };
    }),
  removeField: (id) =>
    set((state) => ({
      fields: state.fields.filter((field) => field.id !== id),
    })),
}));

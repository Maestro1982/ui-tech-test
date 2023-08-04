import { useState } from 'react';

export type Submit = {
  type: 'submit';
  text: string;
  id: string;
  label?: never;
  placeholder?: never;
};
export type Input = {
  type: 'text' | 'date' | 'number';
  text?: never;
  placeholder: string;
  id: string;
  label: string | null;
};
export type Combobox = {
  type: 'country';
  text?: never;
  id: string;
  label: string | null;
  placeholder: string;
};
export type Field = Input | Submit | Combobox;

const INIT_FIELDS: Field[] = [
  {
    type: 'text',
    placeholder: 'Name',
    label: null,
    id: self.crypto.randomUUID(),
  },
  {
    type: 'number',
    placeholder: 'Age',
    label: null,
    id: self.crypto.randomUUID(),
  },
  {
    type: 'date',
    placeholder: 'Date of Birth',
    label: null,
    id: self.crypto.randomUUID(),
  },
  {
    type: 'country',
    placeholder: 'Country',
    label: null,
    id: self.crypto.randomUUID(),
  },
  { type: 'submit', text: 'submit', id: self.crypto.randomUUID() },
];

/**
 * A store for managing form fields
 * TODO: implement a store for managing form fields
 **/

type FormStore = {
  fields: Field[];
  updateField: (id: string, updateField: Field) => void;
};

export function useFormStore(): FormStore {
  const [fields, setFields] = useState<Field[]>(INIT_FIELDS);

  const updateField = (id: string, updateField: Field) => {
    setFields((prevFields) =>
      prevFields.map((field) => (field.id === id ? updateField : field))
    );
  };

  return { fields, updateField };
}

/**
 * A hook for managing form fields
 * TODO: complete this hook by wiring up the form store
 * @returns
 */
function useFields(): {
  fields: Field[];
  updateField: FormStore['updateField'];
} {
  const formStore = useFormStore();
  return { fields: formStore.fields, updateField: formStore.updateField };
}

export default useFields;

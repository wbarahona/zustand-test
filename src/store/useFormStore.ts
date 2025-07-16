import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

interface FormState {
  form: {
    name: string;
    email: string;
    comments: string;
  };
  updateField: (field: keyof FormState['form'], value: string) => void;
  resetForm: () => void;
}

export const useFormStore = create<FormState>()(
  immer((set) => ({
    form: {
      name: '',
      email: '',
      comments: '',
    },
    updateField: (field, value) =>
      set((state) => {
        state.form[field] = value;
      }),
    resetForm: () =>
      set((state) => {
        state.form = { name: '', email: '', comments: '' };
      }),
  }))
);

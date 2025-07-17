import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

interface Address {
  street: string;
  city: string;
  zipCode: string;
}

interface Education {
  id: string;
  institution: string;
  degree: string;
  year: string;
}

interface FormState {
  form: {
    personalInfo: {
      name: string;
      email: string;
      phone: string;
    };
    address: Address;
    educationHistory: Education[];
    comments: string;
  };
  updatePersonalInfo: (
    field: keyof FormState['form']['personalInfo'],
    value: string
  ) => void;
  updateAddress: (field: keyof Address, value: string) => void;
  addEducation: (education: Omit<Education, 'id'>) => void;
  updateEducation: (
    id: string,
    field: keyof Omit<Education, 'id'>,
    value: string
  ) => void;
  removeEducation: (id: string) => void;
  updateComments: (value: string) => void;
  resetForm: () => void;
}

export const useFormStore = create<FormState>()(
  immer((set) => ({
    form: {
      personalInfo: {
        name: '',
        email: '',
        phone: '',
      },
      address: {
        street: '',
        city: '',
        zipCode: '',
      },
      educationHistory: [],
      comments: '',
    },
    updatePersonalInfo: (field, value) =>
      set((state) => {
        state.form.personalInfo[field] = value;
      }),
    updateAddress: (field, value) =>
      set((state) => {
        state.form.address[field] = value;
      }),
    addEducation: (education) =>
      set((state) => {
        state.form.educationHistory.push({
          ...education,
          id: crypto.randomUUID(),
        });
      }),
    updateEducation: (id, field, value) =>
      set((state) => {
        const index = state.form.educationHistory.findIndex(
          (edu) => edu.id === id
        );
        if (index !== -1) {
          state.form.educationHistory[index][field] = value;
        }
      }),
    removeEducation: (id) =>
      set((state) => {
        state.form.educationHistory = state.form.educationHistory.filter(
          (edu) => edu.id !== id
        );
      }),
    updateComments: (value) =>
      set((state) => {
        state.form.comments = value;
      }),
    resetForm: () =>
      set((state) => {
        state.form = {
          personalInfo: { name: '', email: '', phone: '' },
          address: { street: '', city: '', zipCode: '' },
          educationHistory: [],
          comments: '',
        };
      }),
  }))
);

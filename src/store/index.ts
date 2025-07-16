// store.ts
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

export type GlobalState = {
  count: number;
  history: number[];
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  bulkAdd: (values: number[]) => void;
};

export const useGlobalStore = create<GlobalState>()(
  immer((set) => ({
    count: 0,
    history: [],
    increment: () =>
      set((state) => {
        state.count++;
        state.history.push(state.count);
      }),
    decrement: () =>
      set((state) => {
        state.count--;
        state.history.push(state.count);
      }),
    reset: () =>
      set((state) => {
        state.count = 0;
        state.history = [];
      }),
    bulkAdd: (values) =>
      set((state) => {
        values.forEach((val) => {
          state.count += val;
          state.history.push(state.count);
        });
      }),
  }))
);

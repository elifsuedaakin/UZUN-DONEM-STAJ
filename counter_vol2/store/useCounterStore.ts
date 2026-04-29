// store/useCounterStore.ts
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface CounterState {
  count: number;
  increase: () => void;
  decrease: () => void;
  reset: () => void;
  setCount: (value: number) => void;
}

export const useCounterStore = create<CounterState>()(
  persist(
    (set) => ({
      count: 0,
      increase: () => set((state) => ({ count: state.count + 1 })),
      decrease: () => set((state) => ({ count: state.count - 1 })),
      reset: () => set({ count: 0 }),
      setCount: (value) => set({ count: value }),
    }),
    { name: 'counter-storage' } // Sayfa yenilense de sayı kaybolmaz
  )
)
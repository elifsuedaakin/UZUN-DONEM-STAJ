import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface CounterState { //store'un içinde ne olacak 
  count: number;
  isHydrated: boolean;
  increase: () => void;
  decrease: () => void;
  reset: () => void;
  setCount: (value: number) => void;
  setHydrated: (state: boolean) => void;
}

export const useCounterStore = create<CounterState>()(
  persist( //veriyi localStorage ' e kaydetmek için 
    (set) => ({//uygulamanın başlangıç verisi 
      count: 0,
      isHydrated: false,

      increase: () => set((state) => ({ count: state.count + 1 })),
      decrease: () => set((state) => ({ count: state.count - 1 })),
      reset: () => set({ count: 0 }),
      setCount: (value) => set({ count: value }),

      setHydrated: (state) => set({ isHydrated: state }),
    }),
    {
      name: 'counter-storage',

      onRehydrateStorage: () => (state) => { //Zustand localStorage’dan veriyi geri yükledikten sonra UI’ın hydration tamamlandı bilgisini vermek için isHydrated state’ini true yapar.
        state?.setHydrated(true)
      },
    }
  )
) 
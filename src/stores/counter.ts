import { defineStore, acceptHMRUpdate } from 'pinia';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    count: 0,
  }),
  getters: {
    doubleCount: (state) => 2 * state.count,
  },
  actions: {
    increment() {
      this.count += 1;
    },
    decrement() {
      this.count -= 1;
    },
    incrementByAmount(payload: number) {
      this.count += payload;
    },

    async incrementAsync(payload: number) {
      await delay(1000);
      this.incrementByAmount(payload);
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCounterStore, import.meta.hot));
}

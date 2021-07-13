import { Module } from 'vuex';

export interface Counter {
    count: number;
}

const store: Module<Counter, unknown> = {
    namespaced: true,
    state() {
        return {
            count: 0,
        };
    },
    mutations: {
        increment(state: Counter, payload: number) {
            state.count += payload;
        },
    },
    actions: {
        incrementAsync(context, payload: number) {
            setTimeout(() => {
                context.commit('increment', payload);
            }, 1000);
        },
    },
};

export default store;

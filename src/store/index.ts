import { InjectionKey } from 'vue';
import {
  createStore,
  useStore as baseUseStore,
  createLogger,
  Store,
} from 'vuex';
import counter, { Counter } from './modules/counter';

const debug = process.env.NODE_ENV !== 'production';

// 为 store state 声明类型
export interface State {
  counter: Counter;
}

// 定义 injection key
export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore({
  modules: {
    counter,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});

// 定义自己的 `useStore` 组合式函数
export function useVueStore(): Store<State> {
  return baseUseStore(key);
}

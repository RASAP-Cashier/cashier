import { isFunction } from 'lodash';

interface ISingletonWithInitCallbacks<P> {
  initCallback?: (params?: P) => void;
  tryInitCallback?: (params?: P) => void;
  getInstanceCallback?: () => void;
}

export interface ISingletonWithInit<T, P> {
  isInitialized: () => boolean;
  getInstance: () => T;
  init: (params?: P) => T;
  tryInit: (params?: P) => T;
  callbacks?: ISingletonWithInitCallbacks<P>;
}

export function singletonWithInit<T, P>(
  clazz: { new (params?: P): T },
  callbacks?: ISingletonWithInitCallbacks<P>,
): ISingletonWithInit<T, P> {
  let instance: T;
  return {
    isInitialized: () => {
      return !!instance;
    },
    getInstance: () => {
      if (!instance) {
        throw Error(`Not initialized: ${clazz?.name}`);
      }

      isFunction(callbacks?.getInstanceCallback) && callbacks?.getInstanceCallback();
      return instance;
    },
    init: (params?: P) => {
      if (instance) {
        throw Error(`Already initialized: ${clazz?.name}`);
      }

      isFunction(callbacks?.initCallback) && callbacks?.initCallback(params);
      instance = new clazz(params);
      return instance;
    },
    tryInit: (params?: P) => {
      if (instance) {
        return instance;
      }

      isFunction(callbacks?.tryInitCallback) && callbacks?.tryInitCallback(params);
      instance = new clazz(params);
      return instance;
    },
  };
}

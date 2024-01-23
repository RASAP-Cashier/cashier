export function singleton<T>(clazz: { new (): T }) {
  let instance: T;
  return {
    getInstance: () => {
      if (!instance) {
        instance = new clazz();
      }
      return instance;
    },
  };
}

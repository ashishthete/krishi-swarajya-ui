export function Record<T extends {[key: string]: any}>(Base = RecordBase): Class<T> {
  return class extends Base implements Instance<T> {
    public readonly update: (updates: Partial<T>) => this & Record<T>;

    constructor(init: T) {
      super();

      const keys = Object.keys(init);

      for (const key of keys) {
        Object.defineProperty(this, key, {
          value: init[key],
          writable: false,
          enumerable: true,
          configurable: false
        });
      }

      this.update = (updates: Partial<T>) => {
        const values: object = {};
        for (const key of keys) {
          values[key] = key in updates ? updates[key] : this[key];
        }

        return new (this.constructor as any)(values as T);
      };
    }

  } as any;
}

abstract class RecordBase {}

export type Class<T extends object> = new (init: T) => Record<T>;

export type Record<T extends object> = Instance<T> & Readonly<T>;

interface Instance<T extends object> {
  update(updates: Partial<T>): this & Record<T>;
}

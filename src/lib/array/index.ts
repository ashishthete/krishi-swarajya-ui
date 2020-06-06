export function sortBy<T, F>(array: ReadonlyArray<T>, fields: (value: T) => ReadonlyArray<F>): T[] {
  return [...array].sort((item1, item2) => {
    const fields1 = fields(item1);
    const fields2 = fields(item2);

    for (let i = 0; i < fields1.length; i++) {
      const field1 = fields1[i];
      const field2 = fields2[i];

      if (field1 > field2) {
        return 1;
      } else if (field1 < field2) {
        return -1;
      }
    }

    return 0;
  });
}

export function zipWith<T1, T2, R>(array1: ReadonlyArray<T1>, array2: ReadonlyArray<T2>, func: (a: T1, b: T2) => R): R[] {
  return array1.map((a, index) => func(a, array2[index]));
}

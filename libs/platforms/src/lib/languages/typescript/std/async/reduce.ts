export async function asyncReduce<Acc, T>(
  array: Array<T>,
  callback: (acc: Acc, item: T, index: number, arr: Array<T>) => Promise<Acc>,
  acc = undefined as unknown as Acc
) {
  for (let index = 0; index < array.length; index++) {
    acc = await callback(acc, array[index], index, array);
  }
  return acc;
}

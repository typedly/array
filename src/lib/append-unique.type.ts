/**
 * @description Appends the unique value of `Element` type to the generic type variable `Array`.
 * @export
 * @template {readonly any[]} Array 
 * @template Element 
 * @example
 * type Example1 = AppendUnique<[1, 2, 3], 4>;  // [1, 2, 3, 4]
 * type Example2 = AppendUnique<[1, 2, 3], 2>;  // [1, 2, 3] (unchanged)
 * const example1: Example1 = [1, 2, 3, 4];
 * const example2: Example2 = [1, 2, 3];
 */
export type AppendUnique<Array extends readonly any[], Element> = 
  Element extends Array[number] ? Array : [...Array, Element];

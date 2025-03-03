/**
 * @description Returns the unique values from generic type variable `Array`.
 * @export
 * @template {readonly any[]} Array 
 * @example
 * import { Unique } from '@typedly/array';
 * 
 * type Example1 = Unique<[1, 2, 2, 3, 3, 3]>; // [1, 2, 3]
 * const example1: Example1 = [1, 2, 3];
 */
export type Unique<Array extends readonly any[]> = 
  Array extends [infer First, ...infer Rest]
    ? First extends Rest[number]
      ? Unique<Rest>
      : [First, ...Unique<Rest>]
    : [];

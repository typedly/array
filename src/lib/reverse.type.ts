/**
 * @description Reverses the generic type variable `Array`.
 * @export
 * @template {readonly any[]} Array 
 * @example
 * import { Reverse } from '@typedly/array';
 * 
 * type Example1 = Reverse<[1, 2, 3]>;  // [3, 2, 1]
 * type Example2 = Reverse<['c', 'b', 'a']>;  // ['a', 'b', 'c']
 * 
 * const example1: Example1 = [3, 2, 1];
 * const example2: Example2 = ['a', 'b', 'c'];
 * 
 */
export type Reverse<Array extends readonly any[]> = 
  Array extends [infer First, ...infer Rest] 
    ? [...Reverse<Rest>, First] 
    : [];

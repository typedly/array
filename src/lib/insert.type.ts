
/**
 * @description Inserts the `Element` type to the generic type variable `Array` at index of `Index` type.
 * @export
 * @template {any[]} Array 
 * @template Element 
 * @template {number} Index 
 * @template {any[]} [Result=[]] 
 * @example
 * import { Insert } from '@typedly/array';
 * 
 * // Insert 99 at index 2 in the array [1, 2, 3, 4]
 * type Example1 = Insert<[1, 2, 3, 4], 99, 2>;  // [1, 2, 99, 3, 4]
 * const example1: Example1 = [1, 2, 99, 3, 4];
 * 
 * // Insert 'a' at index 1 in the array ['b', 'c']
 * type Example2 = Insert<['b', 'c'], 'a', 1>;  // ['b', 'a', 'c']
 * const example2: Example2 = ['b', 'a', 'c'];
 * 
 * // Insert 'X' at index 0 in an empty array
 * type Example3 = Insert<[], 'X', 0>;  // ['X']
 * const example3: Example3 = ['X'];
 */
export type Insert<
  Array extends any[], 
  Element, 
  Index extends number, 
  Accumulator extends any[] = []
> = Accumulator['length'] extends Index
  ? [...Accumulator, Element, ...Array]
  : Array extends [infer First, ...infer Rest]
    ? Insert<Rest, Element, Index, [...Accumulator, First]>
    : Accumulator;

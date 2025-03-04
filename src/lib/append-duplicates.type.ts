/**
 * @description Appends the element to the end of an array.
 * @export
 * @template {readonly any[]} Array 
 * @template Element 
 * @template {number} Count 
 * @template {any[]} [Accumulator=[]] 
 * @example
 * import { AppendDuplicates } from '@typedly/array';
 * 
 * // Append 3 duplicates of "x" to the array [1, 2, 3]
 * type Example1 = AppendDuplicates<[1, 2, 3], "x", 3>;  // [1, 2, 3, "x", "x", "x"]
 * const example1: Example1 = [1, 2, 3, "x", "x", "x"];
 * 
 * // Append 2 duplicates of 4 to the array [5, 6, 7]
 * type Example2 = AppendDuplicates<[5, 6, 7], 4, 2>;  // [5, 6, 7, 4, 4]
 * const example2: Example2 = [5, 6, 7, 4, 4];
 * 
 * // Append 5 duplicates of true to the array [false, true]
 * type Example3 = AppendDuplicates<[false, true], true, 5>;  // [false, true, true, true, true, true, true]
 * const example3: Example3 = [false, true, true, true, true, true, true];
 */
export type AppendDuplicates<
  Array extends readonly Type[], 
  Element extends Type, 
  Count extends number, 
  Type = any,
  Accumulator extends readonly Type[] = []
> = Accumulator['length'] extends Count 
  ? [...Array, ...Accumulator] 
  : AppendDuplicates<Array, Element, Count, Type, [...Accumulator, Element]>;

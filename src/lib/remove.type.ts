/**
 * @description Removes the `Element` type from generic type variable `Array`.
 * @export
 * @template {readonly Type[]} Array 
 * @template {Type} Elements 
 * @template [Type=any] 
 * @example
 * import { Remove } from '@typedly/array';
 * 
 * type Example1 = Remove<[1, 2, 3], 2>;   // [1, 3]
 * type Example2 = Remove<[1, 2, 3], 4>;   // [1, 2, 3] (unchanged)
 * type Example3 = Remove<['a', 'b', 'a'], 'a'>; // ['b'] (removes all occurrences)
 * type Example4 = Remove<[], 'x'>;        // [] (empty stays empty)
 * 
 * const example1: Example1 = [1, 3];
 * const example2: Example2 = [1, 2, 3];
 * const example3: Example3 = ['b'];
 * const example4: Example4 = [];
 */

/**
 * @description
 * @export
 */
export type Remove<
  Array extends readonly Type[],
  Elements extends Type,
  Type = any
> = Array extends [infer First extends Type, ...infer Rest extends readonly Type[]]
  ? First extends Elements
    ? Remove<Rest, Elements, Type>
    : [First, ...Remove<Rest, Elements, Type>]
  : [];

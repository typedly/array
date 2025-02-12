/**
 * @description Appends the `Element` type to the beginning generic type variable `Array`.
 * @export
 * @template {any[]} [Array=[]] 
 * @template Element 
 * @example
 * import { Prepend } from '@typedly/array';
 * 
 * type Example1 = Prepend<[1, 2, 3], 4>; // [4, 1, 2, 3]
 * type Example2 = Prepend<[1, 2, 3], 2>; // [2, 1, 2, 3] (duplicates)
 * type Example3 = Prepend< [], 'x'>;      // ['x']
 * type Example4 = Prepend<[1, 2], 2>;     // [2, 1, 2]
 * type Example5 = Prepend<number[], string>; // [...number[], string]
 * 
 * const example1: Example1 = [4, 1, 2, 3];
 * const example2: Example2 = [2, 1, 2, 3];
 * const example3: Example3 = ['x'];
 * const example5: Example4 = [2, 1, 2];
 * const example6: Example5 = ['a', 1, 2, 3];
 */
export type Prepend<Array extends any[], Element> = [Element, ...Array];

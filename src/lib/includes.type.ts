/**
 * @description Checks whether the generic type variable `Array` contains the `Element` type.
 * @export
 * @template {readonly any[]} Array 
 * @template Element 
 * @example
 * import { Includes } from '@typedly/array';
 * 
 * type Example1 = Includes<[1, 2, 3], 2>;  // true
 * type Example2 = Includes<[1, 2, 3], 4>;  // false
 * 
 * const example1: Example1 = true;
 * const example2: Example2 = false;
 */
export type Includes<Array extends readonly any[], Element> =
  Array extends [infer First, ...infer Rest]
    ?  First extends Element
      ? true
      : Element extends First
        ? true
        : Includes<Rest, Element>
    : false;

/**
 * @description Returns the first element of generic type variable `Array`.
 * @export
 * @template {any[]} Array 
 * @example
 * import { First } from '@typedly/array';
 * 
 * type Example1 = First<[1, 2, 3]>;  // 1
 * type Example2 = First<[]>;         // never
 * 
 * const example1: Example1 = 1;
 * const example2: Example2;
 */
export type First<Array extends any[]> = Array extends [infer First, ...infer _] ? First : never;

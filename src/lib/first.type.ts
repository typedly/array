/**
 * @description Returns the first element of generic type variable `Array`.
 * @export
 * @template {readonly Type[]} Array 
 * @template [Type=any] 
 * @example
 * import { First } from '@typedly/array';
 * 
 * type Example1 = First<[1, 2, 3]>;  // 1
 * type Example2 = First<[]>;         // never
 * 
 * const example1: Example1 = 1;
 * const example2: Example2;
 */
export type First<Array extends readonly Type[], Type = any> = Array extends [infer First, ...infer _] ? First : never;

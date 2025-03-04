/**
 * @description Converts an array to a union.
 * @export
 * @template {readonly Type[]} Array 
 * @template [Type=any] 
 * @example
 * import { ToUnion } from '@typedly/array';
 * type UnionFromArray = ToUnion<[1, 2, 3]>; // UnionFromArray will be: 1 | 2 | 3
 */
export type ToUnion<Array extends readonly Type[], Type = any> = 
  Array extends [infer First, ...infer Rest]
    ? First | ToUnion<Rest>
    : never;

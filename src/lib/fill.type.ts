/**
 * @description Fills the generic type variable `Array with the `Value` type.
 * @export
 * @template {readonly Type[]} Array 
 * @template {Type} Value 
 * @template [Type=any] 
 * @example
 * import { Fill } from '@typedly/array';
 * 
 * type Example1 = Fill<[1, 2, 3], 0>; // [0, 0, 0]
 * 
 * const example1: Example1 = [0,0,0];
 */
export type Fill<Array extends readonly Type[], Value extends Type, Type = any> = { [Index in keyof Array]: Value };

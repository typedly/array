/**
 * @description Fills the generic type variable `Array with the `Value` type.
 * @export
 * @template {readonly any[]} Array 
 * @template Value 
 * @example
 * import { Fill } from '@typedly/array';
 * 
 * type Example1 = Fill<[1, 2, 3], 0>; // [0, 0, 0]
 * 
 * const example1: Example1 = [0,0,0];
 */
export type Fill<Array extends readonly any[], Value> = { [Index in keyof Array]: Value };


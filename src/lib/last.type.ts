/**
 * @description Returns the last element of generic type variable `Array`.
 * @export
 * @template {readonly Type[]} Array 
 * @template [Type=any] 
 * @example
 * type Example1 = Last<[1, 2, 3]>;  // 1
 * type Example2 = Last<[]>;         // never
 * const example1: Example1 = 3;
 * const example2: Example2;
 */
export type Last<Array extends readonly Type[], Type = any> = Array extends [...infer _, infer Last] ? Last : never;

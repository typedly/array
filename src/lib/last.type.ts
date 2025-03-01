/**
 * @description Returns the last element of generic type variable `Array`.
 * @export
 * @template {readonly any[]} Array 
 * @example
 * type Example1 = Last<[1, 2, 3]>;  // 1
 * type Example2 = Last<[]>;         // never
 * const example1: Example1 = 3;
 * const example2: Example2;
 */
export type Last<Array extends readonly any[]> = Array extends [...infer _, infer Last] ? Last : never;

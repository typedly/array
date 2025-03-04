/**
 * @description Returns the length of the generic type variable `Length`.
 * @export
 * @template {readonly Type[]} Array 
 * @template [Type=any] 
 * @example
 * type Example1 = Length<[1, 2, 3]>; // 3
 * type Example2 = Length<[]>;        // 0
 */
export type Length<Array extends readonly Type[], Type = any> = Array['length'];

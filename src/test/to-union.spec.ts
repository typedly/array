import { ToUnion } from '../lib';
 
export type UnionFromArray1 = ToUnion<[1, 2, 3]>; // type UnionFromArray = 3 | 1 | 2
export type UnionFromArray2 = ToUnion<["a", "b", "c"]>; // type UnionFromArray2 = "a" | "b" | "c"

export const example1: UnionFromArray1 = 1;
export const example2: UnionFromArray2 = "b";

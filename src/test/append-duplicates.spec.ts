import { AppendDuplicates } from '../lib/append-duplicates.type';

// Append 3 duplicates of "x" to the array [1, 2, 3]
type Example1 = AppendDuplicates<[1, 2, 3], "x", 3>;  // [1, 2, 3, "x", "x", "x"]
const example1: Example1 = [1, 2, 3, "x", "x", "x"];

// Append 2 duplicates of 4 to the array [5, 6, 7]
type Example2 = AppendDuplicates<[5, 6, 7], 4, 2>;  // [5, 6, 7, 4, 4]
const example2: Example2 = [5, 6, 7, 4, 4];

// Append 5 duplicates of true to the array [false, true]
type Example3 = AppendDuplicates<[false, true], true, 5>;  // [false, true, true, true, true, true, true]
const example3: Example3 = [false, true, true, true, true, true, true];

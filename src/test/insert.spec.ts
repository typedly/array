import { Insert } from "../lib";

// Insert 99 at index 2 in the array [1, 2, 3, 4]
type Example1 = Insert<[1, 2, 3, 4], 99, 2>;  // [1, 2, 99, 3, 4]
const example1: Example1 = [1, 2, 99, 3, 4];

// Insert 'a' at index 1 in the array ['b', 'c']
type Example2 = Insert<['b', 'c'], 'a', 1>;  // ['b', 'a', 'c']
const example2: Example2 = ['b', 'a', 'c'];

// Insert 'X' at index 0 in an empty array
type Example3 = Insert<[], 'X', 0>;  // ['X']
const example3: Example3 = ['X'];

import { AppendIfExists } from '../lib/append-if-exists.type';

// Element exists in the array, so it's appended
type Example1 = AppendIfExists<[1, 2, 3], 2>;  // [1, 2, 3, 2]
const example1: Example1 = [1, 2, 3, 2];

// Element does not exist, so the array remains unchanged
type Example2 = AppendIfExists<[1, 2, 3], 4>;  // [1, 2, 3]
const example2: Example2 = [1, 2, 3];

// Strings work too! "b" exists, so it's appended
type Example3 = AppendIfExists<["a", "b", "c"], "b">;  // ["a", "b", "c", "b"]
const example3: Example3 = ["a", "b", "c", "b"];

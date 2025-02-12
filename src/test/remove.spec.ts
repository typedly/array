import { Remove } from '../lib';

type Example1 = Remove<[1, 2, 3], 2>;   // [1, 3]
type Example2 = Remove<[1, 2, 3], 4>;   // [1, 2, 3] (unchanged)
type Example3 = Remove<['a', 'b', 'a'], 'a'>; // ['b'] (removes all occurrences)
type Example4 = Remove<[], 'x'>;        // [] (empty stays empty)

const example1: Example1 = [1, 3];
const example2: Example2 = [1, 2, 3];
const example3: Example3 = ['b'];
const example4: Example4 = [];

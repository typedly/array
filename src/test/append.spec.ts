import { Append } from "../lib";

type Example1 = Append<[1, 2, 3], 4>; // [1, 2, 3, 4]
type Example2 = Append<[1, 2, 3], 2>; // [1, 2, 3, 2] (duplicates)
type Example3 = Append< [], 'x'>;      // ['x']
type Example4 = Append<[1, 2], 2>;     // [1, 2, 2]
type Example5 = Append<number[], string>; // [...number[], string]

const example1: Example1 = [1, 2, 3, 4];
const example2: Example2 = [1, 2, 3, 2];
const example3: Example3 = ['x'];
const example5: Example4 = [1, 2, 2];
const example6: Example5 = [1, 2, 3, 'a'];

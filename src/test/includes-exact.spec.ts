import { IncludesExact } from "../lib";

export type Example1 = IncludesExact<[1, 2, 3], 2>;  // true
export type Example2 = IncludesExact<[1, 2, 3], 4>;  // false
export type Example3 = IncludesExact<[1, 2, 3], 2>;  // true
export type Example4 = IncludesExact<[1, 2, 3], 4>;  // false
export type ProperExample5 = IncludesExact<[1, 2, 3], 2 | 4>; // false - proper (more precise than `Includes`)
export type ProperExample6 = IncludesExact<[1 | 2, 3], 1>; // false - proper (`1` isn't **exactly** `1 | 2`)

const example1: Example1 = true;
const example2: Example2 = false;
const example3: Example3 = true;
const example4: Example4 = false;
const example5: ProperExample5 = false;
const example6: ProperExample6 = false;

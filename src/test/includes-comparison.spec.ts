import { DeepIncludes, Includes, IncludesExact } from "../lib";

// Test Cases
type A1 = Includes<[1, 2, 3], 2>;  // true OK
type A2 = IncludesExact<[1, 2, 3], 2>;  // true OK
type A3 = DeepIncludes<[1, 2, 3], 2>;  // true OK
type A4 = IncludesExact<[1, 2, 3], 2>;  // true OK

type B1 = Includes<[1, 2, 3], 4>;  // false OK
type B2 = IncludesExact<[1, 2, 3], 4>;  // false OK
type B3 = DeepIncludes<[1, 2, 3], 4>;  // false OK
type B4 = IncludesExact<[1, 2, 3], 4>;  // false OK

type C1 = Includes<[1 | 2, 3], 1>;  // true WRONG (loose match)
type C2 = IncludesExact<[1 | 2, 3], 1>;  // false OK
type C3 = DeepIncludes<[1 | 2, 3], 1>;  // false OK
type C4 = IncludesExact<[1 | 2, 3], 1>;  // false OK

type D1 = Includes<[1, 2, 3], 2 | 4>;  // true WRONG (loose match)
type D2 = IncludesExact<[1, 2, 3], 2 | 4>;  // false OK
type D3 = DeepIncludes<[1, 2, 3], 2 | 4>;  // false OK
type D4 = IncludesExact<[1, 2, 3], 2 | 4>;  // false OK

type E1 = Includes<[1 | 2, 3], 1 | 2>;  // true OK
type E2 = IncludesExact<[1 | 2, 3], 1 | 2>;  // true OK
type E3 = DeepIncludes<[1 | 2, 3], 1 | 2>;  // true OK
type E4 = IncludesExact<[1 | 2, 3], 1 | 2>;  // true OK

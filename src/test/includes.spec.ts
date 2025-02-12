import { Includes } from "../lib";

type Example1 = Includes<[1, 2, 3], 2>;  // true
type Example2 = Includes<[1, 2, 3], 4>;  // false

const example1: Example1 = true;
const example2: Example2 = false;

import { AppendUnique } from "../lib/append-unique.type";

type Example1 = AppendUnique<[1, 2, 3], 4>;  // [1, 2, 3, 4]
type Example2 = AppendUnique<[1, 2, 3], 2>;  // [1, 2, 3] (unchanged)

const example1: Example1 = [1, 2, 3, 4];
const example2: Example2 = [1, 2, 3];

import { Length } from "../lib";

type Example1 = Length<[1, 2, 3]>; // 3
type Example2 = Length<[]>;        // 0

const example1: Example1 = 3;
const example2: Example2 = 0;

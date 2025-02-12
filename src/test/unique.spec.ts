import { Unique } from "../lib";

type Example1 = Unique<[1, 2, 2, 3, 3, 3]>; // [1, 2, 3]

const example1: Example1 = [1, 2, 3];

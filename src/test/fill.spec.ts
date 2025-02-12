import { Fill } from "../lib";

type Example1 = Fill<[1, 2, 3], 0>; // [0, 0, 0]

const example1: Example1 = [0,0,0];

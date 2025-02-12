import { Last } from '../lib/last.type';

type Example1 = Last<[1, 2, 3]>;  // 1
type Example2 = Last<[]>;         // never

const example1: Example1 = 3;
// const example2: Example2;

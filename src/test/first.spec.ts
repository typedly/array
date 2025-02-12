import { First } from '../lib/first.type';

type Example1 = First<[1, 2, 3]>;  // 1
type Example2 = First<[]>;         // never

const example1: Example1 = 1;
// const example2: Example2;

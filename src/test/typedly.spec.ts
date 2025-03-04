import { Typedly } from '../lib/typedly.namespace';

export type Example1 = Typedly.Array.Append.Unique<[1, 2], 3>;

const example1: Example1 = [1, 2, 3];
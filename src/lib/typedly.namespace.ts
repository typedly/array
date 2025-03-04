import {
  Append as _Append,
  AppendDuplicates as _AppendDuplicates,
  AppendIfExists as _AppendIfExists,
  AppendUnique as _AppendUnique,
  First as _First,
  Includes as _Includes,
  Insert as _Insert,
  Last as _Last,
  Length as _Length,
  Prepend as _Prepend,
  Remove as _Remove,
  Reverse as _Reverse,
  ToUnion as _ToUnion,
  Unique as _Unique,
} from '.';

export namespace Typedly {
  export namespace Array {

    export namespace Append {
      export type Append<Array extends readonly Type[], Element extends Type, Type = any> = _Append<Array, Element, Type>;
      export type Unique<Array extends readonly Type[], Element extends Type, Type = any> = _AppendUnique<Array, Element, Type>;
      export type Duplicates<Array extends readonly Type[], Element extends Type, Count extends number, Type = any, Accumulator extends readonly Type[] = []> = _AppendDuplicates<Array, Element, Count, Type, Accumulator>;
      export type IfExists<Array extends readonly Type[], Element extends Type, Type = any> = _AppendIfExists<Array, Element, Type>;
    }

    // export namespace Deep {}

    export namespace Includes {
      export type Includes<Array extends readonly Type[], Element extends Type, Type = any> = _Includes<Array, Element, Type>;
    }

    export type First<Array extends readonly Type[], Type = any> = _First<Array, Type>;
    export type Insert<Array extends readonly Type[], Element extends Type, Index extends number,  Type = any, Accumulator extends readonly Type[] = []> = _Insert<Array, Element, Index, Type>
    export type Last<Array extends readonly Type[], Type = any> = _Last<Array, Type>;
    export type Length<Array extends readonly Type[], Type = any> = _Length<Array, Type>;
    export type Prepend<Array extends readonly any[], Element> = _Prepend<Array, Element>;
    export type Remove<Array extends readonly any[], Element> = _Remove<Array, Element>;
    export type Reverse<Array extends readonly any[]> = _Reverse<Array>;
    export type ToUnion<Array extends readonly any[]> = _ToUnion<Array>;
    export type Unique<Array extends readonly any[]> = _Unique<Array>;
  }
}

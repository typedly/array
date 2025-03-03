import { RemoveFromArrayTuple } from "../lib";

export type TestCharacter = 'a' | 'b' | 'c' | 'd';

export class Test<Character extends [TestCharacter, ...TestCharacter[]] | []> {
  private _characters: Character;

  constructor(character: Character) {
    this._characters = character;
  }

  public add<AddedCharacters extends Exclude<TestCharacter, Character[number]>[]>(
    ...characters: AddedCharacters
  ): Test<Character extends [] ? [] : [...Character, ...AddedCharacters]> {
    const newCharacters = [...this._characters, ...characters] as Character extends [] ? [] : [...Character, ...AddedCharacters];
    return new Test(newCharacters);
  }

  // Modify remove method to handle empty array case
  public remove<RemovedCharacters extends Character[number]>(
    ...characters: RemovedCharacters[]
  ): Test<RemoveFromArrayTuple<TestCharacter, Character, RemovedCharacters>> {
    const filteredChars = this._characters.filter(
      char => !characters.includes(char as RemovedCharacters)
    ) as RemoveFromArrayTuple<TestCharacter, Character, RemovedCharacters>;

    return new Test(filteredChars);
  }

  public get characters(): Character {
    return this._characters;
  }
}

// Test usage:
const test = new Test(['a', 'b', 'c']);
const result = test.remove('c');
console.log(result.characters);



import Character from '../Character';
import Bowman from '../Bowman';
import Daemon from '../Daemon';
import Magician from '../Magician';
import Swordsman from '../Swordsman';
import Undead from '../Undead';
import Zombie from '../Zombie';

test.each([
  [new Bowman('qwerty'), new Character('qwerty', 'Bowman')],
  [new Daemon('qwerty'), new Character('qwerty', 'Daemon')],
  [new Magician('qwerty'), new Character('qwerty', 'Magician')],
  [new Swordsman('qwerty'), new Character('qwerty', 'Swordsman')],
  [new Undead('qwerty'), new Character('qwerty', 'Undead')],
  [new Zombie('qwerty'), new Character('qwerty', 'Zombie')],
])('extends parents properties', (a, b) => {
  const result = Object.keys(a);
  const expected = Object.keys(b);
  expect(result).toEqual(expected);
});

test('return value of name', () => {
  const test = new Character('qwerty', 'Swordsman');
  expect(test.name).toEqual('qwerty');
});

test('return value of type', () => {
  const test = new Character('qwerty', 'Undead');
  expect(test.type).toEqual('Undead');
});

test('name length must be more than 2', () => {
  expect(() => new Character('q', 'Daemon')).toThrowError('Имя должно быть не менее 2 и не более 10 символов');
});

test('name length must be less than 10', () => {
  expect(() => new Character('qwertyqwertyqwerty', 'Magician')).toThrowError('Имя должно быть не менее 2 и не более 10 символов');
});

test('error if wrong type', () => {
  expect(() => new Character('qwerty', 'Peasant')).toThrowError('Тип героя не существует');
});

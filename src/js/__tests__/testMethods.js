import Character from '../Character';

test('error if health = 0', () => {
  const test = new Character('qwerty', 'Zombie');
  test.health = 0;
  expect(() => {
    test.levelUp();
  }).toThrowError('hero dead');
});

test('change level when hero leveled up', () => {
  const test = new Character('qwerty', 'Zombie');
  test.levelUp();
  expect(test.level).toEqual(2);
});

test('attack must change when hero leveled up', () => {
  const test = new Character('qwerty', 'Zombie');
  test.attack = 40;
  test.levelUp();
  expect(test.attack).toEqual(48);
});

test('defence must change when hero leveled up', () => {
  const test = new Character('qwerty', 'Zombie');
  test.defence = 10;
  test.levelUp();
  expect(test.defence).toEqual(12);
});

test('health must change when hero leveled up', () => {
  const test = new Character('qwerty', 'Zombie');
  test.health = 50;
  test.levelUp();
  expect(test.health).toEqual(100);
});

test('error if damage is NaN', () => {
  const test = new Character('qwerty', 'Zombie');
  expect(() => {
    test.damage('40');
  }).toThrowError('value of points is not a number');
});

test('error if health = 0', () => {
  const test = new Character('qwerty', 'Zombie');
  test.health = 0;
  expect(() => {
    test.damage(40);
  }).toThrowError('hero dead');
});

test('change health after damage', () => {
  const test = new Character('qwerty', 'Zombie');
  test.defence = 10;
  test.damage(50);
  expect(test.health).toEqual(55);
});

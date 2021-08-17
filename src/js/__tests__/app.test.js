import Team from '../app';

const bowman = {
  name: 'bowman',
  health: 100,
  level: 1,
  type: 'Bowman',
};

const daemon = {
  name: 'daemon',
  health: 100,
  level: 1,
  type: 'daemon',
};

test('должна добавлять персонажа в Set', () => {
  const testAddSet = new Set();
  const expected = testAddSet.add(bowman);

  const team = new Team();
  team.add(bowman);
  const received = team.members;

  expect(received).toEqual(expected);
});

test('должна генерировать ошибку при дублировании персонажа', () => {
  function testError() {
    const test = new Team();
    test.addAll(bowman, daemon);
    test.add(bowman);
  }

  expect(testError).toThrowError(Error);
});

test('должна добавлять несколько персонажей в Set', () => {
  const testAddAllSet = new Set();
  const expected = testAddAllSet.add(bowman).add(daemon);

  const team = new Team();
  team.addAll(bowman, daemon);
  const received = team.members;

  expect(received).toEqual(expected);
});

test('должна ковертировать Set в массив', () => {
  const testArrSet = new Set();
  const expected = Array.from(testArrSet);

  const team = new Team();
  team.toArray();
  const received = team.members;

  expect(received).toEqual(expected);
});

export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error(`ОШИБКА! Персонаж с именем ${character.name} уже в команде.`);
    }
    this.members.add(character);
  }

  addAll(...characters) {
    for (const character of characters) {
      this.members.add(character);
    }
  }

  toArray() {
    this.members = Array.from(this.members);
  }
}

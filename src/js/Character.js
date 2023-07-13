class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = 0;
    this.defence = 0;
  }

  get name() {
    return this.Name;
  }

  get type() {
    return this.Type;
  }

  set name(value) {
    if (value.length < 2 || value.length > 10) {
      throw new Error('Имя должно быть не менее 2 и не более 10 символов');
    }

    this.Name = value;
  }

  set type(value) {
    this.Type = value;
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack *= 1.2;
      this.defence *= 1.2;
      this.health = 100;
    } else {
      throw new Error('hero dead');
    }
  }

  damage(points) {
    if (typeof points !== 'number') {
      throw new Error('value of points is not a number');
    }

    if (this.health > 0) {
      this.health -= points * (1 - this.defence / 100);
    } else {
      throw new Error('hero dead');
    }
  }
}

export default Character;

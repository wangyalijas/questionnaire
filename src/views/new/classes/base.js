class Base {
  name = '';

  constructor(name = '') {
    this.name = name;
  }

  serialize() {
    return Object.assign({}, this);
  }

  validate() {
    return !!this.name;
  }
}

export default Base;

export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      throw new TypeError('Sqft must be a number');
    }

    if (new.target.evacuationWarningMessage === undefined) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }

    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }
}

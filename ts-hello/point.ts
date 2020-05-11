// or 2 eme facon plus courte de declarer la classe Point2
export class Point {
  constructor(private _x ?: number, private _y ?: number){
  }

  draw() {
    console.log('POINT 2=>X: ' + this.x + ' and Y: ' + this.y);
  }

  get x() {
    return this._x;
  }
  set x(value) {
    if (value < 0) {
      throw new Error(' value ne peut pas etre inferieur a 0');
    } else {
      this._x = value;
    }
  }

  get y() {
    return this._y;
  }
  set y(value: number) {
    if (value < 0) {
      throw new Error(' value ne peut pas etre inferieur a 0');
    } else {
      this._y = value;
    }
  }

}

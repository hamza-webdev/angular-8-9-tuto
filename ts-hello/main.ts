import { Point } from './point';

const point = new Point(7, 9);
point.x = 12;
point.draw();


// 1 facon d ecrire la classe : declarer paramettre on privé et appeler
// le constructor avec paramas with ?
// class Point {
//   private x: number;
//   private y: number;
//
//   constructor(x?: number, y?: number) {
//     this.x = x;
//     this.y = y;
//   }
//
//   draw() {
//     console.log('POINT 1=>X: ' + this.x + ' and Y: ' + this.y);
//   }
//
//   getDistance(another: Point) {
//     // ....
//   }
//
//   getX() {
//     return this.x;
//   }
//
//   setX(value) {
//     if (value < 0) {
//       throw new Error(' value ne peut pas etre inferieur a 0');
//     } else {
//       this.x = value;
//     }
//   }
// }



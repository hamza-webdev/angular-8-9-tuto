// 1 facon d ecrire la classe : declarer paramettre on privé et appeler
// le constructor avec paramas with ?
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log('POINT 1=>X: ' + this.x + ' and Y: ' + this.y);
    };
    Point.prototype.getDistance = function (another) {
        // ....
    };
    Point.prototype.getX = function () {
        return this.x;
    };
    Point.prototype.setX = function (value) {
        if (value < 0) {
            throw new Error(' value ne peut pas etre inferieur a 0');
        }
        else {
            this.x = value;
        }
    };
    return Point;
}());
// or 2 eme facon plus courte de declarer la classe Point2
var Point2 = /** @class */ (function () {
    function Point2(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Point2.prototype.draw = function () {
        console.log('POINT 2=>X: ' + this.x + ' and Y: ' + this.y);
    };
    Object.defineProperty(Point2.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            if (value < 0) {
                throw new Error(' value ne peut pas etre inferieur a 0');
            }
            else {
                this._x = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Point2.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (value) {
            if (value < 0) {
                throw new Error(' value ne peut pas etre inferieur a 0');
            }
            else {
                this._y = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    return Point2;
}());
var point = new Point(1, 2);
// point.x = 1;
// point.y = 2;
point.draw();
var p = new Point2(7, 9);
p.x = 12;
p.draw();

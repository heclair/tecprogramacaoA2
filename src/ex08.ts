class Point {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  distance(ponto: Point): number {
    const difx = ponto.x - this.x;
    const dify = ponto.y - this.y;
    return Math.sqrt(difx ** 2 + dify ** 2);
  }
}

class Rectangle {
  inferiorEsquerdo: Point;
  superiorDireito: Point;

  constructor(ie: Point, sd: Point) {
    this.inferiorEsquerdo = ie;
    this.superiorDireito = sd;
  }

  largura() {
    return this.superiorDireito.x-this.inferiorEsquerdo.x;
  }

  altura() {
    return this.superiorDireito.y-this.inferiorEsquerdo.y;
  }

  area() {
    return this.largura ()* this.altura();
  }
}

const sd = new Point(3, 5);
const ie = new Point(1, 2);

const r = new Rectangle(ie, sd);
console.log("Área:", r.area());

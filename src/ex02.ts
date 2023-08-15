class Retangulo {
  base: number;
  altura: number;
  constructor(base: number, altura: number) {
    this.base = base;
    this.altura = altura;
  }
  area(): number {
    return this.base * this.altura;
  }
  perimetro(): number {
    return 2 * this.base + 2 * this.altura;
  }
}

const area = new Retangulo(3, 4);
const perimetro = new Retangulo(3, 4);

console.log("Área", area.area());
console.log("Perímetro", perimetro.perimetro());

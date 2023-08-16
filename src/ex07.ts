class Ponto {
  x: number;
  y: number;

  constructor(x:number, y:number){
      this.x = x;
      this.y = y;
  }

  distancia(ponto:Ponto):number{
      const difx = ponto.x - this.x;
      const dify = ponto.y - this.y;
      return Math.sqrt(difx**2 + dify**2);
  }

}

const f = new Ponto(3, 5);
const g = new Ponto(1, 2);
//observe que passamos como parâmetro um objeto do tipo Ponto
console.log("Distância:", f.distancia(g));

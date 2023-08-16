class Carro {
  marca: string = "";
  modelo: string = "";

  /*constructor(marca: string, modelo: string) {
    this.marca = marca;
    this.modelo = modelo;
  }*/

  setMarca(marca: string): void {
    this.marca = marca;
  }
  setModelo(modelo: string): void {
    this.modelo = modelo;
  }
  print(): void {
    console.log(`${this.marca} ${this.modelo}`);
  }
}

/*const d = new Carro("VW", "Gol");
const e = new Carro("Fiat", "Uno");*/

const um = new Carro ();
um.modelo = "Gol";
um.marca = "VW";
const dois = new Carro();
dois.modelo = "Uno";
dois.marca = "Fiat";
um.print();
dois.print();

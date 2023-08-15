class Filme {
  titulo: string;
  duracao: number;

  constructor(titulo: string, duracao: number) {
    this.titulo = titulo;
    this.duracao = duracao;
  }

  imprimir(): void {
    console.log(`O filme ${this.titulo} possui ${this.duracao} min.`);
  }
}

const a = new Filme("De Volta Para o Futuro", 116);
const b = new Filme("Matrix", 136);
a.imprimir();
b.imprimir();

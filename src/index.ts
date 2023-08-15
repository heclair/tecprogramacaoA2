class Pessoa {
  nome: string; // nome e idade são variáveis
  idade: number;

constructor(a:string,b:number){
    this.nome = a;
    this.idade = b;
}

  imprimir():void {
    //nome seguido de abre e fecha parenteses é função, dentro da classe é um método
    console.log(this.nome, this.idade);
  }
}

const p = new Pessoa("Heclair",28);
const q = new Pessoa ("Marcelo",22);

p.imprimir();
q.imprimir();
class Aleatorio {
  get(): number {
    return Math.floor(Math.random() * 100 + 1);
  }
}

const c = new Aleatorio();

for (let i = 0; i < 5; i++) {
  const aleatorioCont = c.get();
  console.log(aleatorioCont);
}

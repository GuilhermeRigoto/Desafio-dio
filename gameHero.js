class hero {
  constructor(nome, age, type, power) {
    this.nome = nome;
    this.age = age;
    this.type = type;
    this.power = power;
  }
  atack() {
    console.log(
      `O Herói ${this.nome} de ${this.age} anos, pertencente a classe dos ${this.type}, atacou o vilão usando ${this.power} e foi muito danoso, o vilão morreu.`
    );
  }
}

let mago = new hero("Mago Negro", 400, "Moriuons", "Terremoto");
mago.atack();

let cavaleiro = new hero("Kina", 250, "Moriuons", "Espada em Chamas");
cavaleiro.atack();

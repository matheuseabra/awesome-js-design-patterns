//*******************************************************//
// The Constructor Pattern
//*******************************************************//

// Uma classe "carro"

// Abaixo é usado a nova declaração para classes
// é também usado nova declaração de métodos construtores
// Classes são uma sintaxe para a utilização do conceito
// de Herança de protótipos em JS

class Car {
    constructor(model) {
        this.model = model;
        this.color = 'prata';
        this.year = '2018';
    }

    getInfo() {
        return ` O carro é de modelo ${this.model}, ano ${this.year} e cor ${this.color}.`;
    }
}

// Uso:

// [ES6+] Usado nova palavra-chave para declaração de váriáveis imutáveis - const

const myCar = new Car('ford');

myCar.year = '2016';

console.log(myCar.getInfo());
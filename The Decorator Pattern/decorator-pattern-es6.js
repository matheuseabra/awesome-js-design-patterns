//*******************************************************//
// The Decorator Pattern
//*******************************************************//


class MacBook {
    // define construtor de Macbook com atributos padrões
    constructor() {
        this.cost = 997;
        this.screenSize = 11.6;
    }

    // métodos pertecentes a classe
    getCost() {
        return this.cost;
    }
    getScreenSize() {
        return this.screenSize;
    }
}


// [ES6 +] A palavra-chave extends cria uma classe filha extendida da classe pai
// [ES6 +] O construtor pode usar a palavra-chave super para invocar o construtor da classe pai
class Memory extends MacBook {
    constructor(macBook) {
        super();
        this.macBook = macBook;
    }

    getCost() {
        return this.macBook.getCost() + 75;
    }
}


class Engraving extends MacBook {
    constructor(macBook) {
        super();
        this.macBook = macBook;
    }

    getCost() {
        return this.macBook.getCost() + 200;
    }
}

// Decorator 3
class Insurance extends MacBook {
    constructor(macBook) {
        super();
        this.macBook = macBook;
    }

    getCost() {
        return this.macBook.getCost() + 250;
    }
}

// instancia objeto principal
let mb = new MacBook();

// instancia decorators
mb = new Memory(mb);
mb = new Engraving(mb);
mb = new Insurance(mb);

// Saída: 1522
console.log(mb.getCost());

// Saída: 11.6
console.log(mb.getScreenSize());
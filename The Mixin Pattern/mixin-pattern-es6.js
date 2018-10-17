//*******************************************************//
// Sub-Classes
//*******************************************************//

class Person {
    constructor(firstName, lastName, gender) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
    }
}

// uma nova instância de Person é criada
const bruce = new Person('Bruce', 'Wayne');

// Define um construtor para a sub-classe "Superhero"

class Superhero extends Person {
    constructor(firstName, lastName, powers) {

        // O construtor então usa a palavra-chave 'super' para chamar o construtor da classe superior
        super(firstName, lastName);

        // Armazena super-poderes, seria um novo array que não estaria acessível para classe Person
        this.powers = powers;
    }
}
// Cria uma instância de super-herói
const batman = new Superhero('Bruce', 'Wayne', ['a lot of money', 'bat-belt']);

// Saída: atributos de ambos Person e SuperHero
console.log(batman);


//*******************************************************//
// The Mixin Pattern
//*******************************************************//

// Define a simple Car constructor
class Car {
    constructor({ model, color }) {
        this.model = model || 'modelo não foi fornecido';
        this.color = color || 'cor não foi fornecido';
    }
}

// Mixin
class Mixin {

    driveForward() {
        console.log('siga em frente');
    }

    driveBackward() {
        console.log('dê ré');
    }

}
// Extendendo um objeto existente com um método por outro
// [ES6+] O parâmetro 'rest' nos permite representar um número indefinido de argumentos como array

const augment = (receivingClass, givingClass, ...methodsNames) => {
    // provê apenas certos métodos
    if (methodsNames.length !== 0) {
        // [ES6+] A função 'map' chama uma função callback para cada elemento do array, em ordem,  e retorna um novo array
        methodsNames.map(methodName => {
            receivingClass.prototype[methodName] = givingClass.prototype[methodName];
        });

        // ou então provê todos os métodos
    } else {
        // [ES6+] Novo método nativo do objeto Object, Object.getOwnPropertyNames() retorna um array com todas as propriedades de um objeto
        Object.getOwnPropertyNames(givingClass.prototype).map(methodName => {

            // Verfica se a classe não possui um método de mesmo nome que a classe sendo processada no momento
            if (!Object.hasOwnProperty.call(receivingClass.prototype, methodName)) {
                receivingClass.prototype[methodName] = givingClass.prototype[methodName];
            }
        });
    }
};

// Aumenta o construtor de Car para incluir métodos "driveForward()" e "driveBackward()"
augment(Car, Mixin, 'driveForward', 'driveBackward');

// Create a new Car
const myCar = new Car({
    model: 'Ford Sport',
    color: 'Azul',
});

// Teste para ver se temos acesso aos novos métodos
myCar.driveForward();
myCar.driveBackward();

// Saída:
// siga em frente
// dê ré


// Podemos também aumentar a classe Car para incluir todas as funções
// da classe Mixin
augment(Car, Mixin);

const mySportsCar = new Car({
    model: 'Porsche',
    color: 'Vermelho',
});


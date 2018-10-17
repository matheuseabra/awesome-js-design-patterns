//*******************************************************//
// The Factory Pattern
//*******************************************************//

// Types.js - Construtores são usados por de trás

// Um construtor para definir carros
class Car {
    constructor({ doors, state, color }) {
        // alguns padrões
        this.doors = doors || 4;
        this.state = state || 'semi-novo';
        this.color = color || 'prata';
    }
}
// Um construtor para definir caminhões
class Truck {
    constructor({ state, wheelSize, color }) {
        this.state = state || 'usado';
        this.wheelSize = wheelSize || 'grande';
        this.color = color || 'azul';
    }
}

// FactoryExample.js

// Define uma Factory de veículos
class VehicleFactory {
    //Define os protótipos e utilidades para esta factory

    // A classe padrão de veículo é carro
    constructor() {
        this.vehicleClass = Car;
    }

    // Método para criar novas instâncias de veículos
    createVehicle(options) {
        switch (options.vehicleType) {
            case 'car':
                this.vehicleClass = Car;
                break;
            case 'truck':
                this.vehicleClass = Truck;
                break;
        }

        return new this.vehicleClass(options);
    }
}

// Cria uma instância da nossa factory de objetos carros
const carFactory = new VehicleFactory();
const car = carFactory.createVehicle({
    vehicleType: 'car',
    color: 'yellow',
    doors: 6,
});

// Teste para verificar se o carro foi criado usando o vehicleClass/protótipo Car

// Saída: true
console.log(car instanceof Car);

// Saída: Car object of color "yellow", doors: 6 in a "brand new" state
console.log(car);
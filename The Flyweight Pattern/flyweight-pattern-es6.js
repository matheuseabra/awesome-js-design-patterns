//*******************************************************//
// The Flyweight Pattern
//*******************************************************//

// objeto Flyweight
const CoffeeOrder = {
    // Interfaces
    serveCoffee(context) {},
    getFlavor() {},
};

// Implementa CoffeeOrder
function CoffeeFlavor(newFlavor) {
    const flavor = newFlavor;


    // Se uma interface foi definida para uma funcionalidade,
    // implementa funcionalidade
    if (typeof this.getFlavor === 'function') {
        this.getFlavor = () => flavor;
    }

    if (typeof this.serveCoffee === 'function') {
        this.serveCoffee = context => {
            console.log(
                `Servindo café de sabor ${flavor} para a mesa de número ${context.getTable()}`
            );
        };
    }
}

// Implementa interface para CoffeeOrder
CoffeeFlavor.implementsFor(CoffeeOrder);


// Lida com o número de mesas para pedidos de café
const CoffeeOrderContext = tableNumber => {
    return {
        getTable() {
            return tableNumber;
        },
    };
};

// Factory de café (Module Pattern)
const CoffeeFlavorFactory = () => {
    const flavors = {};
    let length = 0;

    return {
        getCoffeeFlavor(flavorName) {
            let flavor = flavors[flavorName];
            if (typeof flavor === 'undefined') {
                flavor = new CoffeeFlavor(flavorName);
                flavors[flavorName] = flavor;
                length++;
            }
            return flavor;
        },

        getTotalCoffeeFlavorsMade() {
            return length;
        },
    };
};

// Uso:
// testFlyweight()

const testFlyweight = () => {
    // array de sabores de café pedidos.
    const flavors = [];

    // array das mesas dos clientes que pediram café.
    const tables = [];

    // número de pedidos
    let ordersMade = 0;

    // cria uma instância da Factory de café
    const flavorFactory = new CoffeeFlavorFactory();

    function takeOrders(flavorIn, table) {
        flavors.push(flavorFactory.getCoffeeFlavor(flavorIn));
        tables.push(new CoffeeOrderContext(table));
        ordersMade++;
    }

    takeOrders('Cappuccino', 2);
    takeOrders('Cappuccino', 2);
    takeOrders('Frappe', 1);
    takeOrders('Frappe', 1);
    takeOrders('Xpresso', 1);
    takeOrders('Frappe', 897);
    takeOrders('Cappuccino', 97);
    takeOrders('Cappuccino', 97);
    takeOrders('Frappe', 3);
    takeOrders('Xpresso', 3);
    takeOrders('Cappuccino', 3);
    takeOrders('Xpresso', 96);
    takeOrders('Frappe', 552);
    takeOrders('Cappuccino', 121);
    takeOrders('Xpresso', 121);

    for (let i = 0; i < ordersMade; ++i) {
        flavors[i].serveCoffee(tables[i]);
    }
    console.log(' ');
    console.log(
        `total de objetos CoffeeFlavor criados: ${flavorFactory.getTotalCoffeeFlavorsMade()}`
    );
};
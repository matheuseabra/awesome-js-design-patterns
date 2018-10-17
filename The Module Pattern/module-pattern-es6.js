//*******************************************************//
// The Module Pattern
//*******************************************************//


// Definição dp módulo, cria um objeto exposto publicamente

const basketModule = {
    // Adiciona itens na cesta
    addItem(values) {
        basket.push(values);
    },

    // Conta o total de itens na cesta
    getItemCount() {
        return basket.length;
    },

    // Alias público para a função que é privada
    doSomething() {
        doSomethingPrivate();
    },

    getTotal() {
        // (ES6+) O método reduce() aplica recebe uma função contra um acumulador
        // e cada elemento do array é reduzido a um único valor
        return basket.reduce((currentSum, item) => item.price + currentSum, 0);
    },
};

export default basketModule;
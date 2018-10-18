//*******************************************************//
// The Singleton Pattern
//*******************************************************//

// O Singleton Pattern é conhecido por restringir a instaciação
// de uma classe para um único objeto. Tradicionalmente, o Singleton
// pode ser implementado ao criar uma classe com um método que cria uma
// instância dessa classe se já não existir. No caso de uma instância já existir,
// apenas retorna uma referência aquele objeto

// [ES6+] Nova implementação com palavras-chave import e export

// variável que armazena uma referência ao Singleton
let instance;

// Private methods and variables
const privateMethod = () => {
    console.log('Eu sou privado');
};
const privateVariable = 'Também sou privado';
const randomNumber = Math.random();

// Singleton
class MySingleton {
    // Cria uma instância da classe,
    // ou cria uma caso não existir
    constructor() {
        if (!instance) {
            // atributo público
            this.publicProperty = 'Eu sou público';
            instance = this;
        }

        return instance;
    }

    // Métodos públicos
    publicMethod() {
        console.log('O público pode me ver!');
    }

    getRandomNumber() {
        return randomNumber;
    }
}
// [ES6+] Exporta módulo
export default MySingleton;
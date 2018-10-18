//*******************************************************//
// The Prototype Pattern
//*******************************************************//

// Podemos pensar no padrão do protótipo como sendo baseado na herança de protótipo,
// onde criamos objetos que atuam como protótipos para outros objetos.

const Dog = {
    name: 'Puff',

    bark() {
        console.log("Cão late");
    },

    eat() {
        console.log('Cão come');
    },
};

// Usa Object.create para instânciar um novo cão com obj protótipo
const myDog = Object.create(Dog);

// Agora o objeto myDog é protótipo de Dog
console.log("My dog's name is: ", myDog.name);
// Saída: My dog's name is: Puff
//*******************************************************//
// The Revealing Module Pattern
//*******************************************************//

let myRevealingModule = (function () {

    let privateVar = "Matheus Coelho",
        publicVar = "Olá!";

    function privateFunction() {
        console.log( "Nome:" + privateVar );
    }

    function publicSetName( strName ) {
        privateVar = strName;
    }

    function publicGetName() {
        privateFunction();
    }

    // Revela ponteiros públicos para
    // funções e propriedades privadas
    return {
        setName: publicSetName,
        greeting: publicVar,
        getName: publicGetName
    };

})();

myRevealingModule.setName( "Alice" );
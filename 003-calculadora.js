console.log("--- CALCULADORA ---");

const MODULE = (function() {
    var calculadora = {result : 0};

    calculadora.soma = function(x, y) {
        calculadora.result = x + y;
        return calculadora.result;
    }
    
    calculadora.subtracao = function(x, y) {
        calculadora.result = x - y;
        return calculadora.result;
    }

    calculadora.divisao = function(x, y) {
        calculadora.result = x / y;
        return calculadora.result;
    }

    calculadora.multiplicacao = function(x, y) {
        calculadora.result = x + y;
        return calculadora.result;
    }

    return {
        opSoma: calculadora.soma,
        opSubtracao: calculadora.subtracao,
        opDivisao: calculadora.divisao,
        opMultiplicacao: calculadora.multiplicacao
    }



})();
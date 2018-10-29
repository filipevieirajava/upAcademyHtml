/**
* description
*@param {string} combustivel .
*@param {string} cor .
*@param {number} numeroDeRodas .
*
*/
class veiculo {
    constructor(combustivel, cor, numeroDeRodas = 2) {
        this.combustivel = combustivel;
        this.cor = cor;
        this.numeroDeRodas = numeroDeRodas;
        this.contaQuilometros = 0;
    }
    andar() {
        this.contaQuilometros++;
        console.log('andou '+this.contaQuilometros+'quilometros')
    }
}
var v1 = new veiculo('gasoleo', 'red', 4, 0)
console.log(v1)
v1.andar();


function anda() {
    v2 = v1.andar();

   console.log(v2);
}

class automovel extends veiculo {
    constructor(combustivel, cor, numeroAssentos, numeroPortas, litrosDeposito) {
        super(combustivel, cor, 4);
        this.numeroAssentos = numeroAssentos;
        this.numeroPortas = numeroPortas;
        this.litrosDeposito = this.litrosDeposito
    }
    porCombustivel(litros) {
        this.litrosDeposito += litros
    }
    tirarCombustivel(litros) {
        this.litrosDeposito -= litros
    }
}
var auto1= new automovel ('gasolina','nigga',2,4)
function andaa() {
    v2 = auto1.andar();

    console.log('auto1 ',auto1);


    
 }
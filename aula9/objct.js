var data = [
    {
        id: '1',
        nome: 'ze',
        pedido: [{
            p1: 'big mac',
            extras: 'sem alface'
        },
        {
            p1: 'cheese',
            extras: 'cheese sem queijo'
        }]
    },
    {
        id: '2',
        nome: 'to',
        pedido: [{
            p1: ' salada',
        },
        {
            p1: ' sunday',
            extras: 'extra caramelo',
        }]
    },
    {
        id: '3',
        nome: 'carlos',
        pedido: [{
            p1: 'cbo'
        },
        {
            p1: 'salada',
        }]
    },
    {
        id: '4',
        nome: 'rex',
        pedido: [{
            p1: 'restos',
            extras: ['cenas ',
                'cenas ',
                'cenas ']
        }]


    },
]
function retornaExtra() {


    var c = [];

    for (let index = 0; index < data.length; index++) {

        var factura = data[index];
        console.log(factura, 'primeiro');




        for (let i = 0; i < factura.pedido.length; i++) {

            if (Object.keys(factura.pedido[i]).length > 1) {

                c.push(data[index]);
                console.log(c, 'segundo');
                break;
            }
            console.log(c, 'terceiro');
        }
        console.log(c, 'quarto');

    } return console.log(c, 'quinto');

}
// cria objecto chamdo 'Objecto' com keys menu e especial

// vai buscar os inputs ao html

// var pedido1 = document.getElementById("pede").nodeValue;


// console.log(pedido1);

var pedido1

pedido1 = document.getElementById('pede').value;
// console.log(pedido1);
// var extra1 = document.getElementById('extra').nodeValue;
// console.log(extra1);
// var nome1 = document.getElementById('nP').value;
// console.log(nome1);

// cria objecto com os inputs

class Pedido {
    constructor(x) {
        this.menu = x
    }

    criaPedido() {
        this.menu = document.getElementById('pede').value;
        if (extra1 !== 'EXTRA' && extra1 !== '') {
            this.especial = document.getElementById('extra').value;
        }
        return this
    }
    
}
function teste() {
    var x = new Pedido().criaPedido();
    console.log(x)
}
$("#testes").html()

// console.log(pedido1);
var extra1 =
    console.log(extra1);
var nome1 = document.getElementById('nP').value;
console.log(nome1);






// var pp = new Objecto(pedido1, extra1);
// return pp, console.log('fim?', pp)
//     }
//     else if (extra1 == 'EXTRA' || extra1 == '') {
//     class Objecto {
//         constructor(x) {
//             this.menu = x;
//         }
//     }
//     var pp = new Objecto(pedido1);
//     return pp, console.log('fim2?', pp)
// }
// }
class factura {
    constructor(ida, pessoaa, pedidoa) {
        this.id = ida;
        this.pessoa = pessoaa;
        this.pedido = pedidoa;
    }
};
function Factura() {

    var pedido = criaPedido();
    var idUNi = new Date().getUTCMilliseconds();
    console.log(idUNi + 'ID UNICO');
    var nomPessoa = document.getElementById('nP').value;
    console.log(nomPessoa + 'nome da pessoa');
    var fac = new factura(idUNi, nomPessoa, pedido);
    console.log(pedido)
    return fac, console.log(fac)


}
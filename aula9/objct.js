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
var nome1 = document.getElementById('nP').innerHTML;
var pedido1 = document.getElementById('pede').innerHTML;
var extra1 = document.getElementById('extra').innerHTML;

function fazArray() {

    var nome1 = document.getElementById('nP').innerHTML;
    var pedido1 = document.getElementById("pede").innerHTML;
    var extra1 = document.getElementById('extra').innerHTML;

    var c = [];


    var pedidoinp = new Object();
    pedidoinp.id = '1';
    pedidoinp.nome = nome1;
    pedidoinp.pInd = pedido1;

    return console.log(pedidoinp)
}
// cria objecto chamdo 'Objecto' com keys menu e especial

// vai buscar os inputs ao html

// var pedido1 = document.getElementById("pede").nodeValue;


console.log(pedido1);

var pedido1 = document.getElementById('pede').value;
console.log(pedido1);
var extra1 = document.getElementById('extra').nodeValue;
console.log(extra1);
var nome1 = document.getElementById('nP').value;
console.log(nome1);

// cria objecto com os inputs
function criaPedido() {
    var pedido1 = document.getElementById('pede').value;
console.log(pedido1);
var extra1 = document.getElementById('extra').value;
console.log(extra1);
var nome1 = document.getElementById('nP').value;
console.log(nome1);

   
    if (extra1 !== 'EXTRA' && extra1 !== '') {

        function Objecto(x, y) {
            this.menu = x;
            this.especial = y;
        }
        var pp = new Objecto(pedido1, extra1);
        return console.log('fim?', pp)
    }
    else if (extra1 =='EXTRA'|| extra1 == '') {
        function Objecto(x) {
            this.menu = x;
        }
        var pp = new Objecto(pedido1);
        return console.log('fim2?', pp)
    }



}
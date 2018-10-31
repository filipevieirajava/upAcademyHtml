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
// ------------------------------------------------------------------------------------------------------
var pedeidoTotal = []
var facturaTotal =[]
class Pedido {
    constructor(x) {
        this.menu = x
    }

    criaPedido() {
        this.menu = document.getElementById('pede').value;
        if (document.getElementById('extra').value !== 'EXTRA' && document.getElementById('extra').value !== '') {
            this.especial = document.getElementById('extra').value;
        }
        return this
    }

}


    function teste() {


        var x = new Pedido().criaPedido();
        console.log('esta aqui o x ', x);
        return x, pedeidoTotal.push(x), console.log(pedeidoTotal)
    
    }
   



class Factura {
    constructor(x, y, z) {
        this.id = x;
        this.noPessoa = y;
        this.pedido = z;
    }
    criaFactura() {
        this.id = new Date().getUTCMilliseconds();
        console.log('id  ' + this.id);
        this.noPessoa = document.getElementById('nP').value;
        console.log('nome   ' + this.noPessoa);
        this.pedido = pedeidoTotal;

        console.log('pedido  ' + this.pedido);
        return this
    }

}
function teste2() {
    var y = new Factura().criaFactura();
    console.log(y)
    return y, facturaTotal.push(y), console.log(facturaTotal)
}

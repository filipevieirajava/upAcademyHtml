function getMeteo() {
    $.ajax({
        url: ' http://192.168.0.122:3000/health',
        type: 'GET',
        contentType: 'application/json',
        success: function (data) {
            console.log(data);

        }


    })
};
getMeteo();

// -------------------------------------------------------------------------------------------
var data = getData();
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

function postFactura() {
    var pedidoJSon = JSON.stringify(facturaTotal);
    // $.post('http://192.168.0.122:3000/api/products',pedeidoTotal,'application/json')
    $.post({
        url: 'http://192.168.0.122:3000/api/products',
        // data: pedidoJSon,
        type: 'POST',
        contentType: 'application/json',
        success: function (data) {
            console.log(data);
            $.ajax({
                url: 'http://192.168.0.122:3000/api/orders',
                type: 'put',
                data: JSON.stringify(facturaTotal),
                contentType: 'application/json',
                success: function (data) {
                    console.log(data);
                    return data;

                }


            })
        },
        error: function (data) {
            console.log("Error  ", data)
        }


    })
};

function getData() {

    $.ajax({
        url: 'http://192.168.0.122:3000/api/orders',
        type: 'GET',
        contentType: 'application/json',
        success: function (data) {
            console.log(data);
            return data;

        }


    })
};

// function podtFactura2{
//     $.().post('http://192.168.0.122:3000/api/products',pedidoJSon)
// }


// ------------------------------------------------------------------------------------------------------
var pedeidoTotal = []

var facturaTotal = []
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
    constructor(y, z) {
        // this.id = x;
        this.name = y;
        this.pedido = z;
    }
    criaFactura() {
        this.id = new Date().getUTCMilliseconds();
        console.log('id  ' + this.id);
        this.noPessoa = document.getElementById('nP').value;
        console.log('nome   ' + this.noPessoa);
        this.pedido = JSON.stringify(pedeidoTotal);

        console.log('pedido  ' + this.pedido);
        return this
    }

}
function teste2() {
    var y = new Factura().criaFactura();
    console.log(y);

    return y, facturaTotal.push(y), console.log(facturaTotal)
}


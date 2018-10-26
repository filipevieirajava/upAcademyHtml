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
function recebe() {


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

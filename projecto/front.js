// -------------------variaveis globais----------------------------------variaveis globais-----------------------------------------variaveis globais--------------------------------
var shelves = [];
var products = [];
// -------------------variaveis globais----------------------------------variaveis globais-----------------------------------------variaveis globais--------------------------------
// ------------------funcoes de arranque para fazer GET-------------------funcoes de arranque para fazer GET-----------------------funcoes de arranque para fazer GET-------------------
function arranque() {
    $.ajax({
        url: `https://mcupacademy.herokuapp.com/api/shelves`,
        method: 'get',
        success: function (response) {
            console.log('shelves');
            console.log(response);
            makeShelf(response);
        },
        error: function (err) {
            console.log(err);
        }
    });

};
function arranque2() {
    $.ajax({
        url: `https://mcupacademy.herokuapp.com/api/Products`,
        method: 'get',
        success: function (response1) {
            console.log('products');
            console.log(response1);
            makeProducts(response1);
        },
        error: function (err1) {
            console.log(err1);
        }
    });
};
// ------------------funcoes de arranque para fazer GET-------------------funcoes de arranque para fazer GET-----------------------------funcoes de arranque para fazer GET-------------------
// ------------------constructores de productos e prateleiras----------// ------------------constructores de productos e prateleiras----------// ------------------constructores de productos e prateleiras----------
class Product {
    constructor(discountValue, iva, pvp, id) {
        this.discountValue = discountValue;
        this.iva = iva;
        this.pvp = pvp;
        this.id = id;
    }

}

class Shelf {
    constructor(capacity, rentPrice, id, productId) {
        this.capacity = capacity;
        this.rentPrice = rentPrice;
        this.id = id;
        this.productId = productId;
    }
};

arranque();
arranque2();

function makeProducts(response1) {
    for (let index = 0; index < response1.length; index++) {
        this.discountValue = response1[index].discountValue;
        this.iva = response1[index].iva;
        this.pvp = response1[index].pvp;
        this.id = response1[index].id;
        var product = new Product(discountValue, iva, pvp, id);
        products.push(product);
    } console.log(product);
    console.log(product);

};

function makeShelf(response) {
    for (let index = 0; index < response.length; index++) {
        this.capacity = response[index].capacity;
        this.rentPrice = response[index].rentPrice;
        this.id = response[index].id;
        this.productId = response[index].productId;
        var shelf = new Shelf(capacity, rentPrice, id, productId);
        shelves.push(shelf);
    } console.log(shelf);
    console.log(shelves)
    tableShelves()
};
// ------------------constructores de productos e prateleiras----------// ------------------constructores de productos e prateleiras----------// ------------------constructores de productos e prateleiras----------
// ------------escrever no html----------------// ------------escrever no html----------------// ------------escrever no html----------------// ------------escrever no html----------------
// desenha a tabela com as prateleiras
function tableShelves() {
    $("#askP").remove();
    $(".table").remove();
    $("body:last-child").append(cabShe1 + cabShe);
    for (let index = 0; index < shelves.length; index++) {
        this.capacity = shelves[index].capacity;
        this.rentPrice = shelves[index].rentPrice;
        this.id = shelves[index].id;
        this.productId = shelves[index].productId;

        $("tbody:last-child").append('<tr><td>' + id + '</td><td>' + capacity + '</td><td>' + rentPrice + '</td><td>' + productId + '</td></tr>');
    }

};
// desenha a tabela com os produtos 
function tableProducts() {
    $(".table").remove();
    $("#askP").remove();
    // desenha o input para fazer post do produto
    $("body:last-child").append(cabProd1 + cabProd);

    for (let index = 0; index < products.length; index++) {
        this.discountValue = products[index].discountValue;
        this.iva = products[index].iva;
        this.pvp = products[index].pvp;
        this.id = products[index].id;
        // rows dos products
        $("tbody:last-child").append('<tr><td>' + id + '</td><td>' + discountValue + '</td><td>' + iva + '</td><td>' + pvp + '</td></tr>');
    }

};

// function askProducts() {
//     $(".table").remove();
//     $("#askP").remove();
//     $("body:last-child").append(askProd)
// };
function askShelves() {
    $(".table").remove();
    $("#askP").remove();
    $("body:last-child").append(askShe)
};

var Pdis = '<input type="text" placeholder="discount" value="99"  name="discount" id="discount">'
var Piva = '<input type="number" placeholder="iva" value="99" name="iva" id="iva">'
var Ppvp = '<input type="number" placeholder="pvp" value="99" name="pvp" id="pvp">'
var Pbtn = '<button onclick="postProduct()"><strong>POST Product</strong></button>'
// cabecalho dos inputs dos products
var cabProd1 = '<table id="ttotal" class="table"> <thead> <tr><th>' + Pbtn + '</th><th>' + Pdis + '</th> <th>' + Piva + '</th> <th>' + Ppvp + '</th> </tr>'
// cabecalho da tabela dos products
var cabProd = '<tr><th>ID</th><th>Discount Value</th> <th>IVA</th> <th>PVP</th> </tr> </thead><tbody> <tr> </tr></tbody> </table>';

var Pcap = '<input type="text" placeholder="capacity" name="capacity" value="99" id="capacity">'
var PrentPrice = '<input type="number" placeholder="rentPrice" name="rentPrice" value="99" id="rentPrice">'
var PprodID = '<input type="number" placeholder="productId" value="99" name="productId" id="productId">'
var Sbtn = '<button onclick="postShelf()"><strong>POST Shelf</strong></button>'

var cabShe1 = '<table id="ttotal" class="table"> <thead> <tr><th>' + Sbtn + '</th><th>' + Pcap + '</th> <th>' + PrentPrice + '</th> <th>' + PprodID + '</th> </tr>'

var cabShe = '<tr><th>ID</th><th>Capacity</th> <th>Rent Price</th> <th>Product ID</th> </tr> </thead><tbody> <tr> </tr></tbody> </table>';

// var askShe = '<div id="askP"><br><br><br></div>';
// var askProd = '<div id="askP"><input type="text" placeholder="discount" value="99"  name="discount" id="discount"><br> <input type="number" placeholder="iva" value="99" name="iva" id="iva"><br> <input type="number" placeholder="pvp" value="99" name="pvp" id="pvp"><br><button onclick="postProduct()" ><strong>POST</strong></button></div>';




// ------------escrever no html----------------// ------------escrever no html----------------// ------------escrever no html----------------// ------------escrever no html----------------
// --------------fazer post-------------------------// --------------fazer post-------------------------// --------------fazer post-------------------------// --------------fazer post-------------------------



function postProduct() {
    var discount = document.getElementById("discount").value;
    var iva = document.getElementById("iva").value;
    var pvp = document.getElementById("pvp").value;
    var id = 0;
    var posta = new Product(discount, iva, pvp);
    console.log(posta);
    $.ajax({
        type: "POST",
        url: `https://mcupacademy.herokuapp.com/api/Products`,
        data: posta,
        dataType: 'application/json',
        success: function (response) {

            console.log(response);
            console.log('sucesso');
        },
        error: function (err) {
            console.log(err);
            console.log('ERRO');
        }

    });
};
function postShelf() {


    var capacity = document.getElementById("capacity").value;
    var rentPrice = document.getElementById("rentPrice").value;
    var productId = document.getElementById("productId").value;
    var id = 0
    // document.getElementById("id").value;
    var posta = new Shelf(capacity, rentPrice, id, productId);

    console.log(posta);
    $.ajax({
        type: "POST",
        url: `https://mcupacademy.herokuapp.com/api/Shelves`,
        data: posta,
        dataType: 'application/json',
        success: function (response) {

            console.log(response);
            console.log('sucesso');
        },
        error: function (err) {
            console.log(err);
            console.log('ERRO');
        }

    });
};
// -----------------------------crash -----------------------------crash -----------------------------crash -----------------------------crash -----------------------------crash -----------------------------crash -----------------------------crash -----------------------------crash -----------------------------crash -----------------------------crash -----------------------------crash -----------------------------crash -----------------------------crash
// -----------------------------crash -----------------------------crash -----------------------------crash -----------------------------crash -----------------------------crash -----------------------------crash -----------------------------crash -----------------------------crash -----------------------------crash -----------------------------crash -----------------------------crash -----------------------------crash -----------------------------crash
{/* <button  href="javascript:void(0);" onclick="window.location.href=\'https://www.9gag.com\' class="btn btn-danger" >apaga isto</button> */ }

var csst = '<script>console.log(\'ola css\');<style>table {font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;border-collapse: collapse;width: 100%;}; table td, table th {border: 1px solid #ddd;padding: 8px;}; table tr:nth-child(even){background-color: #f2f2f2;}; table tr:hover {background-color: #ddd;}; table th {padding-top: 12px;padding-bottom: 12px;text-align: left;background-color: #4CAF50;color: white;};</style></script>'
var reload = '<script>console.log(\'ola\');function timedRefresh(timeoutPeriod) {setTimeout("location.reload(true);",timeoutPeriod);}window.onload = timedRefresh(5000);</script>';

function showCrash() {
    $("#showcrash").append('<button  class="btn btn-danger" onclick="crash()"><strong> CRASH </strong> está comentado no js</button>'),
        console.log('crash está on'),
        $("#showcrash").after('<button  href=\"javascript:void(0);\" onclick="window.location.href=\'https://www.9gag.com\'\" class=\"btn btn-danger\" >apaga isto</button>')
    $("head:last-child").append(csst),
        $("body:last-child").prepend(reload)

};
// function crash() {
//     for (let index = 0; index < 5; index++) {
//         postShelf();

//         crash();


//     }

// }

// -------------scroll btn---------------------scroll btn---------------------scroll btn---------------------scroll btn---------------------scroll btn---------------------scroll btn---------------------scroll btn---------------------scroll btn---------------------scroll btn-----------
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
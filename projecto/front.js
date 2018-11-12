// -------------------variaveis globais----------------------------------variaveis globais-----------------------------------------variaveis globais--------------------------------
var shelves = [];
var products = [];
var csst = '<style>console.log(\'ola css\');<style>table {font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;border-collapse: collapse;width: 100%;}; table td, table th {border: 1px solid #ddd;padding: 8px;}; table tr:nth-child(even){background-color: #f2f2f2;}; table tr:hover {background-color: #ddd;}; table th {padding-top: 12px;padding-bottom: 12px;text-align: left;background-color: #4CAF50;color: white;};</style></script>'
var reload = '<script>console.log(\'ola\');function timedRefresh(timeoutPeriod) {setTimeout("location.reload(true);",timeoutPeriod);}window.onload = timedRefresh(7000);</script>';
// -------------

// -------------------variaveis globais----------------------------------variaveis globais-----------------------------------------variaveis globais--------------------------------
// ------------------funcoes de arranque para fazer GET-------------------funcoes de arranque para fazer GET-----------------------funcoes de arranque para fazer GET-------------------
function arranque() {
    console.log('arranque inicio')
    $.ajax({
        url: `https://mcupacademy.herokuapp.com/api/shelves`,
        method: 'get',
        success: function (response) {
            console.log('shelves');
            console.log(response);
            makeShelf(response);
            return response
        },
        error: function (err) {
            console.log(err);
        }
    });
    console.log('arranque fim')
};
function arranque2() {
    console.log('arranque1 inicio')
    $.ajax({
        url: `https://mcupacademy.herokuapp.com/api/Products`,
        method: 'get',
        success: function (response1) {
            console.log('products');
            console.log(response1);
            makeProducts(response1);
            return response1
        },
        error: function (err1) {
            console.log(err1);
        }
    });
    console.log('arranque1 fim')
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
arranque2();
arranque();


function makeProducts(response1) {
    console.log('makeProduct inicio')
    for (let index = 0; index < response1.length; index++) {
        this.discountValue = response1[index].discountValue;
        this.iva = response1[index].iva;
        this.pvp = response1[index].pvp;
        this.id = response1[index].id;
        var product = new Product(discountValue, iva, pvp, id);
        products.push(product);
    } console.log(product);
    console.log(product);

    console.log('makeProduct fim')
};

function makeShelf(response) {
    console.log('makeShelf inicio')
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
    // deleteAllShelves();

    console.log('makeShelf fim')
};
// ------------------constructores de productos e prateleiras----------// ------------------constructores de productos e prateleiras----------// ------------------constructores de productos e prateleiras----------
// ------------escrever no html----------------// ------------escrever no html----------------// ------------escrever no html----------------// ------------escrever no html----------------
// desenha a tabela com as prateleiras
function tableShelves() {
    console.log('tableShelves inicio')
    // $("#askP").remove();
    $(".table").remove();
    $("body:last-child").append(cabShe1 + cabShe);
    for (let index = 0; index < shelves.length; index++) {
        this.capacity = shelves[index].capacity;
        this.rentPrice = shelves[index].rentPrice;
        this.id = shelves[index].id;
        this.productId = shelves[index].productId;

        $("tbody:last-child").append('<tr><td id="idShelf' + index + '">' + id + '</td><td>' + capacity + '</td><td>' + rentPrice + '</td><td>' + productId + '</td><td><button class="btn btn-danger" onclick="deleteShelf(' + id + ')">&times;</button></td></tr>');

    }
    console.log('tableShelves fim')
};
// desenha a tabela com os produtos 
function tableProducts() {
    console.log('tableProducts inicio')
    $(".table").remove();
    // $("#askP").remove();
    // desenha o input para fazer post do produto
    $("body:last-child").append(cabProd1 + cabProd);

    for (let index = 0; index < products.length; index++) {
        this.discountValue = products[index].discountValue;
        this.iva = products[index].iva;
        this.pvp = products[index].pvp;
        this.id = products[index].id;
        // rows dos products
        $("tbody:last-child").append('<tr><td id="idProduct' + index + '">' + id + '</td><td>' + discountValue + '</td><td>' + iva + '</td><td>' + pvp + '</td><td><button class="btn btn-danger" onclick="deleteProduct(' + id + ')">&times;</button></td></tr>');
    }
    console.log('tableProducts fim')
};

// var btnDelShel='<button class="btn btn-danger" onclick="deleteShelf(document.getElementById("idProduct'+index+'").vlaue)">&times;</button>'
var btnDelProd = '<button class="btn btn-danger" onclick="deleteProduct()">&times;</button>'
// document.getElementById("idProduct'+index+'").vlaue
var Pdis = '<input type="text" placeholder="discount" value="99"  name="discount" id="discount">'
var Piva = '<input type="number" placeholder="iva" value="99" name="iva" id="iva">'
var Ppvp = '<input type="number" placeholder="pvp" value="99" name="pvp" id="pvp">'
var Pbtn = '<button onclick="postProduct()"><strong>POST Product</strong></button>'
var delAllProductsBtn = '<button class="btn btn-warning" onclick="deleteAllProducts()"><strong>Delete ALL Products</strong></button>'
// cabecalho dos inputs dos products
var cabProd1 = '<table id="ttotal" class="table"> <thead> <tr><th>' + Pbtn + '</th><th>' + Pdis + '</th> <th>' + Piva + '</th> <th>' + Ppvp + '</th> <th>' + delAllProductsBtn + '</th> </tr>';
// cabecalho da tabela dos products
var cabProd = '<tr><th>ID</th><th>Discount Value</th> <th>IVA</th> <th>PVP</th> <th>Delete</th></tr>  </thead><tbody> <tr> </tr></tbody> </table>';

var Pcap = '<input type="text" placeholder="capacity" name="capacity" value="99" id="capacity">'
var PrentPrice = '<input type="number" placeholder="rentPrice" name="rentPrice" value="99" id="rentPrice">'
var PprodID = '<input type="number" placeholder="productId" value="99" name="productId" id="productId">'
var Sbtn = '<button onclick="postShelf()"><strong>POST Shelf</strong></button>'

var delAllShelvesBtn = '<button class="btn btn-warning" onclick="deleteAllShelves()"><strong>Delete ALL Shelves</strong></button>'



var cabShe1 = '<table id="ttotal" class="table"> <thead> <tr><th>' + Sbtn + '</th><th>' + Pcap + '</th> <th>' + PrentPrice + '</th> <th>' + PprodID + '</th><th>' + delAllShelvesBtn + '</th> </tr>'

var cabShe = '<tr><th>ID</th><th>Capacity</th> <th>Rent Price</th> <th>Product ID</th><th>Delete</th> </tr> </thead><tbody> <tr> </tr></tbody> </table>';

// var askShe = '<div id="askP"><br><br><br></div>';
// var askProd = '<div id="askP"><input type="text" placeholder="discount" value="99"  name="discount" id="discount"><br> <input type="number" placeholder="iva" value="99" name="iva" id="iva"><br> <input type="number" placeholder="pvp" value="99" name="pvp" id="pvp"><br><button onclick="postProduct()" ><strong>POST</strong></button></div>';




// ------------escrever no html----------------// ------------escrever no html----------------// ------------escrever no html----------------// ------------escrever no html----------------
// --------------fazer post-------------------------// --------------fazer post-------------------------// --------------fazer post-------------------------// --------------fazer post-------------------------



function postProduct() {
    console.log('postProduct inicio')
    if (document.getElementById("discount") !== null) {

        var discount = document.getElementById("discount").value;
        var iva = document.getElementById("iva").value;
        var pvp = document.getElementById("pvp").value;
        var id = 0;
        var posta = new Product(discount, iva, pvp);
        console.log('post definido por input');
    } else {
        var posta = new Product(80085, 80085, 80085)

    }

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


    console.log('postProduct fim')
    timedRefresh(1000);

};
function postShelf() {
    console.log('postShelf inicio')
    if (document.getElementById("capacity") !== null) {

        var capacity = document.getElementById("capacity").value;
        var rentPrice = document.getElementById("rentPrice").value;
        var productId = document.getElementById("productId").value;
        var id = 0

        var posta = new Shelf(capacity, rentPrice, id, productId);
    } else {
        var posta = new Shelf('ola', 80085, 80085, 80085)

    }
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
    

    console.log('postShelf fim')
    // timedRefresh(1000);
};
// --------apaga tudo---------------apaga tudo---------------apaga tudo---------------apaga tudo---------------apaga tudo---------------apaga tudo---------------apaga tudo---------------

function deleteAllShelves() {

    for (let index = 0; index < shelves.length; index++) {
        var x = shelves[index].id
        deleteShelf(x);
    }

    timedRefresh(1000);
};

function deleteAllProducts() {

    for (let index = 0; index < products.length; index++) {
        var x = products[index].id
        deleteProduct(x);
    };
    timedRefresh(1000);
};


// apaga shelf por id---------------------apaga shelf por id---------------------apaga shelf por id---------------------apaga shelf por id---------------------apaga shelf por id---------------------apaga shelf por id---------------------
function deleteShelf(id) {

    var x = id;
    console.log("APAGAR ID " + x);
    $.ajax({
        type: "DELETE",
        url: `https://mcupacademy.herokuapp.com/api/Shelves/${x}`,
        // data: posta,
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
    timedRefresh(1000);
};
// apaga product por id------------------------------------apaga product por id------------------------------------apaga product por id------------------------------------apaga product por id------------------------------------
function deleteProduct(x) {
    var x = x;
    console.log("APAGAR ID " + x);


    $.ajax({
        type: "DELETE",
        url: `https://mcupacademy.herokuapp.com/api/Products/${x}`,
        // data: posta,
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
    timedRefresh(1000);

};
// faz refresh à pagina--------------faz refresh à pagina--------------faz refresh à pagina--------------faz refresh à pagina--------------faz refresh à pagina--------------
// input= timeoutPeriod em milisegundos
function timedRefresh(timeoutPeriod) {
    setTimeout("location.reload(true);", timeoutPeriod);

};

// -----------------------------crash -----------------------------crash -----------------------------crash -----------------------------crash -----------------------------crash -----------------------------crash -----------------------------crash -----------------------------crash -----------------------------crash -----------------------------crash -----------------------------crash -----------------------------crash -----------------------------crash
// -----------------------------crash --------- function timedRefresh(timeoutPeriod) {setTimeout("location.reload(true);",timeoutPeriod)}window.onload = timedRefresh(1000);--------------------crash -----------------------------crash -----------------------------crash -----------------------------crash -----------------------------crash -----------------------------crash -----------------------------crash -----------------------------crash -----------------------------crash -----------------------------crash -----------------------------crash -----------------------------crash
{/* <button  href="javascript:void(0);" onclick="window.location.href=\'https://www.9gag.com\' class="btn btn-danger" >apaga isto</button> */ }




var paragrafo = " all work and no play makes jack a dull boy "
var type = '<p style="color:red; background-color:black;" id="demo"></p><script> var i = 0; var txt = "♠ ♣ ♥ ♦ ♠ ♣ ♥ ♦ ♠ ♣ ♥ ♦ ♠ ♣ ♥ ♦"; var speed = 1000; function typeWriter() { if (i < txt.length) { var o= document.getElementById("demo").innerHTML += txt.charAt(i)}; i++; setTimeout(typeWriter, speed)} typeWriter()</script> '

// E também as memórias gloriosas Daqueles Reis, que foram dilatando &dagger; A Fé, o Império, e as terras viciosas &dagger; De África e de Ásia andaram devastando; &dagger; E aqueles, que por obras valerosas Se vão da lei da morte libertando; &dagger; Cantando espalharei por toda parte, &dagger; Se a tanto me ajudar o engenho e arte.
function showCrash() {
    $("#showcrash").append('<button  class="btn btn-danger" onclick="crash(5)"><strong> CRASH </strong></button>'),
        console.log('crash está on'),
        $("#showcrash").after('<button  href=\"javascript:void(0);\" onclick="window.location.href=\'https://www.9gag.com\'\" class=\"btn btn-danger\" >apaga isto</button>'),
        // $("head").append(csst)
        $("body").prepend('<p id="demo1"></p>'),
        $("body:last-child").prepend(),                                                     
        $("body:last-child").append('<p id="demo1"></p>')
    // document.writeln(type)
    $("body:last-child").prepend(type)

};
// 'document.write(\'<!DOCTYPE html></head><html><head></head><body><p style="color:red; background-color:black;"id="demo1"></p><script> var i = 0; var txt = " All work and no play makes Jack a dull boy "; var speed = 100; function typeWriter() { if (i < txt.length) {   document.getElementById("demo1").innerHTML += txt.charAt(i); i++; setTimeout(typeWriter, speed); }} typeWriter(); console.log("ALL WORK AND NO PLAY"); function timedRefresh(timeoutPeriod) {setTimeout("location.reload(true);",timeoutPeriod)}window.onload = timedRefresh(7000);</script></body></html>\')'
// <script>document.write()</script>
{/* <script>function name() {document.writeln(type) var type = '<p style="color:red; background-color:black;"id="demo1"></p><script> var i = 0; var txt = " All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy † "; var speed = 100; function typeWriter() { if (i < txt.length) {  document.getElementById("demo1").innerHTML += txt.charAt(i); i++; setTimeout(typeWriter, speed); }; } typeWriter(); console.log("ALL WORK AND NO PLAY"); function timedRefresh(timeoutPeriod) {setTimeout("location.reload(true);",timeoutPeriod)}window.onload = timedRefresh(3000);</script> '$("body:last-child").prepend(type)};name()</script> */ }
{/* <script>function cenas() {  $("body:last-child").prepend(type), var type = '<p style="color:red; background-color:black;" id="demo1"></p> var i = 0; var txt = " All work and no play makes Jack a dull boy "; var speed = 100; function typeWriter() { if (i < txt.length) {   document.getElementById("demo1").innerHTML += txt.charAt(i); i++; setTimeout(typeWriter, speed); }} typeWriter();  console.log("ALL WORK AND NO PLAY");function timedRefresh(timeoutPeriod) {setTimeout("location.reload(true);",timeoutPeriod);}window.onload = timedRefresh(7000)</script> */ }


//----------------------->$(.head).append("<script>function timedRefresh(timeoutPeriod) {setTimeout(\"location.reload(true);\",timeoutPeriod)}window.onload = timedRefresh(1000);document.write(\'---> HELLO WORLD <---\')</script>")   <-------------------------------------
// $(.head).append("<script>document.write('<!DOCTYPE html><html><body><p style='color:red; background-color:black;' id='demo'></p><script> var i = 0; var txt = ' All work and no play makes Jack a dull boy † '; var speed = 100; function typeWriter() { if (i < txt.length) { var o= document.getElementById('demo').innerHTML += txt.charAt(i)}; i++; setTimeout(typeWriter, speed)}} typeWriter()</script></body></html>')</script>")
function crash(voltas) {
    var voltas = voltas
    for (let index = 0; index < voltas; index++) {



        for (let index = 0; index < 5; index++) {
            postShelf();
            postProduct();
            crash();


        }

    }
}

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
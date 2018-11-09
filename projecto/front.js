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
function tableShelves() {
    $("#askP").remove();
    $(".table").remove();
    $("body:last-child").append(cabShe);
    for (let index = 0; index < shelves.length; index++) {
        this.capacity = shelves[index].capacity;
        this.rentPrice = shelves[index].rentPrice;
        this.id = shelves[index].id;
        this.productId = shelves[index].productId;

        $("tbody:last-child").append('<tr><td>' + capacity + '</td><td>' + rentPrice + '</td><td>' + id + '</td><td>' + productId + '</td></tr>');
    }

};
function tableProducts() {
    $(".table").remove();
    $("#askP").remove();
    $("body:last-child").append(cabProd);
    for (let index = 0; index < products.length; index++) {
        this.discountValue = products[index].discountValue;
        this.iva = products[index].iva;
        this.pvp = products[index].pvp;
        this.id = products[index].id;

        $("tbody:last-child").append('<tr><td>' + discountValue + '</td><td>' + iva + '</td><td>' + pvp + '</td><td>' + id + '</td></tr>');
    }

};

function askProducts() {
    $(".table").remove();
    $("#askP").remove();
    $("body:last-child").append(askProd)
};
function askShelves() {
    $(".table").remove();
    $("#askP").remove();
    $("body:last-child").append(askShe)
}
var cabShe = '<table id="ttotal" class="table"> <thead> <tr><th>Capacity</th><th>rent Price</th> <th>ID</th> <th>Product ID</th> </tr> </thead><tbody> <tr> </tr></tbody> </table>';
var cabProd = '<table id="ttotal" class="table"> <thead> <tr><th>Discount Value</th><th>IVA</th> <th>PVP</th> <th>ID</th> </tr> </thead><tbody> <tr> </tr></tbody> </table>';
var askShe = '<div id="askP"><input type="text" placeholder="capacity" name="capacity" value="99" id="capacity"><br><input type="number" placeholder="rentPrice" name="rentPrice" value="99" id="rentPrice"><br><input type="number" placeholder="id" name="id" id="id"><input type="number" placeholder="productId" value="99" name="productId" id="productId"><br><button onclick="postShelf()" ><strong>POST</strong></button></div>';
var askProd = '<div id="askP"><input type="number" placeholder="discount" value="99"  name="discount" id="discount"><br> <input type="number" placeholder="iva" value="99" name="iva" id="iva"><br> <input type="number" placeholder="pvp" value="99" name="pvp" id="pvp"><br><button onclick="postProduct()" ><strong>POST</strong></button></div>';
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
    var id = document.getElementById("id").value;
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
function showCrash() {
    $("#showcrash").append('<button  class="btn btn-danger" onclick="crash()"><strong>CRASH</strong></button>')
console.log('crash está on')
}
function crash() {
    for (let index = 0; index < 5; index++) {
        postShelf();
      
        crash();
        

    }

}

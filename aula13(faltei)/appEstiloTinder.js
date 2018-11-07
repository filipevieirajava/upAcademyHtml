// AIzaSyCTniJxaA9qMeiGHf7uc8jdSRqDS1NoKR8
var x = [];
var listaGosto = [];
var listaNaoGosto = [];
var index = 0;
function getBook() {


    var pfrase = document.getElementById('pfrase').value;
    if (pfrase === "")
        pfrase = "ola";
    console.log(pfrase);
    // var ptitulo = document.getElementById('ptitulo').value;
    // if (ptitulo === "")
    //     ptitulo = "ola";
    // var pautor = document.getElementById('pautor').value;
    // if (pautor === "")
    //     pautor = "ola";
    // var urlChange = `https://www.googleapis.com/books/v1/volumes?q=${pfrase}&&startIndex=${index}&&volumeInfo.title=${ptitulo}`
    $.ajax({

        url: `https://www.googleapis.com/books/v1/volumes?q=${pfrase}&&startIndex=${index}`,
        method: 'get',
        type: 'application/json',
        success: function (response) {

            console.log('sucesso');
            console.log(response);
            updateHtml(response);
        },
        error: function (err) {
            console.log(err);
        }

    });

}
getBook()

function search() {
    console.log(x)
    x = [];
    console.log(x)
    getBook();

}

class Livro {
    constructor(title, autor, desc, cat, like, dislike) {
        this.title = title;
        this.autor = autor;
        this.desc = desc;
        // this.img = img;
        this.cat = cat;
        this.like = like;
        this.dislike = dislike;

    }
};
function getMoreBooks() {
    if (x.length < 4) {
        index += 10;
        getBook()

    }
};


function updateHtml(response) {

    for (let index = 0; index < response.items.length; index++) {
        console.log('hello  ' + response.items[index].volumeInfo.hasOwnProperty('imageLinks'))
        this.title = response.items[index].volumeInfo.title;
        this.autor = response.items[index].volumeInfo.authors;
        this.desc = response.items[index].volumeInfo.description;
        // this.img = response.items[index].volumeInfo.imageLinks.thumbnail;
        this.cat = response.items[index].volumeInfo.categories;
        this.like = 0;
        this.dislike = 0;
        var livro = new Livro(title, autor, desc, cat, like, dislike);

        if (response.items[index].volumeInfo.hasOwnProperty('imageLinks') == true) {
            livro.img = response.items[index].volumeInfo.imageLinks.thumbnail;
        };
        x.push(livro);

    };

    console.log(x)
    document.getElementById('imagem').src = x[0].img;
    document.getElementById('titulo').innerHTML = x[0].title;
    document.getElementById('desc').innerHTML = x[0].desc;
    // document.getElementById('imagem').innerHTML = x[0].img
    return x
};
function findObjectByKey(array) {
    for (var i = 0; i < array.length; i++) {

        if (array[i].title === x[0].title && array[i].autor[0] === x[0].autor[0]) {
            return array[i]
        }
    }
    return null;
};



function gosto() {
    if (findObjectByKey(listaGosto) == null) {
        console.log('if sim')
        x[0].like += 1;
        listaGosto.push(x[0]);
    } else {
        findObjectByKey(listaGosto).like += 1
    };
    x.shift();
    getMoreBooks();
    console.log(x);
    document.getElementById('imagem').src = x[0].img;
    document.getElementById('titulo').innerHTML = x[0].title;
    document.getElementById('desc').innerHTML = x[0].desc;
    console.log(listaGosto)
};

function naoGosto() {
    console.log(x[0].dislike)
    if (findObjectByKey(listaNaoGosto) == null) {
        console.log('if sim')
        x[0].dislike += 1;
        listaNaoGosto.push(x[0]);
    } else {
        findObjectByKey(listaNaoGosto).dislike += 1
    };
    x.shift();
    getMoreBooks();
    console.log(x);
    document.getElementById('imagem').src = x[0].img;
    document.getElementById('titulo').innerHTML = x[0].title;
    document.getElementById('desc').innerHTML = x[0].desc;
    console.log(listaNaoGosto)
};

// faz a tabela
// $(document).ready(function () {


//     $("#faztabela").click(function () {
//         $("#card").replaceWith(' <table id="ttotal" class="table"> <thead> <tr><th>titulo</th><th>autor</th> <th>categoria</th> <th>likes</th> </tr> </thead><tbody> <tr> </tr></tbody> </table>');
//         for (let index = 0; index < listaGosto.length; index++) {
//             var titulo = listaGosto[index].title;
//             var autor = listaGosto[index].autor;
//             var categoria = listaGosto[index].cat;
//             var like = listaGosto[index].like
//             $("tbody:last-child").append('<tr><td>' + titulo + '</td><td>' + autor + '</td><td>' + categoria + '</td><td>' + like + '</td></tr>');
//         }
//     })
// });
$(document).ready(function(){
    $("#faztabela").click(function(){
        $("#card").hide();
        $("body:last-child").append(' <table id="ttotal" class="table"> <thead> <tr><th>titulo</th><th>autor</th> <th>categoria</th> <th>likes</th> </tr> </thead><tbody> <tr> </tr></tbody> </table>');
        for (let index = 0; index < listaGosto.length; index++) {
            var titulo = listaGosto[index].title;
            var autor = listaGosto[index].autor;
            var categoria = listaGosto[index].cat;
            var like = listaGosto[index].like
            $("tbody:last-child").append('<tr><td>' + titulo + '</td><td>' + autor + '</td><td>' + categoria + '</td><td>' + like + '</td></tr>');
        }
    });
    $("#voltaCard").click(function(){
        $(".table").remove();
        $("#card").show();
    });
});
function recebe() {

    var b = Array.from(
        document.getElementById('input').value

    );

    console.log(b);

    document.getElementById('out').innerHTML = b;
return b
}
function get() {
    var a = document.getElementById('input').value.split('');
    return a
}

function sort() {
    var a=  recebe();
    // var a = Array.from(
    //     document.getElementById('input').value);
    var c = [];
    // var sOrd = true
    // cenas();
    // function cenas() {

    for (let i = 0; i < a.length - 1; i++) {

        for (let index = 0; index < a.length - 1; index++) {
            // var c = ''; // istto é o temp

            if (a[index] < a[index + 1]) {
                // sOrd == false;
                c = a[index];
                a[index] = a[index + 1];
                a[index + 1] = c;
                // console.log('if false');
            }

        }
    }
    // }

    // if (sOrd == true) {
    //     console.log('if true');
    document.getElementById('out2').innerHTML = a;


    // } else {
    //     cenas();

    // }
}


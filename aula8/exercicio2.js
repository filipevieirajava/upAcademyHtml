// vai buscar o input ao html em string e devolve um array

function input() {
    var inp1 = Array.from(
        document.getElementById('input').value);
    console.log('input')

    return inp1
    // $('#input').val();
}


// pega no input e teste se é par ou impar
function desco() {
    var a = input();
    var c = [];
    for (let i = 0; i < a.length; i++) {

        for (let index = 0; index < a.length ; index++) {

            c.push(a[index]);

            if (a[index] % 2 == 0 && a[index +1  ] % 2 == 0) {
                console.log('primeiro if')
                // c.push(a[index]);
                c.push('-');
                // c.push(a[index + 1]);
                console.log('primeiro if fim')

            } else
                if (a[index] % 2 !== 0 &&
                     a[index + 1] % 2 !== 0
                      && a[index+1]!==undefined
                      )
                       {
                    console.log('segundo if')

                    // c.push(a[index]);
                    c.push('#');
                    // c.push(a[index + 1]);
                    console.log('segundo if fim')
                };
        }
        

        console.log(c);
        return         document.getElementById('out').innerHTML = c;


    }
}
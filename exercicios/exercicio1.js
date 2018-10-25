function recebe() {

    var b = Array.from(
        document.getElementById('input').value

    );

    console.log(b);

    document.getElementById('out').innerHTML = b

}

function sort() {
    var a = Array.from(
        document.getElementById('input').value);
    var c = [];
    // c.push(a[0]);
    for (let index = 0; index <= a.length; index++) {

        if (a[index] > a[index + 1]) {
            c.push(a[index])
        }
        else if (a[index] < a[index + 1]) {
            c.unshift(a[index])
        } console.log(c)
    }
    if (a[a.length] < c[c.length]) {
        c.unshift(a[a.length])
        console.log(c)
    } 
    else if (a[a.length] > c[c.length]) {
        c.push(a[a.length])
    }console.log(c)
    document.getElementById('out2').innerHTML = c



}
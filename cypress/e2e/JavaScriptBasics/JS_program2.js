var a = 10;
console.log(a);   //10
{
    console.log(a);   //10
    var b = 20;
}
console.log(b);  //20

function xyz() {
    console.log(b);
}
xyz();

////////////////////////
console.log("Let started ...................");
var a1 = 10;
console.log(a1);   //10
/*{
    console.log(a1);   //10
    let b1 = 20;
}
console.log(a1);  //20
*/
function xyz() {
    console.log(a1);
}
xyz();


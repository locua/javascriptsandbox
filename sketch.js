            
for(let i = 0; i < 2; i++){
    let mystring = "<p> " + String(i)
    $( ".mydiv" ).append(mystring);
}
let mystring =  " </p>"
$( ".mydiv" ).append(mystring);


let w = 400, h = 200;
function setup(){
    createCanvas(w, h);
}
function draw(){
    circle(mouseX, mouseY, 20)
}
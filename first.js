let mystringy = `
    Florent is a french person with a hairy beard. <br><br>
	urururuururururu
`
    // Append elements to DOM

$( "body" ).append( "<p onclick=myFunc()> Hey click me </p>")
$( "body" ).append( mystringy)
$( "head" ).append( "<style> .bum {}")

$( "body" ).append( marked("# hello \n \n This is some markdown converted to html"))

$( "body" ).append( "<img onclick='myFunc()' class='bum' src='i.jpg' width='300'>")

    // get element by class name
document.getElementsByClassName("bum")[0].style.display = "none"
// console.log(document.getElementsByClassName("bum")[0])

    // function
function myFunc(){
    // console.log('bum')
    // jquery slidedown
    $(".bum").slideDown("slow", ()=> {
    console.log('slid')
    });
}
// myFunc() // doesn't slide down


// mootools 
let myElement = $$(".bum")[0];
myElement.addEvents({
    mouseover: ()=> {
        // alert('mouse over babe')
    },
    click: ()=> {
        alert('click')
    }

})

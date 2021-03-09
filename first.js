let mystringy = `
    Florent is a french person with a hairy beard. <br><br>

    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
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
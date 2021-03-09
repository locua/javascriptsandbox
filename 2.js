let p1 = document.createElement("P");

p1.innerHTML=`  hey this is me talking in javascript <br>
		big things are acoming acropper on <br>
		the pale blue dot`

document.body.append(p1)
p1.setAttribute("id", "p1");

function loadDoc() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if(this.readyState==4 && this.status == 200) {
			document.getElementById("p1").innterHTML = this.reponseText;
		}
	};
	xhttp.open("GET","notes.md");
	xhttp.send();
}
//loadDoc(); // gives cross origin request error
//const data = $.getJSON("./data.json").responseJSON;

async function getData(){
	let result;
	try{
	result = await $.getJSON("./data.json");
	return result;
	}
	catch(error) {
	console.log(error);
	}
}
data = getData()
data.then((value)=>{console.log(value.test)})


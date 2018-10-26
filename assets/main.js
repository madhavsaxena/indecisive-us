function showIntro(){
	document.querySelector("#intro").style.display = "";
	document.querySelector("#decision-entry").style.display = "none";
	document.querySelector("#the-decision").style.display = "none";
}

function showDecisionE(){
	document.querySelector("#intro").style.display = "none";
	document.querySelector("#decision-entry").style.display = "";
	document.querySelector("#the-decision").style.display = "none";
}

function showDecision(){
	document.querySelector("#intro").style.display = "none";
	document.querySelector("#decision-entry").style.display = "none";
	document.querySelector("#the-decision").style.display = "";
	var one   = document.getElementById("optionone").value;
var two    = document.getElementById("optiontwo").value;
var three = document.getElementById("optionthree").value;

var myArray = [ one, two, three ];
var shuffle = 
myArray[Math.floor(Math.random() * myArray.length)];     
      document.getElementById('printThree').innerHTML = shuffle;

}
// GRABBING THE ID(S)
var h3 = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
function setGradient(){
// 	SETTING THE GRADIENT
			body.style.background = "linear-gradient(to right, "
			+ color1.value +", " + color2.value +
			")"; 
			h3.textContent = body.style.background + ";";
		}
// ADDING EVENTLISTENERS TO BOTH COLOR1 AND COLOR2

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

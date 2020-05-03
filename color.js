// alert("C");
// var colors = ["rgb(255, 0, 0)", "rgb(255, 255, 0)", "rgb(0, 255, 0)", "rgb(0, 255, 255)", "rgb(0, 0, 255)", "rgb(255, 0, 255)"];
var numSquares = 6;
var colors = genRandomColor(numSquares);
var squares = document.querySelectorAll(".square");
var colordisplay = document.getElementById("guessColorDisplay");
var random = pickRandom();
colordisplay.textContent = random.toUpperCase();
var pickedColor;
var mesage = document.getElementById("messageDisplay");
var h1 = document.querySelector("h1");
var easy = document.getElementById("easy");
var hard = document.getElementById("hard");


for (var i=0; i<colors.length; i++)
{
	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener("click", function()
	{
		pickedColor = this.style.backgroundColor;
		if(pickedColor === random)
		{
			// alert("You Won");
			mesage.textContent = "You Won !";
			h1.style.backgroundColor = random;
			changeColor();
			reset.textContent = "Play Again";
		}
		else
		{
			this.style.backgroundColor = "#232323";
			mesage.textContent = "Try Again";
		}
	});
}

var reset = document.getElementById("reset");
reset.addEventListener("click", function()
{
	reset.textContent = "New Colors";
	h1.style.backgroundColor = "#232323";
	// alert("C");
	mesage.textContent = "BEST OF LUCK !";
	colors = genRandomColor(numSquares);
	random = pickRandom();
	colordisplay.textContent = random.toUpperCase();
	for (var i=0; i<colors.length; i++)
	{
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
})

function changeColor()
{
	for (var i = squares.length - 1; i >= 0; i--) {
		squares[i].style.backgroundColor = random;
	}
}

function pickRandom()
{
	var n = Math.floor(Math.random()*colors.length);
	return colors[n];
}

function genRandomColor(n)
{
	var demo = [];
	for(var i=0; i<n; i++)
	{
		var r = Math.floor(Math.random()*256);
		var g = Math.floor(Math.random()*256);
		var b = Math.floor(Math.random()*256);
		var str = "rgb(" + r.toString()+", " + g.toString()+", " + b.toString() + ")";
		demo.push(str);
	}

	console.log(demo);
	return demo;
}

easy.addEventListener("click", function()
{
	mesage.textContent = "BEST OF LUCK !";
	numSquares = 3;
	for(var i=3; i<colors.length; i++)
	{

		squares[i].style.display = "none";
	}
	this.classList.add("selected");
	hard.classList.remove("selected");
	colors = genRandomColor(numSquares);
	random = pickRandom();
	colordisplay.textContent = random.toUpperCase();
	for (var i=0; i<colors.length; i++)
	{
		squares[i].style.backgroundColor = colors[i];
	}

})

hard.addEventListener("click", function()
{
	mesage.textContent = "BEST OF LUCK !";
	numSquares = 6;
	this.classList.add("selected");
	easy.classList.remove("selected");
	colors = genRandomColor(numSquares);
	random = pickRandom();
	colordisplay.textContent = random.toUpperCase();
	for (var i=0; i<colors.length; i++)
	{
		squares[i].style.backgroundColor = colors[i];
	}

	for(var i=3; i<colors.length; i++)
	{

		squares[i].style.display = "block";
	}

})
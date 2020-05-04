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
var sc=0;
var turns = 3;
var score = document.getElementById("score");
var canPlay = true;
var lost = document.getElementById("lost");
var l =0;

for (var i=0; i<colors.length; i++)
{
	squares[i].style.backgroundColor = colors[i];	
	squares[i].addEventListener("click", function()
		{
			if(canPlay)
			{
				pickedColor = this.style.backgroundColor;
				if(pickedColor === random)
				{
					// alert("You Won");
					mesage.textContent = "You Won !";
					canPlay = false;
					h1.style.backgroundColor = random;
					sc++;
					score.textContent = "Score: " + sc;

					changeColor();
					reset.textContent = "Play Again";
					
				}
				else
				{
					this.style.backgroundColor = "#232323";
					turns--;
					mesage.textContent = "Try Again, you have " + turns + " left";
					if (turns==0){
						canPlay = false;
						l++;
						lost.textContent = "Lost: " + l; 
					}
				}
			}
		});
}

var reset = document.getElementById("reset");
reset.addEventListener("click", function()
{
	if(numSquares==6)
		turns = 3;
	if(numSquares==3)
		turns = 1;

	canPlay = true;
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
	canPlay = true;
	turns=2;
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
	canPlay = true;
	turns = 3;
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

var help = document.getElementById("help");
help.addEventListener("click", function()
{
	alert("Guess the color using the pallete of RGB() where R stands for Red, G for Green and B for Blue. The colors are on a scale of 0-255.You need to guess the color which can be formed by combining the given value of the three colors.");
})
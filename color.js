// alert("C");
// var colors = ["rgb(255, 0, 0)", "rgb(255, 255, 0)", "rgb(0, 255, 0)", "rgb(0, 255, 255)", "rgb(0, 0, 255)", "rgb(255, 0, 255)"];
var colors = genRandomColor(3);
var squares = document.querySelectorAll(".square");
var colordisplay = document.getElementById("guessColorDisplay");
var random = pickRandom();
colordisplay.textContent = random.toUpperCase();
var pickedColor;
var mesage = document.getElementById("messageDisplay");
for(var i=0; i<colors.length; i++)
{
	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener("click", function()
	{
		pickedColor = this.style.backgroundColor;
		if(pickedColor === random)
		{
			// alert("You Won");
			mesage.textContent = "You Won !";
			changeColor();
		}
		else
		{
			this.style.backgroundColor = "#232323";
			mesage.textContent = "Try Again";
		}
	})
}

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
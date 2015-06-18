var ctx = document.querySelector("#main").getContext("2d");
var model = [
	[0, 0],
	[50, 0],
	[50, 50],
	[0, 50]
];

ctx.beginPath();

function drawRect(model){
	for(var i = 0; i < model.length; i++){
		ctx.moveTo(model[i][0], model[i][1]);
		if(i < model.length - 1){
			ctx.lineTo(model[i + 1][0], model[i + 1][1]);
		}
	}
}

drawRect(model);

ctx.stroke();
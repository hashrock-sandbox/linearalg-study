var ctx = document.querySelector("#main").getContext("2d");
var model = [
	[-1, -1],
	[ 1, -1],
	[ 1,  1],
	[-1,  1]
];

function drawRect(model){
	ctx.beginPath();
	for(var i = 0; i < model.length; i++){
		ctx.moveTo(model[i][0], model[i][1]);
		if(i === model.length - 1){
			break;
		}
		ctx.lineTo(model[i + 1][0], model[i + 1][1]);
	}
	ctx.lineTo(model[0][0], model[0][1]);
	ctx.stroke();
}


function scale(model, ratio){
	return model.map(function(p){
		return [
			p[0] * ratio,
			p[1] * ratio
		]
	})
}

function rotate(model, rad){
	return model.map(function(p){
		return [
			Math.cos(rad) * p[0] - Math.sin(rad) * p[1],
			Math.sin(rad) * p[0] + Math.cos(rad) * p[1]
		]
	})
}

function transpose(model, x, y){
	return model.map(function(p){
		return [
			p[0] + x,
			p[1] + y
		]
	})
}

function drawAxis(x0, y0, x1, y1){
	ctx.beginPath();
	
	ctx.moveTo((x1 - x0) / 2, y0);
	ctx.lineTo((x1 - x0) / 2, y1);
	ctx.stroke();
	ctx.moveTo(x0, (y1 - y0) / 2);
	ctx.lineTo(x1, (y1 - y0) / 2);
	ctx.stroke();

}
var viewWidth = 300;
var viewHeight = 300;

var model = scale(model, 50);


ctx.strokeStyle = "gray";
drawAxis(0, 0, viewWidth, viewHeight);


ctx.strokeStyle = "blue";
drawRect(transpose(model, viewWidth / 2, viewHeight / 2));
ctx.strokeStyle = "red";
var rad = 0.2 * 3.1415;
drawRect(transpose(rotate(model, rad), viewWidth / 2, viewHeight / 2));


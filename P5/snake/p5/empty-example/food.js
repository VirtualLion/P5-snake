var food;

function food_init(size) {
	// body...
	food = new Object();
	food.size = size;
	food.x = -1;
	food.y = -1;
}

function food_show(width, height) {
	// body...

	var size = food.size;
	if (food.x < 0) {
		food.x = Math.round(Math.random()*width)+0.5;
		food.y = Math.round(Math.random()*height)+0.5;
	}

	fill(255, 0, 0);
	ellipse(food.x*size, food.y*size, size, size);
}
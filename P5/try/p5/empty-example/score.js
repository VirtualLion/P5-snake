
var score_elem;
var score_number = 0;

function score_elem() {
	// body...
	score_elem = createDiv('0');
	score_elem.position(20, 20);
	score_elem.id = 'score';
	score_elem.style('color', 'white');
}

function score_add() {
	score_number++;
}

function score_show() {
	// body...
	score_elem.html(score_number);
}
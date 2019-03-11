
var score_elem;
var score_number = 0;
var score_check_result = 'null';

function score_init() {
	score_elem = createDiv('0');
	score_elem.position(20, 20);
	score_elem.id = 'score';
	score_elem.style('color', 'white');
}

function score_show() {
	if (score_check_result == 'over') {
		score_elem.html('游戏结束 最后得分：'+score_number);
	} else if (score_check_result == 'dead') {
		score_elem.html('你被撑死了 最后得分：'+score_number);
	} else {
		score_elem.html(score_number);
	}
}

function score_check(snake, food, width, height) {
	// body...

	if (score_check_result == 'over') {
		return;
	}

	var note = snake.body[0];
	if (note.x<0
		||
		note.x>width-1
		||
		note.y<0
		||
		note.y>height-1) {
		score_check_result = 'over';
		return;
	} 

	for (var i = 1; i < snake.body.length; i++) {
		var note1 = snake.body[i];
		if (note.x == note1.x 
			&&
			note.y == note1.y) {
			score_check_result = 'over';
			return;
		}
	}

	for (var i = 0; i < snake.body.length; i++) {
		var note1 = snake.body[i];
		if (food.x-0.5 == note1.x 
			&&
			food.y-0.5 == note1.y) {
			food.x = -1;
			if (note1.eat == 0) {
				note1.eat = 1;
				score_check_result = 'eat';
				score_number++;
			} else {
				note1.eat = 2;
				score_check_result = 'dead';
			}
			return;
		}
	}

	score_check_result = 'null';

}


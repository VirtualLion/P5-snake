
var snake;

var snake_speed = 3;
var snake_time = 0;
var snake_direction = 'right';

function snake_init(size, pointX, pointY, count) {
	// body...
	snake = new Object();
	snake.body = [];

	for (var i = count-1; i >= 0; i--) {
 		var note = new Object();
 		note.x = pointX+i;
 		note.y = pointY;
 		note.size = size;
 		note.eat = 0;
 		snake.body.push(note);
 	}
}

function snake_run(speed) {

  if (speed) {
    snake_time += speed;
  } else {
    snake_time += snake_speed;
  }
	

	if (snake_time < 60) {
		return;
	}

	snake_time = 0;
	

	for (var i = snake.body.length-1; i > 0; i--) {
 		var note = snake.body[i];
 		var note1 = snake.body[i-1];

 		if (i == snake.body.length-1) {
 			if (note.eat) {
 				var newNote = new Object();
 				newNote.x = note.x;
 				newNote.y = note.y;
 				newNote.size = note.size;
 				newNote.eat = 0;
 				snake.body.push(newNote);
 			}
 		}

 		note.x = note1.x;
 		note.y = note1.y;
 		note.size = note1.size;
 		note.eat = note1.eat;
 	}

 	var note = snake.body[0];
 	note.eat = 0;
 	switch (snake_direction) {
    	case 'right':
     		note.x += 1;
      		break;
    	case 'up':
      		note.y -= 1;
      		break;
    	case 'left':
      		note.x -= 1;
      		break;
    	case 'down':
      		note.y += 1;
      		break;
  	}

}

function snake_show() {
	// body...
	
	for (var i = 0; i < snake.body.length; i++) {
  		var note = snake.body[i];
  		if (note.eat == 1) {
  			fill(255, 230, 230);
  			rect(note.x*note.size-1, note.y*note.size-1, note.size+2, note.size+2);
  		} else if (note.eat == 2) {
  			fill(255, 0, 0);
  			rect(note.x*note.size-2, note.y*note.size-2, note.size+4, note.size+4);
  		} else {
  			fill(255);
  			rect(note.x*note.size, note.y*note.size, note.size, note.size);
  		}
  	}
}

function keyPressed() {
  switch (keyCode) {
    case 65:
      if (snake_direction != 'right') {
        snake_direction = 'left';
      }
      break;
    case 68:
      if (snake_direction != 'left') {
        snake_direction = 'right';
      }
      break;
    case 87:
      if (snake_direction != 'down') {
        snake_direction = 'up';
      }
      break;
    case 83:
      if (snake_direction != 'up') {
        snake_direction = 'down';
      }
      break;
  }
  snake_time = 60;
  snake_run();
}
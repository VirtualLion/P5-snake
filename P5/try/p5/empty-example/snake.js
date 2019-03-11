
var snake_list = [];

function snake_born() {
	// body...

 	var size = 10;
 	var y = 500/10/2;

 	for (var i = 5; i >= 0; i--) {
 		var note = new Object();
 		note.x = i;
 		note.y = y;
 		note.size = size;
 		snake_list.push(note);
 	}
}

function snake_run(direction) {
	
	for (var i = snake_list.length-1; i > 0; i--) {
 		var note = snake_list[i];
 		var note1 = snake_list[i-1];
 		note.x = note1.x;
 		note.y = note1.y;
 		note.size = note1.size;
 	}

 	var note = snake_list[0];
 	switch (direction) {
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
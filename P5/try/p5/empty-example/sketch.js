document.write("<script type='text/javascript' src='keyboard.js'></script>");  
document.write("<script type='text/javascript' src='snake.js'></script>");  
document.write("<script type='text/javascript' src='food.js'></script>");
document.write("<script type='text/javascript' src='score.js'></script>");


var time = 0;

var snake_color = 255;
var easing = 0.3;

function setup() {
  // put setup code here

  score_elem();

  createCanvas(500, 500);

  snake.snake_born();
}



function draw() {
  // put drawing code here
  background(0);

  time++;
  var tt = time%30;
  

  if (tt == 0) {
  	snake_run(keyboard_direction);
  }

  if (tt<4 || tt>25) {
  	snake_color += (150-snake_color)*easing;
  } else {
  	snake_color = 255;
  }

  fill(snake_color);

  for (var i = 0; i < snake_list.length; i++) {
  	var note = snake_list[i];
  	rect(note.x*note.size, note.y*note.size, note.size, note.size);
  }
  

  score_show();
}
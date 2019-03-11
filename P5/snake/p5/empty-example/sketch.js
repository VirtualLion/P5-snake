document.write("<script src='config.js'></script>");
document.write("<script src='score.js'></script>");
document.write("<script src='snake.js'></script>");
document.write("<script src='food.js'></script>");


function setup() {
  // put setup code here
  score_init();
  snake_init(config_unit_size, 0, config_map_height/2, 5);
  food_init(config_unit_size);
  
  createCanvas(config_map_width*config_unit_size, config_map_height*config_unit_size);
}

function draw() {
  // put drawing code here
  background(0);

  if (score_check_result == 'over'
  	||
  	score_check_result == 'dead') {
  	food_show(snake, config_map_width, config_map_height);
  	snake_show();
  	score_show();
  	return;
  }

  if (keyIsDown(32)) {
      snake_run(15);
  } else {
      snake_run();
  }

  var check = true;
  while (check) {
  	score_check(snake,food,config_map_width,config_map_height);
  	switch (score_check_result) {
  		case 'eat':
  			food_show(config_map_width, config_map_height);
  			break;
  		case 'null':
  		case 'over':
  		case 'dead':
  			check = false;
  			break;
  	}
  }
  

  food_show(config_map_width, config_map_height);
  snake_show();
  score_show();
}
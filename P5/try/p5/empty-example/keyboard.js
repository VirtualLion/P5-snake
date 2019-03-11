
var keyboard_direction = 'right';


function keyPressed() {
  switch (keyCode) {
    case 65:
      if (keyboard_direction != 'right') {
        keyboard_direction = 'left';
      }
      break;
    case 68:
      if (keyboard_direction != 'left') {
        keyboard_direction = 'right';
      }
      break;
    case 87:
      if (keyboard_direction != 'down') {
        keyboard_direction = 'up';
      }
      break;
    case 83:
      if (keyboard_direction != 'up') {
        keyboard_direction = 'down';
      }
      break;
  }
}
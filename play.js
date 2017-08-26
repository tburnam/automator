var robot = require("robotjs");

// Mouse movement handler
let handleMouse = (eventItem) => {
  var x = eventItem.data.x;
  var y = eventItem.data.y;

  var screenSize = robot.getScreenSize();

  if (x > 0 && x < screenSize.width && y > 0 && y < screenSize.height) {
    robot.moveMouse(x, y);
  }
}

let handleEvent = (event) => {
  switch (event.type) {
    case 'mouse':
      handleMouse(event);
      break;
    case 'click':
      robot.mouseClick();
      break;
    case 'key':
      // TODO: Better support, needs to handle modifiers/special keys
      robot.typeString(event.data[0]);
      break;
  }
}

exports.util = {
  process: handleEvent,
}

const robot = require('robotjs');

// Mouse movement handler
const handleMouse = (eventItem) => {
  const x = eventItem.data.x;
  const y = eventItem.data.y;

  const screenSize = robot.getScreenSize();

  if (x > 0 && x < screenSize.width && y > 0 && y < screenSize.height) {
    robot.moveMouse(x, y);
  }
};

const keyMapping = {
  'Left Meta': 'command',
  'Right Meta': 'command',
  Comma: ',',
};

const getKey = (key) => {
  if (key in keyMapping) {
    return keyMapping[key];
  } else {
    return key.toLowerCase();
  }
};

const handleType = (event) => {
  console.log(event.data[0]);
  robot.keyTap(getKey(event.data[0]));
};

const handleEvent = (event) => {
  switch (event.type) {
    case 'mouse':
      handleMouse(event);
      break;
    case 'click':
      robot.mouseClick();
      break;
    case 'key':
      // TODO: Better support, needs to handle modifiers/special keys
      handleType(event);
      break;
    default:
      // Do something
      break;
  }
};

exports.util = {
  process: handleEvent,
};

var robot = require("robotjs");
var jsonfile = require('jsonfile')
var file = './tmp/data.json'

// Mouse movement handler
let handleMouse = (eventItem) => {
  var x = eventItem.data.x;
  var y = eventItem.data.y;

  var screenSize = robot.getScreenSize();

  if (x > 0 && x < screenSize.width && y > 0 && y < screenSize.height) {
    robot.moveMouse(x, y);
  }
}

// READ IN DATA
jsonfile.readFile(file, function(err, obj) {
  for (var item in obj.events) {
    let eventItem = obj.events[item];

    switch (eventItem.type) {
      case 'mouse':
        handleMouse(eventItem);
        break;
      case 'click':
        robot.mouseClick();
        break;
      case 'key':
        // TODO: Better support, needs to handle modifiers/special keys
        robot.typeString(eventItem.data[0]);
        break;
    }
  }
})

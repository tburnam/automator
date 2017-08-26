var gkm = require('gkm');

// EXPORT OBJECT
const util = {
  events: [],
}

util.clearCache = () => {
  util.events = [];
}

util.stopRecording = () => {
  gkm.stop();
  clearInterval(util.eventLoop);
}

util.startRecording = () => {
  // GLOBAL READ QUEUE
  var readQueue = []

    gkm.start();

  // KEYBOARD INPUT
    gkm.events.on('key.pressed', (data) => {
      var keyData = {};
      keyData.type = "key";
      keyData.data = data;

      // Enqueue action
      readQueue.push(keyData);
      //movements.events.push(keyData);
  });

  // CLICK
  gkm.events.on('mouse.clicked', function(data) {
    var mouseData = {};
    mouseData.type = "click";

    // Enqueue action
    readQueue.push(mouseData);
    //movements.events.push(mouseData);
  });

  // MOUSE MOVEMENT
  gkm.events.on('mouse.moved', function(data) {
    var mouseData = {};

    var position = {};
    position.x = data[0].split(',')[0]
    position.y = data[0].split(',')[1]

    mouseData.type = "mouse";
    mouseData.data = position;

    // Enqueue action
    readQueue.push(mouseData);
    //movements.events.push(mouseData);
  });


  // Recorder
  util.eventLoop = setInterval(function() {
    // Process actions, clear queue
    if (readQueue.length > 0) {
      while (readQueue.length > 0) {
        util.events.push(readQueue[0]);
        readQueue.shift();
      }
    }
    else {
      // insert null time
      var timeBlock = {};
      timeBlock.type = "time";
      util.events.push(timeBlock)
    }
  }, 50);
}


exports.util = util;

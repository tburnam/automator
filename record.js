var gkm = require('gkm');
var death = require('death')({uncaughtException: true});
var jsonfile = require('jsonfile')

// DATA OBJECT
var movements = {}
movements.events = []

// KEYBOARD INPUT
gkm.events.on('key.*', (data) => {
    var keyData = {};
    keyData.type = "key";
    keyData.data = data;

    movements.events.push(keyData)
});

// CLICK
gkm.events.on('mouse.clicked', function(data) {
  var mouseData = {};
  mouseData.type = "click";
  movements.events.push(mouseData)
});

// MOUSE MOVEMENT
gkm.events.on('mouse.moved', function(data) {
  var mouseData = {};

  var position = {};
  position.x = data[0].split(',')[0]
  position.y = data[0].split(',')[1]

  mouseData.type = "mouse";
  mouseData.data = position;

  movements.events.push(mouseData);
});

// ON EXIT, SAVE DATA
// TODO: Implement UI for this, maybe transparent bar and listen for Cmd+Delete and then exit
death(function(signal, err) {
  var file = './tmp/data.json'
  jsonfile.writeFile(file, movements, function (err) {
    console.error(err)
  })
})

var DEFAULT_CAPACITY = 20

function Airport() {
  this.planes = [];
  this.capacity = DEFAULT_CAPACITY;
};

Airport.prototype.land = function(plane) {
  plane.land();
  this.addPlane(plane);
};

Airport.prototype.takeOff = function(plane) {
  plane.takeOff();
  this.removePlane(plane)
};

Airport.prototype.addPlane = function(plane) {
  this.planes.push(plane);
};

Airport.prototype.removePlane = function(plane) {
  var index = this.planes.indexOf(plane);
  if (index > -1) {
    this.planes.splice(index,1);
  };
};

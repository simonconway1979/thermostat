function Plane() {
  this.isFlying = true;
};

Plane.prototype.land = function() {
  this.isFlying = false;
};

Plane.prototype.takeOff = function() {
  if (this.isFlying === true) {
    throw TypeError("The plane in already off the ground");
  } else {
    this.isFlying = true;
  }
};

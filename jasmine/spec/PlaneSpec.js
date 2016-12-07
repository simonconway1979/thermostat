describe("Plane", function() {

  var plane;

  beforeEach(function() {
    plane = new Plane();
  });

  it("should be flying to begin with", function() {
    expect(plane.isFlying).toBeTruthy();
  });

  it ("should be able to land", function() {
    plane.land();
    expect(plane.isFlying).toBeFalsy();
  });

  it ("should be able to take off", function() {
    plane.land();
    plane.takeOff();
    expect(plane.isFlying).toEqual(true);
  });

  it ("when already in the air it should raise an error when it takes off", function() {
    expect(function(){ plane.takeOff(); }).toThrowError("The plane in already off the ground");
  });


});

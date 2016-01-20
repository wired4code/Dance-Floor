describe("spaceDancer", function() {

  var spaceDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    spaceDancer = new SpaceDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(spaceDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a top property", function(){
    expect(spaceDancer.top).to.be.equal(10);
  });

  it("should have a left property", function(){
    expect(spaceDancer.left).to.be.equal(20);
  });

  it("should have a className of space", function() {
    expect(spaceDancer.$node[0].className).to.be.equal("space");
  })

  it("should have a step function that toggles a new class", function() {
    sinon.spy(spaceDancer.$node, 'toggleClass');
    spaceDancer.step();
    expect(spaceDancer.$node.toggleClass.called).to.be.true;
    expect(spaceDancer.$node[0].className).to.be.equal("space spaceAlt");
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(spaceDancer, "step");
      expect(spaceDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(spaceDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(spaceDancer.step.callCount).to.be.equal(2);
    });
  });
});

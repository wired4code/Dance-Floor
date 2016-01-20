describe("pacDancer", function() {

  var pacDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    pacDancer = new PacDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(pacDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a top property", function(){
    expect(pacDancer.top).to.be.equal(10);
  });

    it("should have a left property", function(){
    expect(pacDancer.left).to.be.equal(20);
  });

  it("should have a className of pacman", function() {
    expect(pacDancer.$node[0].className).to.be.equal("pacman");
  })
});

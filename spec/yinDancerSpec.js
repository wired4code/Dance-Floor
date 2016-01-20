describe("yinDancer", function() {

  var yinDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    yinDancer = new YinDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(yinDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a top property", function(){
    expect(yinDancer.top).to.be.equal(10);
  });

  it("should have a left property", function(){
    expect(yinDancer.left).to.be.equal(20);
  });

  it("should have a className of yin", function() {
    expect(yinDancer.$node[0].className).to.be.equal("yin");
  })
});

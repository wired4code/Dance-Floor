var YinDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.top = top;
  this.$node = $('<span class="yin"></span>');
  this.setPosition(top, left);
  this.side = 'right';
};

YinDancer.prototype = Object.create(Dancer.prototype);
YinDancer.prototype.constructor = YinDancer;

YinDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // this.$node.toggle();
};
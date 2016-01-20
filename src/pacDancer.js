var PacDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.top = top;
  this.left = left;
  this.$node = $('<span class="pacman"></span>');
  this.setPosition(top, left);
  this.side = 'left';
};

PacDancer.prototype = Object.create(Dancer.prototype);
PacDancer.prototype.constructor = PacDancer;
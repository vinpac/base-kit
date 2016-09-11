class SmoothMovement {

  constructor(position = 0, target = position, velocity = 0) {
    this.position = position;
    this.target = target;
    this.velocity = velocity;
    this.animationInterval = null;
  }

  /* Updates the position an velocity for this SmoothMovement, and returns the
   * new position.
   */
  update() {
    // check whether the velocity is negative
    if (this.velocity < 0){

      // check whether we must decelerate or can accelerate
      if (this.target > this.position - this.velocity * (this.velocity - 1) / 2){

        // we must decelerate to avoid overshooting, so decrease the speed
        this.velocity ++;

      }else if (this.target <=
        this.position - (this.velocity - 1) * (this.velocity - 2) / 2){

        // we can accelerate without overshooting, so increase the speed
        this.velocity --;
      }
    }else{
      // check whether we must decelerate or can accelerate
      if (this.target < this.position + this.velocity * (this.velocity + 1) / 2){

        // we must decelerate to avoid overshooting, so decrease the speed
        this.velocity--;

      }else if (this.target >=
        this.position + (this.velocity + 1) * (this.velocity + 2) / 2){
        // we can accelerate without overshooting, so increase the speed
        this.velocity++;
      }
    }

    // update the position
    this.position += this.velocity;

    // return the new position
    return this.position;
  }


  /* Returns true if this SmoothMovement has stopped, and false otherwise. Note
   * that this means that both the velocity and acceleration are zero (or
   * equivalently, that the velocity is zero and the position is at the target).
   */
  hasStopped(){
    // return whether we have stopped
    return (this.position === this.target && this.velocity === 0);
  }

  animate(interval, updateListener, stopListener){
    // clear any current animation interval
    if (this.animationInterval) window.clearInterval(this.animationInterval);

    // create the new animation interval
    this.animationInterval = window.setInterval(
        this.createAnimationClosure(updateListener, stopListener), interval);
  }

  createAnimationClosure(updateListener, stopListener) {

    // store a reference to the 'this' object
    const self = this;

    // return the animation closure
    return function(){

      // update the SmoothMovement
      self.update();

      // call the update listener
      const shouldStop = updateListener(self.position, self);

      // check whether the SmoothMovement has stopped
      if (self.hasStopped() || shouldStop === false){

        // clear the animation interval
        window.clearInterval(self.animationInterval);
        self.animationInterval = null;

        // call the stop listener if one was supplied
        if (stopListener) stopListener(self);
      }
    }
  }

  stop() {
    if (this.animationInterval) {
      window.clearInterval(this.animationInterval);
      this.animationInterval = null;
    }
  }
}

export default SmoothMovement

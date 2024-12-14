//  class file for Boid
export default class Boid {
  constructor(x, y, vx = 0, vy = 0) {
    this.position = { x, y };
    this.velocity = { vx, vy };
  }
}

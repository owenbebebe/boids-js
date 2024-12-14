import Boids from "./classes/Boids";
import Boid from "./classes/Boid";
// main function to run boids
function main() {
  // CONSTANTS
  const SIZE_BOIDS = 2000;
  const CANVAS_ID = "boids_canvas";
  const CANVAS_DIMENSION = "2d";

  // 1. error handling
  const canvas = document.getElementById(CANVAS_ID);
  if (!canvas || !canvas.getContext) {
    console.error(ERR_CANVAS);
    return;
  }

  // 2. initialize boids obj
  const ctx = canvas.getContext(CANVAS_DIMENSION);
  let boids = new Boids(SIZE_BOIDS, ctx);

  // 3. start the animation
  boids.animate();
}

main();

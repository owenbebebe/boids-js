// File name: script.js
// Description: main javascript file to initiate boids algorithm
//              for further algorithm design doc please goto
//              https://vanhunteradams.com/Pico/Animal_Movement/Boids-algorithm.html
// Author: Owen Li
// Last Modified Time: 2024/10/30
import Boid from "./src/classes/Boid.js";

/* ********CONSTANTS************* */
// ERR CONSTANTS
const ERR_CANVAS = "Canvas not found or not supported!";

// CONSTANTS
const SIZE_BOIDS = 5000;
const SCREEN_WIDTH = window.innerWidth;
const SCREEN_HEIGHT = window.innerHeight;
const CANVAS_MARGIN_WIDTH = 150;
const CANVAS_MARGIN_HEIGHT = 100;
const CANVAS_ID = "boids_canvas";

/* *********FUNCTIONS************ */
/*  
    開始生成boids
    input: boids 的數量
    return: class Boid的array Boid[size_boids]
 */
function create_boids(size_boids) {
  // 1. initialize array to store each boids
  let boids = [];

  // 2. for each boid
  for (let i = 0; i < SIZE_BOIDS; i++) {
    //  2.2. create and assign random positions to boid class
    boids.push(
      new Boid(
        Math.floor(Math.random() * ((SCREEN_WIDTH - CANVAS_MARGIN_WIDTH) / 4)),
        Math.floor(Math.random() * ((SCREEN_HEIGHT - CANVAS_MARGIN_HEIGHT) / 4))
      )
    );
  }
  return boids;
}

/*
    開始boids動畫 每一針recursive一次
    input: canvas 的 context, boids array 
    return: None
 */
function animate_boids(ctx, boids) {
  // 1. clear canvas
  clear_canvas(ctx);

  // 2. update boids

  // 3. draw boids on the canvas

  // 4. repeat self
  for (let i = 0; i < SIZE_BOIDS; i++) {
    ctx.fillRect(boids[i].position.x, boids[i].position.y, 1, 1);
    ctx.fillStyle = "white";
  }

  requestAnimationFrame(animate_boids(ctx, boids));
}

/*
    清除canvas裡的所有elements
    input: canvas's context
    return: None
 */
function clear_canvas(ctx) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

/*
    跑algo去算每隻boid下一針的position & velocity
    input: boids array
    return: boids array
 */
function update_boids(boids) {}

/*  
    main function
    input: None
    return: None
 */
function main_boids() {
  // 1. error handling
  const canvas = document.getElementById(CANVAS_ID);
  if (!canvas || !canvas.getContext) {
    console.error(ERR_CANVAS);
    return;
  }

  // 2. create boids
  let boids = create_boids();

  // 3. start the animation timer refresh every screen frame rate
  const ctx = canvas.getContext("2d");
  requestAnimationFrame(animate_boids(ctx, boids));
}

/*
      
    input: boids array
    return: boids array
 */
function draw_boids(boids) {}

main_boids();

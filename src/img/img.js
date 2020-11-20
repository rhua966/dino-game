import skyPng from './cloud.png';
import groundPng from './ground.png';
import dinoPng from './dinosaur.png';
import dinoLeftPng from './dinosaur_left.png';
import dinoRightPng from './dinosaur_right.png';
import dinoDiePng from './dinosaur_die.png';
import obstaclePng from './obstacle.png';

let skyImage = new Image();
let groundImage = new Image();
let dinoImage = new Image();
let dinoLeftImage = new Image();
let dinoRightImage = new Image();
let dinoDieImage = new Image();
let obstacleImage = new Image();

skyImage.src = skyPng;
groundImage.src = groundPng;
dinoImage.src = dinoPng; 
dinoLeftImage.src = dinoLeftPng;
dinoRightImage.src = dinoRightPng;
dinoDieImage.src = dinoDiePng;
obstacleImage.src = obstaclePng;

groundImage.style.filter = "invert(100%)";

export { skyImage, groundImage, dinoImage, dinoLeftImage, dinoRightImage, dinoDieImage, obstacleImage };
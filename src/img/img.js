import replayPng from './replay.png';
import gameOverPng from './game_over.png';
import skyPng from './cloud.png';
import groundPng from './ground.png';
import dinoPng from './dinosaur.png';
import dinoLeftPng from './dinosaur_left.png';
import dinoRightPng from './dinosaur_right.png';
import dinoDiePng from './dinosaur_die.png';
import obstaclePng from './obstacle.png';
import dinoCrouchLeftPng from './dinosaur_crouch_left.png';
import dinoCrouchRightPng from './dinosaur_crouch_right.png';
import flyingDinoUpPng from './flying_dinosaur_up.png';
import flyingDinoDownPng from './flying_dinosaur_down.png';

let replayImage = new Image();
let gameOverImage = new Image();
let skyImage = new Image();
let groundImage = new Image();
let dinoImage = new Image();
let dinoLeftImage = new Image();
let dinoRightImage = new Image();
let dinoDieImage = new Image();
let obstacleImage = new Image();
let dinoCrouchLeftImage = new Image();
let dinoCrouchRightImage = new Image();
let flyingDinoUpImage = new Image();
let flyingDinoDownImage = new Image();

replayImage.src = replayPng;
gameOverImage.src = gameOverPng;
skyImage.src = skyPng;
groundImage.src = groundPng;
dinoImage.src = dinoPng; 
dinoLeftImage.src = dinoLeftPng;
dinoRightImage.src = dinoRightPng;
dinoDieImage.src = dinoDiePng;
obstacleImage.src = obstaclePng;
dinoCrouchLeftImage.src = dinoCrouchLeftPng;
dinoCrouchRightImage.src = dinoCrouchRightPng;
flyingDinoUpImage.src = flyingDinoUpPng;
flyingDinoDownImage.src = flyingDinoDownPng;

export {
    replayImage, gameOverImage, skyImage, groundImage,
    dinoImage, dinoLeftImage, dinoRightImage, dinoDieImage, obstacleImage,
    dinoCrouchLeftImage, dinoCrouchRightImage, flyingDinoUpImage, flyingDinoDownImage
};
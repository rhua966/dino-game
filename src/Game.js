import React from 'react';

import * as DEFAULT from './constants';
import { STATUS } from './constants';
import {skyImage, groundImage, dinoImage, dinoLeftImage, dinoRightImage, dinoDieImage, obstacleImage } from './img/img';

export default class Game extends React.Component {
    constructor(props) {
        super(props);

        let imageLoadCount = 0;
        let onImageLoaded = () => {
            ++imageLoadCount;
            if (imageLoadCount === 3) {
                this.__draw();
            }
        };

        // Image files
        skyImage.onload = onImageLoaded;
        groundImage.onload = onImageLoaded;
        dinoImage.onload = onImageLoaded;

        this.options = {
            fps: DEFAULT.FPS,
            skySpeed: DEFAULT.SKY_SPEED,
            groundSpeed: DEFAULT.GROUND_SPEED,
            skyImage: skyImage,
            groundImage: groundImage,
            dinoImage: [dinoImage, dinoLeftImage, dinoRightImage, dinoDieImage],
            obstacleImage: obstacleImage,
            skyOffset: DEFAULT.SKY_OFFSET,
            groundOffset: DEFAULT.GROUND_OFFSET,
            ...this.props.options
        };

        this.status = STATUS.STOP;
        this.timer = null;
        this.score = 0;
        this.highScore = window.localStorage ? window.localStorage['highScore'] || 0 : 0;
        this.jumpHeight = 0;
        this.jumpDelta = 0;
        this.obstaclesBase = 1;
        this.obstacles = this.__obstaclesGenerate();
        
        this.currentDistance = 0;
        this.playerStatus = 0;
    }

    componentDidMount() {
        if (window.innerWidth >= 680) {
            this.canvas.width = 680;
        }

        const onSpacePress = () => {
            switch (this.status) {
                case STATUS.STOP:
                    this.start();
                    break;
                case STATUS.START:
                    this.jump();
                    break;
                case STATUS.OVER:
                    this.restart();
                    break;
                default:
                    break;
            }
        };

        const onPPress = () => {
            switch (this.status) {
                case STATUS.PAUSE:
                    this.goOn();
                    break;
                case STATUS.START:
                    this.pause();
                    break;
                default:
                    break;
            }
        }

        window.onkeypress = (e) => {
            if (e.key === ' ') {
                onSpacePress();
            } else if (e.key === 'p') {
                onPPress();
            }
        }

        this.canvas.parentNode.onclick = onSpacePress;

        window.onblur = this.pause;
        window.onfocus = this.goOn;
    }

    componentWillUnmount() {
        window.onblur = null;
        window.onfocus = null;
    }

    __draw() {
        if (!this.canvas) {
            return;
        }

        const { options } = this;

        let level = Math.min(200, Math.floor(this.score / 100));
        let groundSpeed = (options.groundSpeed + level) / options.fps;
        let skySpeed = options.skySpeed / options.fps;
        let obstacleWidth = options.obstacleImage.width;
        let dinoWidth = options.dinoImage[0].width;
        let dinoHeight = options.dinoImage[0].height;

        const ctx = this.canvas.getContext('2d');
        const { width, height } = this.canvas;

        ctx.clearRect(0, 0, width, height);
        ctx.save();

        // Draw cloud
        this.options.skyOffset = this.options.skyOffset < width
            ? (this.options.skyOffset + skySpeed)
            : (this.options.skyOffset - width);
        ctx.translate(-this.options.skyOffset, 0);
        ctx.drawImage(this.options.skyImage, 0, 0);
        ctx.drawImage(this.options.skyImage, this.options.skyImage.width, 0);

        // Draw ground
        this.options.groundOffset = this.options.groundOffset < width
            ? (this.options.groundOffset + groundSpeed)
            : (this.options.groundOffset - width);
        ctx.translate(this.options.skyOffset - this.options.groundOffset, 0);
        ctx.drawImage(this.options.groundImage, 0, 76);
        ctx.drawImage(this.options.groundImage, this.options.groundImage.width, 76);

        // Draw dinosaur
        // Translate to top left corner
        ctx.translate(this.options.groundOffset, 0);
        ctx.drawImage(this.options.dinoImage[this.playerStatus], 80, 64 - this.jumpHeight);
        // Update jump height and speed
        this.jumpHeight = this.jumpHeight + this.jumpDelta;
        if (this.jumpHeight <= 1) {
            this.jumpHeight = 0;
            this.jumpDelta = 0;
        } else if (this.jumpHeight < DEFAULT.JUMP_MAX_HEIGHT&& this.jumpDelta > 0) {
            this.jumpDelta = (this.jumpHeight ** 2) * 0.001033 - this.jumpHeight * 0.137 + 5;
        // } else if (this.jumpHeight < JUMP_MAX_HEIGHT && this.jumpDelta < 0) {
        //     this.jumpDelta = (this.jumpDelta ** 2) * 0.00023 - this.jumpHeight * 0.03 - 4;
        } else if (this.jumpHeight >= DEFAULT.JUMP_MAX_HEIGHT) {
            this.jumpDelta = - DEFAULT.JUMP_DELTA / 2.7;
        }

        // Draw score text
        let scoreText = (this.status === STATUS.OVER) ? 'GAME OVER  ' : '';
        scoreText += Math.floor(this.score);
        ctx.font = "Bold 18px Arial";
        ctx.textAlign = "right";
        ctx.fillStyle = "#595959";
        ctx.fillText(scoreText, width - 30, 23);
        if (this.status === STATUS.START) {
            this.score += 0.5;
            if (this.score > this.highScore) {
                this.highScore = this.score;
                console.log("Score: " + this.score + ", New High: " + this.highScore);
                window.localStorage['highScore'] = this.highScore;
            }
            this.currentDistance += groundSpeed;
            if (this.score % 4 === 0) {
                this.playerStatus = (this.playerStatus + 1) % 3;
            }
        }

        if (this.highScore) {
            ctx.textAlign = "left";
            ctx.fillText("HIGH " + Math.floor(this.highScore), 30, 23);
        }

        // Draw obstacles
        let pop = 0;
        for (let i = 0; i < this.obstacles.length; ++i) {
            console.log(pop);
            if (this.currentDistance >= this.obstacles[i].distance) {
                let offset = width - (this.currentDistance - this.obstacles[i].distance + groundSpeed);
                if (offset > 0) {
                    ctx.drawImage(this.options.obstacleImage, offset, 84);
                } else {
                    ++pop;
                }
                
            } else {
                break;
            }
        }
        
        for (let i = 0; i < pop; ++i) {
            this.obstacles.shift();
        }

        if (this.obstacles.length < 5) {
            this.obstacles = this.obstacles.concat(this.__obstaclesGenerate());
        }

        // Collision detection
        let firstOffset = width - (this.currentDistance - this.obstacles[0].distance + groundSpeed);
        if (90 - obstacleWidth < firstOffset &&
            firstOffset < 60 + dinoWidth &&
            64 - this.jumpHeight + dinoHeight > 84) {
            this.stop();
        }

        ctx.restore();
    }

    __obstaclesGenerate() {
        let result = [];
        for (let i = 0; i < 10; ++i) {
            let random = Math.floor(Math.random() * 100) % 60;
            random = (Math.random() * 10 % 2 === 0 ? 1 : -1) * random;
            result.push({
                distance: random + this.obstaclesBase * 200
            });
            ++this.obstaclesBase;
        }
        return result;
    }

    __setTimer() {
        this.timer = setInterval(() => {
            this.__draw();
        }, 1000 / this.options.fps);
    }

    __clearTimer() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
    }

    __clear() {
        this.score = 0;
        this.jumpHeight = 0;
        this.currentDistance = 0;
        this.obstacles = [];
        this.obstaclesBase = 1;
        this.playerStatus = 0;
    }

    start = () => {
        if (this.status === STATUS.START) {
            return;
        }

        this.status = STATUS.START;
        this.__setTimer();
        this.jump();
    };

    pause = () => {
        if (this.status === STATUS.START) {
            this.status = STATUS.PAUSE;
            this.__clearTimer();
        }
    };

    goOn = () => {
        if (this.status === STATUS.PAUSE) {
            this.status = STATUS.START;
            this.__setTimer();
        }
    };

    stop = () => {
        if (this.status === STATUS.OVER) {
            return;
        }

        this.status = STATUS.OVER;
        this.playerStatus = 3;
        this.__clearTimer();
        this.__draw();
        this.__clear();
    };

    restart = () => {
        this.obstacles = this.__obstaclesGenerate();
        this.start();
    };

    jump = () => {
        if (this.jumpHeight > 2) {
            return;
        }

        this.jumpDelta = DEFAULT.JUMP_DELTA;
        this.jumpHeight = DEFAULT.JUMP_DELTA;
    };

    render() {
        return (
            <canvas
                id="canvas"
                ref={ref => this.canvas = ref}
                height={160}
                width={340}
            />
        );
    }
}
/* global Phaser */
// Copyright (c) 2024 Anastasiia Lebedenko. All rights reserved.
//
// Created by: Anastasiia Lebedenko
// Created on: June 2025
// This is the Game Scene

class GameScene extends Phaser.Scene {
    //creates alien
    createAlien() {
      const alienXLocation = Math.floor(Math.random() * 1920) + 1 // get number between 1 and 1920
      let alienXVelocity = Math.floor(Math.random() * 50) + 1 // gets a number between 1 and 50
      alienXVelocity *= Math.round(Math.random()) ? 1 : -1 // 50% chance of getting a positive or negative value
      const anAlien = this.physics.add.sprite(alienXLocation, 100, 'alien') 
      anAlien.yVel = 3
      //anAlien.velocity.x = alienXVelocity
      this.alienGroup.add(anAlien)
    }
    constructor() {
      super({ key: 'gameScene' })
      // variables
      this.xvel = 0;
      this.background = null
      this.ship = null
      this.fireMissile = false
      this.score = 0
      this.scoreText = null
      this.scoreTextStyle = { font: '65px ', fill: '#ffffff', align: 'center'  }
      this.gameOverText = null
      this.gameOverTextStyle = { font: '65px ', fill: '#ff0000', align: 'center' }
      this.explosion = new Audio("./assets/bomb.wav")
      this.shipAlive = true
    }
    // sets the background color of the title scene
    init(data) {
      this.cameras.main.setBackgroundColor('#ffffff')
    }
    // prints Title Scene in the console
    preload() {
      console.log('Game Scene')
  
      // images
      this.load.image('starBackground', 'assets/starBackground.jpg')
      this.load.image('ship', 'assets/spaceShip.png')
      this.load.image('missile', 'assets/missile.png')
      this.load.image('alien', 'assets/alien.png')
      // sound
      this.load.audio('laser', 'assets/laser1.wav')
      this.load.audio('explosion', 'assets/barrelExploding.wav')
      this.load.audio('bomb', 'assets/bomb.wav')
    }
  
    create(data) {
      this.shipAlive = true
      this.explosion.pause();
      this.explosion.volume = 0.2;
      this.explosion.loop = false;
      this.explosion.currentTime = 0;
      this.loss.pause();
      this.loss.currentTime = 0;
      
      
      // makes the background
      this.background = this.add.image(0, 0, 'starBackground')
      //this.background.setOrigin(0, 0)
      this.background.x = 1920 / 2
      this.background.y = 1080 / 2
  
      this.scoreText = this.add.text(10, 10, 'Score: ' + this.score.toString(), this.scoreTextStyle)
      
      // spawns the ship on the background
      this.ship = this.physics.add.sprite(1920 / 2, 1080 - 100, 'ship')
      // adds ship to group
      this.missileGroup = this.physics.add.group()
  
      // adds alien to group
      this.alienGroup = this.add.group()
      this.createAlien()
  
      //collision between missiles and aliens
      this.physics.add.collider(this.missileGroup, this.alienGroup, function(missileCollide, alienCollide) {
        alienCollide.destroy()
        missileCollide.destroy()
        this.sound.play('explosion')
        this.score = this.score + 1
        this.scoreText.setText('Score: ' + this.score.toString())
        this.createAlien()
        this.createAlien()
      }.bind(this))
      
      //collision between aliens and the ship
      this.physics.add.collider(this.ship, this.alienGroup, function (shipCollide, alienCollide) {
        this.physics.pause()
        alienCollide.destroy()
        shipCollide.destroy()
        this.gameOverText = this.add.text(1920 / 2, 1080 / 2, 'Game Over!\nClick to play again.', this.gameOverTextStyle).setOrigin(0.5)
        this.gameOverText.setInteractive({ useHandCursor: true })
        this.gameOverText.on('pointerdown', () => this.scene.start('gameScene'))
        this.explosion.play();
        this.audio.pause();
        this.audio.currentTime = 0;
        this.score = 0
        this.loss.play();
        this.loss.volume = 1;
        this.loss.loop = true;
        this.shipAlive = false;
        
      }.bind(this))
    }
      
  
    update(time, delta) {
      const clampNumber = (num, a, b,) => Math.max(Math.min(num, Math.max(a, b)), Math.min(a, b));
      // called 60 times a second, hopefully!
      //constant variable for the left arrow key
      const keyLeftObj = this.input.keyboard.addKey('LEFT')
      const keyLeftObj2 = this.input.keyboard.addKey('A')
      // constant variable for the right arrow key
      const keyRightObj = this.input.keyboard.addKey('RIGHT')
      const keyRightObj2 = this.input.keyboard.addKey('D')
      // constant variable for the spacebar 
      const keySpaceObj = this.input.keyboard.addKey('SPACE')
      //checks if keys are down
      if (keyLeftObj.isDown == true||keyLeftObj2.isDown == true) {
        //moves the ship to the left
        this.xvel = clampNumber(this.xvel-1,-9,9)
      } else if (keyRightObj.isDown == true||keyRightObj2.isDown == true) {
        //moves the ship to the right
        this.xvel = clampNumber(this.xvel+1,-9,9)
      } else {
        //stops the ship from moving
        this.xvel = clampNumber(this.xvel*.9, -9, 9)
      }
      //Wrapping
      if (this.ship.x < 0) {
        this.ship.x = 1920
      } else if (this.ship.x > 1920) {
        this.ship.x = 0
      } 
      this.ship.x = this.ship.x+this.xvel
      this.ship.rotation = Phaser.Math.DegToRad(this.xvel * 2)
      //checks if the spacebar is being pressed
      if (keySpaceObj.isDown == true && this.shipAlive == true ) {
        if (this.fireMissile == false) {
          // fires missle
          this.fireMissile = true
          //makes a missle on the ship
          const aNewMissile = this.physics.add.sprite(this.ship.x, this.ship.y, 'missile')
          this.missileGroup.add(aNewMissile)
          this.sound.play('laser')
        }
      }
      // sets fire missle to false if the spacebar is not being pressed
      if (keySpaceObj.isUp === true) {
        this.fireMissile = false
      }
      // moves the missle and destroys it when it hits the border
      this.missileGroup.children.each(function (item){
        item.y = item.y - 15
        if (item.y < 0) {
          item.destroy()
        } 
      })
      this.alienGroup.children.each(function (item){
          if (!this.shipAlive) {
              item.yVel = 0; // Stop all alien movement
          } else {
              item.y += item.yVel; // Move aliens if ship is alive
              if (item.y > 1080) {
                  item.y = 0;
                  item.x = Phaser.Math.Between(0, 1920);
              }
          }
      }, this); // Pass 'this' as the context to refer to the GameScene instance
    }
  }
  
  export default GameScene
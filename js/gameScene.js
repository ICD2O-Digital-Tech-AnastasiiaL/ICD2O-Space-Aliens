// Copyright (c) 2025 Anastasiia Lebedenko All rights reserved
//
// Created by: Anastasiia Lebedenko
// Created on: May 2025
// This file contains the JS functions for index.html
/* global Phaser */

class GameScene extends Phaser.Scene {

    constructor() {
        super({ key: "gameScene" })

        this.background = null
        this.ship = null
    }

    init(data) {
      this.cameras.main.setBackgroundColor("ffffff")
    }
    
    preload() {
        console.log("Game Scene")

        //images
        this.load.image("startBackground", "assets/startBackground.png")
        this.load.image("ship", "assets/spaceShip.png")
    }

    create(data) {
        this.background = this.add.image(0, 0, "startBackground").setScale(2.0)
        this.background.setOrigin(0, 0)

        this.ship = this.physics.add.sprite(1920 / 2, 1080 - 100, "ship")
    }

    update(time, delta) {
    }
}

export default GameScene
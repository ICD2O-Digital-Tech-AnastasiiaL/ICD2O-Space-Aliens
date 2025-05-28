// Copyright (c) 2025 Anastasiia Lebedenko All rights reserved
//
// Created by: Anastasiia Lebedenko
// Created on: May 2025
// This file contains the JS functions for index.html
/* global Phaser */

class GameScene extends Phaser.Scene {

    constructor() {
        super({ key: "gameScene" })
    }

    init(data) {
      this.cameras.main.setBackgroundColor("ffffff")
    }
    
    preload() {
        console.log("Game Scene")
    }

    create(data) {
    }

    update(time, delta) {
    }
}

export default GameScene
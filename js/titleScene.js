// Copyright (c) 2025 Anastasiia Lebedenko All rights reserved
//
// Created by: Anastasiia Lebedenko
// Created on: May 2025
// This file contains the JS functions for index.html
/* global Phaser */

class TitleScene extends Phaser.Scene {

    constructor() {
        super({ key: "titleScene" })
        
        this.titleSceneBackgroundImage = null
        this.titleSceneText = null
        this.titleSceneTextStyle = {
            font: "200px Times",
            fill: "#fde4b9",
            align: "center",
        }
    }

    init(data) {
      this.cameras.main.setBackgroundColor("0073c7")
    }
    
    preload() {
        console.log("Title Scene")
        this.load.image("titleSceneBackgroundImage", "assets/aliens_screen_image.jpg")
    }

    create(data) {
    this.titleSceneBackgroundImage = this.add
        .sprite(0, 0, "titleSceneBackground")
        .setScale(2.75)
    this.titleSceneBackgroundImage.x = 1980 / 2
    this.titleSceneBackgroundImage.y = 1080 / 2
    
    this.titleSceneText = this.add
        .text(1920 / 2, 1080 / 2 + 350, "Space Aliens", this.titleSceneTextStyle)
        .setOrigin(0.5)
    }

    update(time, delta) {
    }
}

export default TitleScene
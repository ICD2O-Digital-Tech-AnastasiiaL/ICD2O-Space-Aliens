// Copyright (c) 2025 Anastasiia Lebedenko All rights reserved
//
// Created by: Anastasiia Lebedenko
// Created on: May 2025
// This file contains the JS functions for index.html
/* global Phaser */

class SplashScene extends Phaser.Scene {
    constructor() {
        super({ key: "splashScene" })

        this.splashSceneBackgroundImage = null
    }

    init(data) {
        this.cameras.main.setBackgroundColor("#0c4890")
    }

    preload() {
        console.log("Splash Scene")
        this.load.image("splashSceneBackground", "./assets/splashSceneImage.png")
    }

    create(data) {
        this.splashSceneBackgroundImage = this.add.sprite(
            0,
            0,
            "splashSceneBackground"
        )
        this.splashSceneBackgroundImage.x = 1920 / 2
        this.splashSceneBackgroundImage.y = 1080 / 2
    }

    update(time, delta) {
        if (time > 3000) {
            this.scene.switch("titleScene")
        }
    }
}

export default SplashScene
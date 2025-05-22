// Copyright (c) 2025 Anastasiia Lebedenko All rights reserved
//
// Created by: Anastasiia Lebedenko
// Created on: May 2025
// This file contains the JS functions for index.html
/* global Phaser */
"use strict";

class SplashScene extends Phaser.Scene {
    constructor() {
        super({ key: "splashScene" })
    }

    init(data) {
        this.cameras.main.setBackgroundColor("3925a0")
    }

    preload() {
        console.log("Splash Scene")
    }

    create(data) {
        //pass
    }

    update(time, delta) {
        //pass
    }
}

export default SplashScene
// Copyright (c) 2025 Anastasiia Lebedenko All rights reserved
//
// Created by: Anastasiia Lebedenko
// Created on: May 2025
// This file contains the JS functions for index.html
// global Phaser
"use strict";

class SplashScene extends Phaser.Scene {
        /**
     * This method is the constructor
     */
    constructor() {
        super({ key: "splashScene" })
    }
    /**
     * Can be defined on your own Scenes.
     * This method is called by the Scene Manager when the scene starts,
     *  before preload() and create().
     * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start().
    */
    init(data) {
        this.camera.main.setBackgroundColor("ffffff")
    }

    preload() {
        console.log("Splash Scene")
    }
    /**
     * Can be defined on your own Scenes.
     * This method is called by the Scene Manager when the scene starts,
     *  before preload() and create().
     * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start().
    */
    create(data) {
        //pass
    }
    /**
     * Can be defined on your own Scenes.
     * This method is called by the Scene Manager when the scene starts,
     *  before preload() and create().
     * @param {number} time - The current time.
     * @param {number} delta - The delta time in ms since the last frame.
    */
    update(time, delta) {
        //pass
    }
}

export default SplashScene
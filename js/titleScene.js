// Copyright (c) 2025 Anastasiia Lebedenko All rights reserved
//
// Created by: Anastasiia Lebedenko
// Created on: May 2025
// This file contains the JS functions for index.html
/* global Phaser */
"use strict";

class TittleScene extends Phaser.Scene {

    constructor() {
        super({ key: "titleScene"})
    }
        /**
     * Can be defined on your own Scenes.
     * This method is called by the Scene Manager when the scene starts,
     *  before preload() and create().
     * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start().
    */
    init(data) {
      this.cameras.main.setBackgroundColor("ffffff")
    }
    
    preload() {
        console.log("Title Scene")
    }

        /**
     * Can be defined on your own Scenes.
     * This method is called by the Scene Manager when the scene starts,
     *  before preload() and create().
     * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start().
    */
    
    create(data) {
    }

        /**
     * Can be defined on your own Scenes.
     * This method is called by the Scene Manager when the scene starts,
     *  before preload() and create().
     * @param {number} time - The current time.
     * @param {number} delta - The delta time in ms since the last frame.
    */
    
    update(time, delta) {
    }
}

export default TittleScene
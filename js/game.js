// Copyright (c) 2025 Anastasiia Lebedenko All rights reserved
//
// Created by: Anastasiia Lebedenko
// Created on: May 2025
// This file contains the JS functions for index.html
// global Phaser

import SplashScene from "./splashScene.js"
import TitleScene from "./titleScene.js"
import MenuScene from "./menuScene.js"
import InstructionsScene from "./instructionsScene.js"
import GameScene from "./gameScene.js"

// game scene
const splashScene = new SplashScene()
const titleScene = new TitleScene()
const menuScene = new MenuScene()
const instructionsScene = new InstructionsScene()
const gameScene = new GameScene()

//* Game scene */
const config = {
    type: Phaser.AUTO,
    width: 1920,
    height: 1080,
    physics: {
        default: "arcade",
        arcade: {
            debug: false
        }
    },
    // set background color
    backgroundColor: 0x5f6e7a,
    scale: {
     mode: Phaser.Scale.FIT,
     autoCenter: Phaser.Scale.CENTER_BOTH,
    },
}

const game = new Phaser.Game(config)

//load scene
game.scene.add("splashScene", splashScene)
game.scene.add("titleScene", titleScene)
game.scene.add("menuScene", menuScene)
game.scene.add("instructionsScene", instructionsScene)
game.scene.add("gameScene", gameScene)

game.scene.start("splashScene")
// Copyright (c) 2025 Anastasiia Lebedenko All rights reserved
//
// Created by: Anastasiia Lebedenko
// Created on: May 2025
// This file contains the JS functions for index.html
// global Phaser
"use strict";

const config = {
    type: Phaser.AUTO,
    width: 1920,
    height: 1080,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
    // set background color
    backgroundColor: 0x5f6e7a,
    scale: {
     mode: Phaser.Scale.FIT,
     autoCenter: Phaser.Scale.CENTER_BOTH
    }
}

const game = new Phaser.Game(config)
console.log(game)
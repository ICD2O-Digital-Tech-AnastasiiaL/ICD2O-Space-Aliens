// Copyright (c) 2025 Anastasiia Lebedenko All rights reserved
//
// Created by: Anastasiia Lebedenko
// Created on: May 2025
// This file contains the JS functions for index.html
/* global Phaser */

class MenuScene extends Phaser.Scene {

    constructor() {
        super({ key: "menuScene" })
    }

    init(data) {
      this.cameras.main.setBackgroundColor("ffffff")
    }
    
    preload() {
        console.log("Menu Scene")
    }

    create(data) {
    }

    update(time, delta) {
    }
}

export default MenuScene
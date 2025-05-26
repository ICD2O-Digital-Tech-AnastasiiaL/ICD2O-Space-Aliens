// Copyright (c) 2025 Anastasiia Lebedenko All rights reserved
//
// Created by: Anastasiia Lebedenko
// Created on: May 2025
// This file contains the JS functions for index.html
/* global Phaser */

class TittleScene extends Phaser.Scene {

    constructor() {
        super({ key: "titleScene"})
    }

    init(data) {
      this.cameras.main.setBackgroundColor("C70039")
    }
    
    preload() {
        console.log("Title Scene")
    }

    create(data) {
    }

    update(time, delta) {
    }
}

export default TitleScene
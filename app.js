"use strict";

const Homey = require("homey");

class SonoffZigbeeApp extends Homey.App {
  onInit() {
    this.log("Sonoff Zigbee App initiating...");
  }
}

module.exports = SonoffZigbeeApp;

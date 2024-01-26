'use strict';

const { ZigBeeDevice } = require('homey-zigbeedriver');
const { CLUSTER } = require('zigbee-clusters');

class SensorSNZB06P extends ZigBeeDevice {

  // This method is triggered when the node has been initialized
  async onNodeInit({ zclNode }) {
    //this.enableDebug(); // only for debugging purposes
    //this.printNode(); // only for debugging purposes

    // Register alarm_motion capability
    this.registerCapability('alarm_motion', CLUSTER.OCCUPANCY_SENSING);

    //NOTE: the previous method 'registerCapability()' initiates a flow that ,eventually, requires the funtion 'reportParser' to process the report received by the sensor indicating a occupancy state change.
    //      This funtion 'reportParser' had to be customized in order to properly read the bitmap representing the "occupancy" atribute in the cluster.
    //      The modified file is found here:
    //      '\node_modules\homey-zigbeedriver\lib\system\capabilities\alarm_motion\occupancySensing.js'
 
  }

  onEndDeviceAnnounce() {
    this.log('Device SONOFF occupancy sensor (SNZB-06P) came online!');
  }

}

module.exports = SensorSNZB06P;

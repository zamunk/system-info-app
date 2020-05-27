const si = require('systeminformation'); //for computer system information
const db = require('../persistence/influxClient') //for data persistence

let systemData = {};
let pollingRate = 5000;
let pollingInterval = null;
let pollingTicks = 0;
let staticDataTicks = 0;

//Read dynamic system information from this computer
function startPolling () {
    valueObject = {
        cpuCurrentspeed: 'avg, cores',
        cpuTemperature: 'main, cores',
        battery: 'cyclecount, currentcapacity, voltage, percent, timeremaining, acconnected'
    }
    //Get the data
    pollingInterval = setInterval(() => {
        si.get(valueObject).then(data => {
            //Tick on successful write
            if(pollingTicks > 9999) {
                pollingTicks = 1
            } else {
                pollingTicks += 1
            }
            const cpuSpeedData = [
                {avg: data.cpuCurrentspeed.avg},
                {core1: data.cpuCurrentspeed.cores[0]},
                {core2: data.cpuCurrentspeed.cores[1]},
                {core3: data.cpuCurrentspeed.cores[2]},
                {core4: data.cpuCurrentspeed.cores[3]}]
            const cpuTemperature = [
                {main: data.cpuTemperature.main}]
            const battery = [
                {cyclecount: data.battery.cyclecount},
                {currentcapacity: data.battery.currentcapacity},
                {voltage: data.battery.voltage},
                {percent: data.battery.percent},
                {timeremaining: data.battery.timeremaining},
                {acconnected: data.battery.acconnected}]
            systemData.d = data
            //if static data has been updated then write to db (so that we have the hostname)
            if (staticDataTicks > 0) {
                db.writeToInflux('cpuCurrentspeed',systemData.s.osInfo.hostname,cpuSpeedData)
                db.writeToInflux('cpuTemperature',systemData.s.osInfo.hostname, cpuTemperature)
                db.writeToInflux('battery',systemData.s.osInfo.hostname,battery)
            }
        }).catch(e => {console.log(`error getting dynamic data: $${e}`)});
    },pollingRate);
}

//Read static systm information from this computer
function getStaticSystemInformation () {
    const valueObject = {
        system: '*',
        bios: '*',
        baseboard: '*',
        chassis: '*',
        cpu: '*',
        cpuFlags: '*',
        cpuCache: '*',
        memLayout: '*',
        graphics: '*',
        osInfo: '*'
    }
    si.get(valueObject).then(data => {
        systemData.s = data
        if(staticDataTicks > 9999) {
            staticDataTicks = 1
        } else {
            staticDataTicks += 1
        }
    }).catch(e => {
        systemData.s = e
        return 0
    })
}

module.exports = {
    systemData: systemData,
    getStaticSystemInformation,
    startPolling
};

const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const addBatteries = (total, currnet) => total + currnet

let totalBatteries = batteryBatches.reduce(addBatteries, 0);

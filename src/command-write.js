const Blynk = require('blynk-library');

const main = (options) => {
  const {
    token: piToken,
    pin: testVPIN,
    address,
    port,
    status,
  } = options;
  const blynk = new Blynk.Blynk(piToken, options = {
    connector : new Blynk.TcpClient( options = { addr: address, port: port })
  });
  blynk.on('connect', () => {
    console.log('Welcome Test Node');
    const bridge = new blynk.WidgetBridge(99);
    bridge.setAuthToken(piToken);
    if (status === 'on') {
      bridge.virtualWrite(testVPIN, 1);
    } else {
      bridge.virtualWrite(testVPIN, 0);
    }
    console.log(`switchPin switch ${status}`);
    blynk.emit('end');
    blynk.disconnect(false);
  });
};

const exportFunctions = {
  main,
};

module.exports = exportFunctions;
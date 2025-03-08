const Blynk = require('blynk-library');
const Lodash = require('lodash');
const os = require("os");
const Fs = require('fs');
const Path = require('path');

const {
  read,
} = require('./yaml');

const DEFAULT_CONFIGFILE = 'blynk-sonospi-config.yaml';

const main = (options) => {
  const hostName = os.hostname();
  const userHomeDir = os.homedir();

  const configPath = Path.join(userHomeDir, DEFAULT_CONFIGFILE);
  console.log(configPath);

  if (!Fs.existsSync(configPath)) {
    console.error(`The ${DEFAULT_CONFIGFILE} file doesn't exist in ${userHomeDir}`);
    return;
  }

  const Config = read(configPath);
  console.log(Config);

  const {
    controller,
    modules,
  } = Config;

  const {
    machine,
    board,
    address,
    port,
    status,
  } = options;

  const module = Lodash.find(modules, { name: machine });
  if (module) {
    let token = null;
    if (board === 'pi') {
      token = module['pi-token'];
    } else if (board === 'nodemcu') {
      token = module['nodemcu-token'];
    }

    if (token) {
      const blynk = new Blynk.Blynk(controller.token, options = {
        connector : new Blynk.TcpClient( options = { addr: address, port: port })
      });

      blynk.on('connect', () => {
        console.log('Welcome Test Node');
        const bridge = new blynk.WidgetBridge(99);
        bridge.setAuthToken(piToken);
        // if (status === 'on') {
        //   bridge.virtualWrite(testVPIN, 1);
        // } else {
        //   bridge.virtualWrite(testVPIN, 0);
        // }
        // console.log(`switchPin switch ${status}`);
        blynk.emit('end');
        blynk.disconnect(false);
      });
    }
  }
};

const exportFunctions = {
  main,
};

module.exports = exportFunctions;
const { main } = require('../command-write');

const command = 'write <status>';
const desc = 'Usage: write [-t] [-n] [-s] [-p] <status>';
const builder = (yargs) => {
  return yargs
  .positional('status', {
    describe: 'on/off',
    type: 'string',
    demand: true,
    choices: [
      'on',
      'off'
    ]
  })
  .option('t', {
    alias: 'token',
    describe: 'device token',
    type: 'string',
    default: 'BO9Ej28AzpoEsaCs0WXiS3mqSO2KE8mZ', // sonos.local -> blynk-sonospi
    demandOption: true,
  })
  .option('n', {
    alias: 'pin',
    describe: 'virtual pin number',
    type: 'number',
    default: 1, // global-switch-button-pin
    demandOption: true,
  })
  .option('s', {
    alias: 'address',
    describe: 'blynk server address',
    type: 'string',
    default: 'sonos.local',
    demandOption: false,
  })
  .option('p', {
    alias: 'port',
    describe: 'blynk server port',
    type: 'number',
    default: 8442,
    demandOption: false,
  })
};
const handler = (options) => main(options);

const exportFunctions = {
  command,
  desc,
  builder,
  handler,
};

module.exports = exportFunctions;
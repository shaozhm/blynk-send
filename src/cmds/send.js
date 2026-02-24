const { main } = require('../command-send');

const command = 'send [-s] [-p] <machine> <status>';
const desc = 'Usage: send [-s] [-p] <machine> <status>';
const builder = (yargs) => {
  return yargs
  .positional('machine', {
    describe: 'machine name',
    type: 'string',
    demand: true,
    choices: [
      'f1',
      't1',
      's1l',
      's1r',
      'sub'
    ]
  })
  .positional('status', {
    describe: 'on/off',
    type: 'string',
    demand: true,
    choices: [
      'on',
      'off'
    ]
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
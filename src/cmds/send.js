const { main } = require('../command-send');

const command = 'send <machine> <board> <function> <status>';
const desc = 'Usage: send <machine> <board> <function> <status>';
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
  .positional('board', {
    describe: 'pi/nodemcu',
    type: 'string',
    demand: true,
    choices: [
      'pi',
      'nodemcu'
    ]
  })
  .positional('function', {
    describe: 'function name',
    type: 'string',
    demand: true,
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
};
const handler = (options) => main(options);

const exportFunctions = {
  command,
  desc,
  builder,
  handler,
};

module.exports = exportFunctions;
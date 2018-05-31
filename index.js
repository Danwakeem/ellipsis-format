const lib = require('./lib/lib');

module.exports = (params) => {
  
  try {
    let min = params.min && typeof params.min === 'number' ? params.min : 10;
    if (!(typeof params.min === 'number')) throw { message: 'Invalid min type', app: true };
    min = lib.calculateLongestSet(params.input, min);
    return lib.createOutput(params.input, min); 
  } catch (e) {
    if ('app' in e) return { error: e.message };
    return { error: 'INVALID_INPUT' }
  }
};

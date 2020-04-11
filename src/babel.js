async function start() {
  return await Promise.resolve('async is working');
}

const unused = 1;

start().then(console.log);

class Util {
  static id = Date.now();
}

console.log('Util id:', Util.id);

import('lodash').then((_) => {
  console.log('lodash', _.random(0, 42, true));
});

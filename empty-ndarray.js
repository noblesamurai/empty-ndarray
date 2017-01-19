var ndarray = require('ndarray');

module.exports = empty;
function empty(size) {
  return ndarray(
    Buffer.alloc(size.width*size.height*4),
    [size.width, size.height, 4],
    [4, 4*size.width, 1],
    0);
}

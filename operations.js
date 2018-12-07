const ops = (arr, cb) => {
  return arr.reduce(cb);
};

validOps = {
  add: (n1, n2) => Number(n1) + Number(n2),
  sub: (n1, n2) => n1 - n2,
  mul: (n1, n2) => n1 * n2,
  div: (n1, n2) => n1 / n2,
};

const stringify = (arr, op) => {
  if (op === 'add') {
    return arr.join(' + ');
  } else if (op === 'sub') {
    return arr.join(' - ');
  } else if (op === 'mul') {
    return arr.join(' * ');
  } else if (op === 'div') {
    return arr.join(' / ');
  }
};

module.exports = {
  ops,
  validOps,
  stringify,
};

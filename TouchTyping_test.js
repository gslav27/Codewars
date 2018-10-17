function touchType(str) {
  return str
    .replace(/[qwertasdfgzxcvb12345]/g, 'L')
    .replace(/[yuiophjklnm67890]/g, 'R')
    .replace(/([RL ])?\s/g, (m, first) => (first === 'R' ? 'RL' : (first === 'L' ? 'LR' : (first === ' ' ? 'LL' : 'L'))));
}

// console.log(touchType('i love programming'));
touchType('  two spaces');

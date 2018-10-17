function concatenationProcess(init) {
  const findShortestStr = ([...arr], type = 1) => {
    const shortestStrLength = Math.min(...arr.map(str => str.length));
    return (type ? arr : arr.reverse()).find(str => str.length === shortestStrLength);
  };
  while (init.length > 1) {
    const firstStr = findShortestStr(init);
    init.splice(init.indexOf(firstStr), 1);
    const secondStr = findShortestStr(init, 0);
    init.splice(init.indexOf(secondStr), 1);
    init.push(`${firstStr}${secondStr}`);
  }
  return init;
}

// concatenationProcess(['aaa', 'dd', 'bbbbb']);
concatenationProcess(['a', 'abc', 'abcc', 'aaa', 'z', '', 'qw']);

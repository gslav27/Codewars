function sumOfDivided(lst) {
  const p = {};

  const checkForP = (num) => {
  	let i = 2,
      j = 0;
  	for (null; i * i <= num && j !== 1; i++) {
  		if (num % i === 0) j = 1;
  	}
  	return j !== 1;
  };

  const findAllP = (mainNum) => {
  	const checkedNums = [];
  	
    const findP = (num) => {
	  	if (checkedNums.includes(num)) return;
	  	
  			checkedNums.push(num);
  			if (checkForP(num)) {
  				p[num] ? p[num].push(mainNum) : p[num] = [mainNum];
  				return;
  			}
	  	
	  	for (let i = 2; i <= num; i++) {
	  		if (Math.floor(num / i) === 1) return;
	  		if (!(num % i)) findP(i);
	  	}
	  };
	  
	  findP(Math.abs(mainNum));
  };
	
  lst.forEach((num) => { if (Math.abs(num) !== 1) findAllP(num); });
  return Object.keys(p).map(pNum => [+pNum, p[pNum].reduce((acc, cur) => acc + cur)]);
}

// sumOfDivided([107, 158, 204, 100, 118, 123, 126, 110, 116, 100]);
console.log(sumOfDivided([12, 15]));
// sumOfDivided([12, 15]);
// sumOfDivided([-29804, -4209, -28265, -72769, -31744]);


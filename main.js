// Returns a random DNA base
const returnRandBase = () => {
	const dnaBases = ['A', 'T', 'C', 'G'];
	return dnaBases[Math.floor(Math.random() * 4)];
};
console.log('returnRandBase', returnRandBase());

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
	const newStrand = [];
	for (let i = 0; i < 15; i++) {
		newStrand.push(returnRandBase());
	}
	return newStrand;
};

const pAequorFactor = (num, arr) => {
	// console.log('num', num);
	console.log('arr', arr);

	return {
		speceminNum: num,
		dna: arr,
		mutate() {
			randomIndex = Math.floor(Math.random() * arr.length);
			randomBase = returnRandBase();
			currentValue = arr[i];
			newDna = [];
			for (let i = 0; i < arr.length; i++) {
				if (i === randomIndex && arr[i] !== randomBase) {
					currentValue = randomBase;
				} else
					for (let i = 0; i < arr.length; i++) {
						if (i === randomIndex && i !== randomBase) {
							currentValue = randomBase;
							newDna = arr.splice(i, 1, currentValue);
						}
						console.log('newDna', newDna);
					}
			}

			return newDna;
		},
	};
};
// console.log('this.speceminNum', this.speceminNum);

// console.log('mockUpStrand', mockUpStrand());

console.log(pAequorFactor(1, mockUpStrand()));

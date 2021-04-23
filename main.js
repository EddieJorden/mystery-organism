// Returns a random DNA base
const returnRandBase = () => {
	const dnaBases = ['A', 'T', 'C', 'G'];
	return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
	const newStrand = [];
	for (let i = 0; i < 15; i++) {
		newStrand.push(returnRandBase());
	}
	console.log('newStrand', newStrand);
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
			console.log('randomIndex', randomIndex);
			randomValue = randomIndex[i];
			currentValue = arr[i];

			for (let i = 0; i < arr.length; i++) {
				if (currentValue === randomIndex) {
					currentItem = arr.splice(arr[i], 1, randomValue);
				}
			}
		},
	};
};

// console.log('this.speceminNum', this.speceminNum);

// console.log('mockUpStrand', mockUpStrand());

console.log(pAequorFactor(1, mockUpStrand()));
console.log('pAequorFactor.dna', pAequorFactor.dna);

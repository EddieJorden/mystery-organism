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
	return newStrand;
};

const newStrand = mockUpStrand();
console.log('newStrand', newStrand);

const pAequorFactor = (num, arr) => {
	return {
		speceminNum: num,
		dna: arr,
		mutate(arrToModify) {
			const mutatedArray = arrToModify.slice();
			let randomIndex = Math.floor(Math.random() * mutatedArray.length - 1);
			let randomBase = returnRandBase();

			console.log('randomBase', randomBase);
			for (let i = 0; i < mutatedArray.length; i++) {
				let currentBase = mutatedArray[i];

				if (i === randomIndex && currentBase !== randomBase) {
					mutatedArray.splice(i, 1, randomBase);
				} else {
					let newRandomIndex = Math.floor(
						Math.random() * mutatedArray.length - 1
					);
					for (let j = currentBase; j < mutatedArray.length; j++) {
						let currentBase = passedInArr[j];
						if (j === newRandomIndex && currentBase !== randomBase) {
							passedInArr.splice(j, 1, randomBase);
						}
					}
				}
			}
			return mutatedArray;
		},
		compareDna(pAequor) {
			const ex1 = newStrand;
			console.log('ex1', ex1);
			console.log('ex1[0]', ex1[0]);
			const ex2 = pAequor;
			console.log('ex2', ex2);
			let identicalBase = 0;
			console.log('identicalBase', identicalBase);
			const acc = null;

			for (let i = 0; i < ex2.length - 1; i++) {
				if (ex2[i] === ex1[i]) {
					let sameBase = identicalBase + 1;
					// acc.push(sameBase);
					// console.log('sameBase', sameBase);
				}
			}
			let commonDna = ((identicalBase / (ex1.length - 1)) * 100).toFixed(1);

			return commonDna;
		},
	};
};

console.log(
	'pAequorFactor.mutate()',
	pAequorFactor(1, newStrand).mutate(newStrand)
);

console.log(
	pAequorFactor().compareDna(pAequorFactor(1, newStrand).mutate(newStrand))
);

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

const pAequorFactor = (num, arr) => {
	return {
		speceminNum: num,
		dna: arr,
		mutate(arrToModify) {
			const passedInArr = arrToModify.slice();
			let randomIndex = Math.floor(Math.random() * passedInArr.length - 1);
			let newSplicedArr = [];
			let randomBase = returnRandBase();
			let returnedModifiedArray = [];

			console.log('randomBase', randomBase);
			for (let i = 0; i < passedInArr.length; i++) {
				let currentBase = passedInArr[i];

				if (i === randomIndex && currentBase !== randomBase) {
					passedInArr.splice(i, 1, randomBase);
				} else {
					let newRandomIndex = Math.floor(
						Math.random() * passedInArr.length - 1
					);
					for (let j = currentBase; j < passedInArr.length; j++) {
						let currentBase = passedInArr[j];
						if (j === newRandomIndex && currentBase !== randomBase) {
							passedInArr.splice(j, 1, randomBase);
						}
					}
					// console.log(newSplicedArr);
				}
			}
			return passedInArr;

			// console.log('newSplicedArr', newSplicedArr);
		},
	};
};
const newStrand = mockUpStrand();
console.log(newStrand);

console.log(pAequorFactor(1, newStrand).mutate(newStrand));
// console.log(returnedModifiedArray);

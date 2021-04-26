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
	console.log('arr', arr);
	let passedInArr = arr;

	return {
		speceminNum: num,
		dna: arr,
		mutate() {
			let randomIndex = Math.floor(Math.random() * passedInArr.length);
			let newSplicedArr = [];
			for (let i = 0; i < passedInArr.length; i++) {
				let currentBase = passedInArr[i];

				if (
					passedInArr[i] === randomIndex &&
					currentBase[i] !== returnRandBase
				) {
					returnedModifiedArray = passedInArr.splice(1, 1, returnRandBase);
					newSplicedArr.push(returnedModifiedArray);
				} else {
					for (let j = currentBase; j < passedInArr.length; j++) {
						if (
							passedInArr[i] === randomIndex &&
							currentBase[i] !== returnRandBase
						) {
							newSplicedArr.push(passedInArr.splice(1, 1, returnRandBase));
						}
					}
					console.log(newSplicedArr);
				}
			}
			console.log('newSplicedArr', newSplicedArr);
		},
	};
};

console.log(pAequorFactor(1, mockUpStrand()).mutate());
console.log('pAequorFactor.mutate', pAequorFactor.mutate);

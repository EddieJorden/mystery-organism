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
	console.log('arr', arr);
	let passedInArr = arr;

	return {
		speceminNum: num,
		dna: arr,
		mutate() {
			let randomIndex = Math.floor(Math.random() * passedInArr.length);
			let newSplicedArr = [];
			let randomBase = returnRandBase();
			let returnedModifiedArray = [];

			console.log('randomBase', randomBase);
			for (let i = 0; i < passedInArr.length; i++) {
				let currentBase = passedInArr[i];

				if (passedInArr[i] === randomIndex && currentBase[i] !== randomBase) {
					returnedModifiedArray = passedInArr.splice(
						passedInArr[i],
						1,
						randomBase
					);
				} else {
					let newRandomIndex = Math.floor(Math.random() * passedInArr.length);
					for (let j = currentBase; j < passedInArr.length; j++) {
						let currentBase = passedInArr[j];
						if (
							passedInArr[j] === newRandomIndex &&
							currentBase !== randomBase
						) {
							returnedModifiedArray = passedInArr.splice(
								passedInArr[j],
								1,
								randomBase
							);
						}
					}
					// console.log(newSplicedArr);
				}
			}
			// console.log('newSplicedArr', newSplicedArr);
			console.log(returnedModifiedArray);
		},
	};
};

console.log(pAequorFactor(1, mockUpStrand()).mutate());

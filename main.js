// Returns a random DNA base
const returnRandBase = () => {
	const dnaBases = ['A', 'T', 'C', 'G'];
	return dnaBases[Math.floor(Math.random() * 4)];
};

const randomBase = returnRandBase();
// console.log('randomBase', randomBase);

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

		mutate(object) {
			let mutatedObject = {
				speceminNum: num,
				dna: object.dna.slice(),
			};
			// mutedObject.dna = object.dna.slice();

			// let mutatedDna = object.dna.slice();
			let randomIndex = Math.floor(Math.random() * object.dna.length - 1);
			let randomBase = returnRandBase();

			for (let i = 0; i < object.dna.length; i++) {
				let currentBase = object.dna[i];

				if (i === randomIndex && currentBase !== randomBase) {
					object.dna.splice(i, 1, randomBase);
				} else {
					let newRandomIndex = Math.floor(
						Math.random() * object.dna.length - 1
					);
					for (let j = currentBase; j < object.dna.length; j++) {
						let currentBase = passedInArr[j];
						if (j === newRandomIndex && currentBase !== randomBase) {
							passedInArr.splice(j, 1, randomBase);
						}
					}
				}
			}
			return mutatedObject;
		},

		// .mutate() seems to be working as expected :) ==ej==

		compareDna(pAequor) {
			const ex1 = this.dna;
			console.log('ex1', ex1);
			// console.log('ex1[0]', ex1[0]);
			const ex2 = mutatedObject.dna;
			// console.log('ex2', ex2);
			let acc = 0;

			for (let i = 0; i < ex2.length - 1; i++) {
				if (ex2[i] === ex1[i]) {
					acc += 1;
					// acc.push(sameBase);
					// console.log('sameBase', sameBase);
				}
			}

			let commonDna = ((acc / (ex1.length - 1)) * 100).toFixed(0);

			const comparedDnaReturn =
				'the total percentage of equal dna bases is ' + commonDna + ' percent';

			return comparedDnaReturn;
		},

		willLikelySurvive(object) {
			let acc = 0;
			for (let i = 0; i < object.dna.length - 1; i++) {
				let currentBase = object.dna[i];
				let cBase = 'C';
				let gBase = 'G';
				console.log(currentBase);
				if (currentBase == cBase || currentBase == gBase) {
					acc = acc + 1;
					console.log(acc);
				}
			}
			console.log(object.dna.length);
			console.log(acc);

			if ((acc / object.dna.length) * 100 >= 60) {
				return true;
			} else return false;
		},
	};
};

const pAequorObject = pAequorFactor(1, newStrand);
// const newPAequorObject = pAequorFactor(2, newStrand);

const mutatedObject = pAequorObject.mutate(pAequorObject);

const compareDna = pAequorObject.compareDna(mutatedObject);

const likelySurvivor = pAequorObject.willLikelySurvive(mutatedObject);

// not working,  willLikelySurvive method is not available (out of scope)
const generateSurvivingPaequor = (obj) => {
	let pAequorArray = [];

	for (let i = 0; pAequorArray.length <= 30; i++) {
		let randomDna = newStrand;
		let randomPAequorObject = {
			speceminNum: i,
			dna: randomDna,
		};
		if (obj.willLikelySurvive(randomPAequorObject) === true) {
			pAequorArray.push(randomPAequorObject);
		}
	}
	return pAequorArray;
};

console.log('pAequorObject', pAequorObject);
console.log('mutatedObject', mutatedObject);
console.log('compareDna', compareDna);
console.log('likelySurvivor', likelySurvivor);
console.log(generateSurvivingPaequor(pAequorObject));
// console.log('generatePaequor()', generatePaequor(pAequorObject));

import input from '../util/parseInput';

const data = input.slice().map(Number);
data[1] = 12;
data[2] = 2;

export function solution(data: number[]) {
	let i = 0;
	const pos = (): number => data[i++];
	const findInt = (): number => data[pos()];

	while (data[i] !== 99) {
		const output = pos() === 1 ? findInt() + findInt() : findInt() * findInt();
		data[pos()] = output;
	}

	return data[0];
}

export default solution(data);

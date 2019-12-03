import input from '../util/parseInput';
import { solution } from './part1';

let answer;

for (let noun = 0; noun < 100; noun++) {
	for (let verb = 0; verb < 100; verb++) {
		const inputCopy = input.slice().map(Number);
		inputCopy[1] = noun;
		inputCopy[2] = verb;
		if (solution(inputCopy) === 19690720) {
			answer = (100 * noun) + verb;
			break;
		}
	}
}

export default answer;

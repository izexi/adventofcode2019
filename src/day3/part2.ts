import input from '../util/getInput';

const firstWireCoords: Map<string, number> = new Map();
let lowestSteps = Infinity;

const parsePath = (data: string[], isSecondWire: number) => {
	let currX = 0, currY = 0, steps = 0;
	data.forEach(instruction => {
		const [direction] = instruction;
		let length = Number(instruction.slice(1));
		while (length--) {
			steps++;
			if (direction === 'L') --currX;
			else if (direction === 'U') ++currY;
			else if (direction === 'R') ++currX;
			else --currY;
			const coord = `${currX}, ${currY}`;
			if (!isSecondWire) {
				firstWireCoords.set(coord, steps);
			} else if (firstWireCoords.has(coord)) {
				lowestSteps = Math.min(firstWireCoords.get(coord)! + steps, lowestSteps);
			}
		}
	});
};

input.split('\n').map(rope => rope.split(',')).forEach(parsePath);

export default lowestSteps;

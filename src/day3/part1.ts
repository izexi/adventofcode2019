import input from '../util/getInput';

const firstWireCoords = new Set();
let closestIntersection = Infinity;

const parsePath = (data: string[], isSecondWire: number) => {
	let currX = 0, currY = 0;
	data.forEach(instruction => {
		const [direction] = instruction;
		let length = Number(instruction.slice(1));
		while (length--) {
			if (direction === 'L') --currX;
			else if (direction === 'U') ++currY;
			else if (direction === 'R') ++currX;
			else --currY;
			const coord = `${currX}, ${currY}`;
			if (!isSecondWire) {
				firstWireCoords.add(coord);
			} else if (firstWireCoords.has(coord)) {
				closestIntersection = Math.min(Math.abs(currX) + Math.abs(currY), closestIntersection);
			}
		}
	});
};

input.split('\n').map(rope => rope.split(',')).forEach(parsePath);

export default closestIntersection;

import input from '../util/parseInput';

const calculateFuel = (mass: number): number => {
	const calculated = Math.floor(Number(mass) / 3) - 2;
	return calculated > 0 ? calculateFuel(calculated) + calculated : 0;
};

export default input.reduce((total, curr) => total + calculateFuel(curr), 0);

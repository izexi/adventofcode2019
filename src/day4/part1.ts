import input from '../util/getInput';

const [from, to] = input.split('-').map(Number);

export function isValid(pw: number) {
	return /(\d)\1/.test(pw.toString()) && /^0*1*2*3*4*5*6*7*8*9*$/.test(pw.toString());
}

export default Array.from({ length: to - (from - 1) }, (_, i) => i + from).filter(isValid).length;

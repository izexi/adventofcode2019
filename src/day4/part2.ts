import input from '../util/getInput';
import { isValid } from './part1';

const [from, to] = input.split('-').map(Number);

export default Array.from({ length: to - (from - 1) }, (_, i) => i + from)
	.filter(pw => isValid(pw) && pw.toString().match(/(\d)\1*/g)?.some(m => m.length === 2)).length;

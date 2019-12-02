import { readFileSync } from 'fs';
export default readFileSync(`./src/day${process.env.npm_config_day}/input.txt`)
	.toString()
	.split(/[\n,]/)
	.map(Number);

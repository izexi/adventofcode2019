import { mkdirSync, existsSync, writeFileSync } from 'fs';

export default function() {
	const dir = `./src/day${process.env.npm_config_day}`;
	if (!existsSync(dir)) {
		mkdirSync(dir);
		writeFileSync(`${dir}/input.txt`, '');
		writeFileSync(`${dir}/part1.ts`, 'import input from \'../util/parseInput\';');
		return true;
	}
	return false;
}

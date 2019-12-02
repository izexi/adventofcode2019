import setup from './util/setupDay';
import { existsSync } from 'fs';

const {
	npm_config_day: day,
	npm_config_part: part
} = process.env;
// eslint-disable-next-line
const outputSolution = (part = 1) => console.log(`Day ${day} | Part ${part} - Solution: ${require(`./day${day}/part${part}.js`).default}`);


(function init() {
	if (setup()) return;
	if (!part) outputSolution();
	if (existsSync(`./src/day${day}/part2.ts`)) outputSolution(2);
})();

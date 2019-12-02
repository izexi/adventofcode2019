import setup from './util/setupDay';

const {
	npm_config_day: day,
	npm_config_part: part = 1
} = process.env;

if (!setup()) {
	// eslint-disable-next-line
	console.log(`Day ${day} | Part ${part} - Solution: ${require(`./day${day}/part${part}.js`).default}`);
}
import input from '../util/getInput';

const orbits = input.split('\n').map(data => data.split(')'))
	.reduce((nodes, [orbit, object]) => nodes.set(object, orbit), new Map());
const countOrbits = (object: string): number => object ? countOrbits(orbits.get(object)) + 1 : 0;

export { orbits };
export default [...orbits.keys()].reduce((total: number, object) => total + countOrbits(orbits.get(object)), 0);

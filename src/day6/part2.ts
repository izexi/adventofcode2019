import { orbits } from './part1';

const connectedOrbits = (object: string, connected: Set<string> = new Set()): Set<string> =>
	object ? connectedOrbits(orbits.get(object), connected.add(object)) : connected;
const pathDiff = (firstSet: Set<string>, secondSet: Set<string>) => [...firstSet].filter(object => !secondSet.has(object)).length;
const youPath = connectedOrbits('YOU'), sanPath = connectedOrbits('SAN');

export default pathDiff(youPath, sanPath) + pathDiff(sanPath, youPath) - 2;

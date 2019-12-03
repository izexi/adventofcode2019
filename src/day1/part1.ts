import input from '../util/parseInput';

export default input.map(Number).reduce((total, curr) => total + Math.floor(curr / 3) - 2, 0);

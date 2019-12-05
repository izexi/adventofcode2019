import input from '../util/parseInput';

export enum OpCode {
	Add = 1,
	Multiply,
	Input,
	Output
}

const instructions = input.map(Number);
let output;
let pointer = 0;
const getInt = () => instructions[pointer++];

while (instructions[pointer] !== 99) {
	let result = 0, i = 0;
	const instruction = getInt();
	const opCode: OpCode = Number(instruction.toString().slice(-2));
	const parameters = [...instruction.toString().slice(0, -2)].reverse().map(Number);
	const getOperand = () => parameters[i++] ? getInt() : instructions[getInt()];
	switch (opCode) {
		case OpCode.Add:
			result = getOperand() + getOperand();
			break;
		case OpCode.Multiply:
			result = getOperand() * getOperand();
			break;
		case OpCode.Input:
			result = 1;
			break;
		case OpCode.Output:
			output = getOperand();
			continue;
	}
	instructions[getInt()] = result;
}

export default output;

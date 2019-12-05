import input from '../util/parseInput';
import { OpCode } from './part1';

enum MissingOpCode {
	JumpIfTrue = 5,
	JumpIfFalse,
	IsLessThan,
	IsEquals
}

const instructions = input.map(Number);
let output, pointer = 0;
const getInt = () => instructions[pointer++];

while (instructions[pointer] !== 99) {
	let result = 0, i = 0;
	const instruction = getInt();
	const opCode: OpCode | MissingOpCode = Number(instruction.toString().slice(-2));
	const parameters = [...instruction.toString().slice(0, -2)].reverse().map(Number);
	const getOperand = () => i === 2 || parameters[i++] ? getInt() : instructions[getInt()];
	switch (opCode) {
		case OpCode.Add:
			result = getOperand() + getOperand();
			break;
		case OpCode.Multiply:
			result = getOperand() * getOperand();
			break;
		case OpCode.Input:
			result = 5;
			break;
		case OpCode.Output:
			output = getOperand();
			continue;
		case MissingOpCode.JumpIfTrue:
			if (getOperand()) pointer = getOperand();
			else pointer++;
			continue;
		case MissingOpCode.JumpIfFalse:
			if (getOperand()) pointer++;
			else pointer = getOperand();
			continue;
		case MissingOpCode.IsLessThan:
			const isLessThan = getOperand() < getOperand();
			instructions[getOperand()] = Number(isLessThan);
			continue;
		case MissingOpCode.IsEquals:
			const isEquals = getOperand() === getOperand();
			instructions[getOperand()] = Number(isEquals);
			continue;
	}
	instructions[getInt()] = result;
}

export default output;

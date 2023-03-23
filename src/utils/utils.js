import { ClassificationCatEnum } from "../types/types";

const objectIsNull = (object) => {
	if (object === null || object === undefined || isNaN(object)) {
		return true;
	} else {
		return false;
	}
};

/**
 * Funcion que retorna un numero random
 * en base a un limit de parametro
 * @param {number} limit
 * @returns
 */
const getRandomNumber = (limit = 100000) => {
	return Math.round(Math.random() * limit);
};

const getRandomEnumValue = (enumeration) => {
	const values = Object.keys(enumeration);
	const enumKey = values[Math.floor(Math.random() * values.length)];
	return enumeration[enumKey];
};

const getRandomClassification = () => {
	return getRandomEnumValue(ClassificationCatEnum) + "".toString();
};

export { objectIsNull, getRandomNumber, getRandomEnumValue, getRandomClassification };

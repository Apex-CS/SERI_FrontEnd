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

function getRandomDate() {
    const maxDate = Date.now();
    const timestamp = Math.floor(Math.random() * maxDate);
    return new Date(timestamp);
}

const getStringWithElipsis = (searchValue, limitValue) => {
	if (searchValue && searchValue?.length > limitValue) {
		return searchValue?.substring(0, limitValue) + '...';
	} 
	return searchValue;
}

export { objectIsNull, getRandomNumber, getRandomEnumValue, getRandomClassification, getRandomDate, getStringWithElipsis };

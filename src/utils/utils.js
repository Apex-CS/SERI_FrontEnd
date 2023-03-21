const objectIsNull =(object) => {
    if (object === null || object === undefined || isNaN(object)) {
        return true
    }
    else {
        return false
    }
}

export {
    objectIsNull,
};
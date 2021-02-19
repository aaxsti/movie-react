export const required = value => {
    if (value) return undefined;
    return "Field is required";
}

export const maxLengthCreator = (maxLength) => (value) => {
    if (value && value.length > maxLength) return `Max length is ${maxLength} symbols`;
    return undefined;
}

export const isCorrectValueType = (valueType) => (value) => {
    if (value && !(typeof(value) === valueType)) return `${value} should be a ${valueType}`;
    return undefined;
}
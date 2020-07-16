const validateLength = ({ min = 1, max = null, value }) => {
	return max !== null ? value.length <= max && value.length >= min : value.length >= min;
};

export default validateLength;

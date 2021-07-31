export const tempConverter = (temp: number, change: boolean) => {
	if (change === true) {
		return Math.floor(((temp - 32) * 5) / 9);
	}

	return Math.floor((temp * 9) / 5 + 32);
};

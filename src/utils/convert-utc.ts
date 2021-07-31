export const convertUTCDate = (date: string) => {
	const transformedDate = new Date(date).toLocaleDateString("en-US", {
		day: "numeric",
		month: "long",
		weekday: "long",
	});
	return transformedDate;
};
export const convertUTCTime = (time: string) => {
	const transformedTime = new Date(time).toLocaleTimeString("en-US", {
		hour: "numeric",
		minute: "numeric",
	});
	return transformedTime;
};

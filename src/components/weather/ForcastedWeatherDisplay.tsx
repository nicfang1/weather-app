import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const ForcastedWeatherDisplay: React.FC = () => {
	const forcastedWeatherData = useSelector(
		(state: RootState) => state.forecastedWeather
	);
	console.log(forcastedWeatherData);

	// if (forcastedWeatherData[0].description === undefined) {
	// 	return <div></div>;
	// }

	return (
		<div>
			<h3>Forcasted Weather</h3>
			{forcastedWeatherData.map((forcastedDate) => (
				<div key={forcastedDate.id}>
					<h3>{forcastedDate.date}</h3>
					<h4>{forcastedDate.time}</h4>
					<img src={forcastedDate.icon} alt={forcastedDate.description} />
					<p>{forcastedDate.temp}</p>
					<p>{forcastedDate.description}</p>
				</div>
			))}
		</div>
	);
};

export default ForcastedWeatherDisplay;

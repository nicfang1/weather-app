export interface CurrentWeatherData {
	weather: { description: string; main: string; id: number; icon: string }[];
	main: {
		temp: number;
		feels_like: number;
		temp_min: number;
		temp_max: number;
		humidity: number;
		pressure: number;
	};
	name: string;
}

export interface DailyForcastedWeather {
	dt: number;
	dt_txt: string;
	main: {
		temp: number;
		feels_like: number;
		temp_min: number;
		temp_max: number;
		humidity: number;
		pressure: number;
	};
	weather: { description: string; main: string; id: number; icon: string }[];
}

export interface ForcastedWeatherData {
	list: DailyForcastedWeather[];
}

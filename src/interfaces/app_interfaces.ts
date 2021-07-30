export interface WeatherData {
    weather: {description: string, main: string, id: number, icon: string}[]; 
    main: {
        temp: number, 
        feels_like: number, 
        temp_min: number, 
        temp_max: number,
        humidity: number, 
        pressure: number, 
    }; 
    name: string
}
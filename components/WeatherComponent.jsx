import { getWeatherData } from "@/lib/weather-info";
import Image from "next/image";
import WeatherCard from "./WeatherCard";

const WeatherComponent = async ({ lat, lon }) => {
    const { main, description } = await getWeatherData(lat, lon);

    return (
        <WeatherCard>
            <h6 className="feature-name">Current Weather</h6>
            <div className="feature-main">
                <Image
                    className="max-w-20"
                    src="/icon_rain.png"
                    width={200}
                    height={200}
                    alt="rain icon"
                />
                <h3 className="feature-title">{main}</h3>
                <span className="feature-name">{description}</span>
            </div>
        </WeatherCard>
    );
};

export default WeatherComponent;
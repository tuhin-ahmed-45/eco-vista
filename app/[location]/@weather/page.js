import WeatherComponent from "@/components/WeatherComponent";
import { getResolvedLatLong } from "@/lib/location-info";
import { notFound } from "next/navigation";

export default async function WeatherPage({ params: { location }, searchParams: { latitude, longitude } }) {
    const resolved = await getResolvedLatLong(location, latitude, longitude)

  if (resolved?.lat && resolved?.lon) {
    return <WeatherComponent lat={resolved.lat} lon={resolved.lon} />
  } else {
    notFound()
  }
}

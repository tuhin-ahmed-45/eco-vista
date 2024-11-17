import AQIComponent from "@/components/AQIComponent";
import { getResolvedLatLong } from "@/lib/location-info";
import { notFound } from "next/navigation";

export default async function AQIPage({ params: { location }, searchParams: { latitude, longitude } }) {
  const resolved = await getResolvedLatLong(location, latitude, longitude)

  if (resolved?.lat && resolved?.lon) {
    return <AQIComponent lat={resolved.lat} lon={resolved.lon} />
  } else {
    return notFound()
  }
}

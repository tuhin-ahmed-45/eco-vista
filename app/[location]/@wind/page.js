import WindComponent from "@/components/WindComponent";
import { getResolvedLatLong } from "@/lib/location-info";
import { notFound } from "next/navigation";

export default async function WindPage({ params: { location }, searchParams: { latitude, longitude } }) {
    const resolved = await getResolvedLatLong(location, latitude, longitude)

  if (resolved?.lat && resolved?.lon) {
    return <WindComponent lat={resolved.lat} lon={resolved.lon} />
  } else {
    return notFound()
  }
}

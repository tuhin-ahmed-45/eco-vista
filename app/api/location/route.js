import { getLocation } from "./location-util";

export async function GET() {
    const locationData = getLocation();

    return Response.json(locationData)
}
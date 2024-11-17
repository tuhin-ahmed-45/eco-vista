export const getLocationData = async (lat, lon) => {
    try {
        const response = await fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}`
        );
        const data = await response.json();
        return data;
    } catch (e) {
        console.error(e.message);
    }
};

export const getLocationLatLong = async () => {
    try {
        const response = await fetch(`http://localhost:3000/api/location`)

        const data = response.json()
        return data
    } catch (error) {
        console.error(error.message);
    }
}

export const getLocationDetails = async (locationName) => {
    try {
        const response = await fetch(`http://localhost:3000/api/location/${locationName}`)

        const data = response.json()
        return data
    } catch (error) {
        console.error(error.message);
    }
}

export const getResolvedLatLong = async (location, lat, lon) => {
    console.log(location, lat, lon);
    if (lat && lon) {
        return { lat, lon };
    }

    const locationLatLon = await getLocationLatLong(location);
    console.log(locationLatLon);

    if (locationLatLon.latitude && locationLatLon.longitude) {
        const lat = locationLatLon.latitude;
        const lon = locationLatLon.longitude;

        return { lat, lon };
    }
};


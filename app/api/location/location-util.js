const data = [
    {
        location: "Dhaka",
        latitude: 23.8103,
        longitude: 90.4125
    },
    {
        location: "Istanbul",
        latitude: 41.0082,
        longitude: 28.9784
    },
    {
        location: "Palestine",
        latitude: 31.9466,
        longitude: 35.3027
    },
    {
        location: "Rome",
        latitude: 41.9028,
        longitude: 12.4964
    },
    {
        location: "Rosario",
        latitude: -32.9442,
        longitude: -60.6505
    }
]

function getLocation() {
    return data;
}

function getLocationByName(location) {
    if (!location) return null;

    const found = data.find(
        (item) => item.location.toLowerCase() === location.toLowerCase()
    );

    return found || {};
}

export { getLocation, getLocationByName };


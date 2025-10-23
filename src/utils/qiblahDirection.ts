function calculateQiblahDirection(latitude: number, longitude: number): number {
    const kaabaLatitude = 21.4225; // Latitude of Kaaba
    const kaabaLongitude = 39.8262; // Longitude of Kaaba

    const deltaLongitude = kaabaLongitude - longitude;
    const x = Math.cos((kaabaLatitude * Math.PI) / 180) * Math.sin((deltaLongitude * Math.PI) / 180);
    const y = Math.cos((latitude * Math.PI) / 180) * Math.sin((kaabaLatitude * Math.PI) / 180) -
              Math.sin((latitude * Math.PI) / 180) * Math.cos((kaabaLatitude * Math.PI) / 180) * Math.cos((deltaLongitude * Math.PI) / 180);

    const qiblahDirection = Math.atan2(x, y) * (180 / Math.PI);
    return (qiblahDirection + 360) % 360; // Normalize to 0-360 degrees
}

export { calculateQiblahDirection };
function getLocation() {
    function success(position) {
        const latitude = position.coords.latitude
        const longitude = position.coords.longitude
        console.log(latitude, longitude)
    }
    function error(error) {
        console.log(error.message)
    };
    return navigator.geolocation.getCurrentPosition(success, error);
}

export default getLocation
//Hook 으로 만들기
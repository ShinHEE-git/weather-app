import { useState, useEffect } from "react"

function useCurrentLocation() {

    const [myLocation, setMyLocation] = useState({})

    function success(position) {
        const { latitude, longitude } = position.coords

        setMyLocation({ latitude, longitude })
    }

    function error(error) {
        alert(`ERROR(${error.code}): ${error.message}`);
    };

    useEffect(() => { navigator.geolocation.getCurrentPosition(success, error) }, [])

    return myLocation
}


export default useCurrentLocation

import { useState, useEffect } from "react"

function useCurrentLocation(callback) {

    const [myLocation, setMyLocation] = useState({})

    function success(position) {
        const { latitude, longitude } = position.coords
        setMyLocation({ latitude, longitude })
        callback(null, { latitude, longitude })
    }

    function error(error) {
        console.log(error)
        callback(error)
    };

    useEffect(() => { navigator.geolocation.getCurrentPosition(success, error) }, [])

    return myLocation
}


export default useCurrentLocation

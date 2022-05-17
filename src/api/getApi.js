import axios from "axios";



function getAxios(url, lat, lon) {
    axios({
        url,
        baseURL: "https://api.openweathermap.org/data/2.5",
        params: {
            lat,
            lon,
            appid: "066ec22e4f51a88fc576747e6e3d72c7"
        }
    }).then((response) => {
        console.log(response)
    }).then((err) => {
        console.log(err)
    })
}

export default function getApi({ latitude, longitude }) {
    getAxios("/weather", latitude, longitude)
    getAxios("/forecast", latitude, longitude)
}

//api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
//api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

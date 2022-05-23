import axios from "axios";




function getAxios(url, lat, lon) {
    return axios({
        url,
        baseURL: "https://api.openweathermap.org/data/2.5",
        params: {
            lat,
            lon,
            appid: "066ec22e4f51a88fc576747e6e3d72c7"
        }
    }).then((response) => {
        return response
    }).then((err) => {
        return err
    })
}

export default async function getApi({ latitude, longitude }, setData) {
    setData(await axios.all([
        getAxios("/weather", latitude, longitude),
        getAxios("/forecast", latitude, longitude)
    ]))

}

//api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
//api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

import { useState } from "react"
import "./weatherNow.css"

function WeatherNow({ data }) {
    const tempSetF = (a) => (Math.round((a * 9 / 5) + 32))
    const tempSetC = (a) => Math.round(a)
    const [tempSign, setTempSign] = useState({ sign: "C", anotherSign: "F", setTemp: tempSetC })
    const toggleSign = (tempSign) => {
        setTempSign((tempSign.sign == "C") ?
            ({ sign: "F", anotherSign: "C", setTemp: tempSetF })
            : ({ sign: "C", anotherSign: "F", setTemp: tempSetC })
        )
    }

    const timestampConverter = (timestamp) => {
        const date = new Date(timestamp * 1000)
        const time = (date.getHours() < 12) ? `오전 ${date.getHours()} : ${date.getMinutes()}`
            : `오후 ${date.getHours() - 12} : ${date.getMinutes()}`
        return time
    }
    tempSign.setTemp()
    return (
        <main>
            <header>
                <h1 className="locationName">{data.data.name}</h1>
                <div className="weather-box">
                    <img className="weather-icon" src={`http://openweathermap.org/img/wn/${data.data.weather[0].icon}@2x.png`} />
                    <div className="temp-box">
                        <h1 className="temp">{tempSign.setTemp(data.data.main.temp)}°</h1>
                        <div className="temp-fnc">
                            <p className="temp-sign">{tempSign.sign}</p>
                            <input className="temp-sign temp-button cursor-hover" type="button" value={tempSign.anotherSign} onClick={() => { toggleSign(tempSign) }} />
                        </div>
                    </div>
                </div>
                <p>{data.data.weather[0].main}</p>
                <p>{data.data.weather[0].description}</p>
                <p>마지막 업데이트: {timestampConverter(data.data.dt)}</p>
            </header>

            <section>
                <h2>자세히</h2>
                <article>
                    <p>최고기온: {tempSign.setTemp(data.data.main.temp_max)}</p>
                    <p>최저기온: {tempSign.setTemp(data.data.main.temp_min)}</p>
                </article>

                <article>
                    <p>일출: {timestampConverter(data.data.sys.sunrise)}</p>
                    <p>일몰: {timestampConverter(data.data.sys.sunset)}</p>
                </article>

                <article>
                    <p>습도: {data.data.main.humidity}</p>
                    <p>풍속: {Math.round(data.data.wind.speed)}m/s</p>
                </article>
            </section>
        </main>
    )
}

export default WeatherNow
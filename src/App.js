import { Link, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';

import useCurrentLocation from "./hook/useCurrentLocation"
import getApi from './api/getApi';

import imageSun from "./images/sun.png"
import { ReactComponent as Sliders } from "./images/icons/sliders.svg"
import { ReactComponent as CloudSun } from "./images/icons/cloud-sun.svg"
import { ReactComponent as Chart } from "./images/icons/chart.svg"

import WeatherNow from './pages/WeatherNow';
import WeatherForcast from './pages/WeatherForcast';
import Setting from './pages/setting';


function App() {
    useCurrentLocation((error, result) => {
        if (result) { getApi(result) }
    })

    const menuList = [
        { icon: <CloudSun />, link: "/", name: "현재 날씨" },
        { icon: <Chart />, link: "/weather-forcast", name: "날씨 예보" },
        { icon: <Sliders />, link: "/setting", name: "setting" }]
    return (
        <div className="App">

            <header>
                <nav className="menu-bar closs">
                    <img src={imageSun} />
                    <ul>
                        {menuList.map((obj, i) => (
                            <li key={i}>
                                <Link to={obj.link} className="menu-listitem">
                                    <i className="icon">{obj.icon}</i>
                                    <p className="menu-list-text">{obj.name}</p>
                                </Link>
                            </li>))}
                    </ul>
                </nav>
            </header>

            <Routes>
                <Route path={menuList[0].link} element={<WeatherNow />} />
                <Route path={menuList[1].link} element={<WeatherForcast />} />
                <Route path={menuList[2].link} element={<Setting />} />
            </Routes>
        </div>
    );
}

export default App;

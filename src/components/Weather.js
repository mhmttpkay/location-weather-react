import React from 'react';
import './style.scss';

function Weather(props) {
    const { weather } = props;

    if (!weather) {
        return <p>Konum erişimine izin vermeniz gerekmektedir...</p>
    }

    return (
        <div className='app'>
            <h1 className='title'>Hava Durumu</h1>
            <p className='city'>~ {weather.name} ~</p>
            <p className='temp'>{weather.main.temp}°C</p>
            <p className='desc'>{weather.weather.map((data) => data.description).join(',')}</p>
            <p className='date'>{new Date(weather.dt * 1000).toLocaleDateString()}</p>
        </div>
    )
}

export default Weather;
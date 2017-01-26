const axios = require('axios');


const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=metric&appid=yourappid';

//


module.exports = {
    getTemp: function (location) {
        let encodedLocation = encodeURIComponent(location);
        let requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`; 
        
        return axios.get(requestUrl).then(function (err) {
            if (err.data.cod && err.data.message){
            //throw new Error(res.data.message);  
//            throw new Error(err.response.data.message);
            throw new Error('Unable to fetch weather for that location.');  

            }else {
                return err.data.main.temp;
            }
        }, function (err) {
            //throw new Error(res.data.message);          
            //   throw new error(err.response.data.message);
            throw new Error('Unable to fetch weather for that location.');  
            
        });
    }
}
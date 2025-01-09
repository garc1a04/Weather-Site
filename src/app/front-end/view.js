import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

function dir() {
    return __dirname.split("app");
}

function homePage(req,res,next) {
    res.render(dir()[0]+"/views/index.ejs", {
        data: Json
    });

    next();
}

const Json =
{
    "coord": {
       "lon": 7.367,
       "lat": 45.133
    },
    "weather": [
       {
          "id": 501,
          "main": "Rain",
          "description": "moderate rain",
          "icon": "10d"
       }
    ],
    "base": "stations",
    "main": {
       "temp": 29,
       "feels_like": 34,
       "temp_min": 283.06,
       "temp_max": 286.82,
       "pressure": 1021,
       "humidity": 60,
       "sea_level": 1021,
       "grnd_level": 910
    },
    "visibility": 10000,
    "wind": {
       "speed": 4.09,
       "deg": 121,
       "gust": 3.47
    },
    "rain": {
       "1h": 2.73
    },
    "clouds": {
       "all": 83
    },
    "dt": 1726660758,
    "sys": {
       "type": 1,
       "id": 6736,
       "country": "EX",
       "sunrise": 1726636384,
       "sunset": 1726680975
    },
    "timezone": 7200,
    "id": 3165523,
    "name": "Example",
    "cod": 200
}                    

export default {homePage,dir};
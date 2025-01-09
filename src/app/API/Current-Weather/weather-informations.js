import axios from 'axios';
import bodyParser from "body-parser";
import keyAPI from '../key.js';
import getLongLat from '../Geocoding/getLatitudeLong.js';

async function getInformations(adress) {
    try {
        const latLong = await getLongLat(adress);

        if(latLong != null){
            const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latLong.lat}&lon=${latLong.lon}&appid=${keyAPI}&units=metric`);

            return result.data;
        }
    } catch(error) {
        console.log(error)
    }
}

export default getInformations
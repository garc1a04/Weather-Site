import axios from 'axios';
import keyAPI from '../key.js';

async function getLongLat(adress) {
    try {
        const result = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${adress}&limit=5&appid=${keyAPI}`);

        return result.data[0];
    } catch(error){
        console.log(error);
    }
}

export default getLongLat;
import axios from 'https://esm.run/axios';

async function map(){
    try {
        const result = await axios.post("/submit-local")
        const data = result.data
        
        if(data != null) {
           var map = L.map('map').setView([data.coord.lat, data.coord.lon], 13);
        } else {
            var map = L.map('map').setView([45.133, 7.367], 13);
        }
                    
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);


    } catch(error) {
        console.log(error);
    }
}

map();

export default map
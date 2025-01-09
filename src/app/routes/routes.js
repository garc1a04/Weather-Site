import { Router } from "express";
import view from '../front-end/view.js'
import bodyParser from 'body-parser';
import getInformations from "../API/Current-Weather/weather-informations.js";


const router = Router();
var dataLocal = null;

router.get("/",view.homePage);

router.post("/submit", async (res,req) => {
    const data = await getInformations(res.body['city']);
    
    if(data == null) {
        req.status(404);
        return;
    }
    
    req.render(view.dir()[0]+"/views/index.ejs", {
        data: data
    });
    
    dataLocal = data;
})

router.post("/submit-local", async (req, res) => {
    try {
      res.json(dataLocal);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao obter informações' });
    }
});

export default router;
const express = require('express');
const app = express();
const cors = require("cors");

//Permite accesar desde un origen distinto
app.use(
    cors({
        //URL de front
        origin: "http://localhost:3000"
    })
)


//Para usar Json y obtener datos de URL
app.use( express.json(), express.urlencoded({ extended: true }) );




//Inicializa BD
require("./server/config/mongoose.config");

//Importamos rutas
const misRutas = require("./server/routes/cakes.routes");
misRutas(app);

//Ejecutamos server
app.listen(8000, ()=>console.log("Servidor listo !"));

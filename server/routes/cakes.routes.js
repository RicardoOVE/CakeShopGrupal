const CakesController = require("../controllers/cakes.controller")

module.exports = (app) => {
    app.post("/api/cakes", CakesController.create_cake);
    app.get("/api/cakes", CakesController.get_all);
    app.get("/api/cake/:id", CakesController.get_cake);
    app.delete("/api/cakes/:id", CakesController.delete_cake);
    app.put('/api/cake/:id', CakesController.update_cake);
}

//GET traer información
//POST enviar información
//PUT enviar información para editar
//DELETE borrar información
const CakesController = require("../controllers/cakes.controller")
const UserController = require("../controllers/user.controller");
const {upload} = require("../config/multer.config")

const {authenticate} = require("../config/jwt.config");

module.exports = (app) => {
    app.post("/api/cakes", CakesController.create_cake);
    app.get("/api/cakes", CakesController.get_all);
    app.get("/api/cake/:id", CakesController.get_cake);
    app.delete("/api/cakes/:id", CakesController.delete_cake);
    app.put('/api/cake/:id', CakesController.update_cake);

    //user
    app.post('/api/register', UserController.register);
    app.post('/api/login', UserController.login);
    app.get('/api/logout', UserController.logout);

    //imagen
    app.post('/api/imagen', upload.single("file"), function(req, res){res.json({})});

}

//GET traer información
//POST enviar información
//PUT enviar información para editar
//DELETE borrar información
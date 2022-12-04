const Cake = require("../models/cakes.models");


//Controlador para crear objetos en la colección
module.exports.create_cake = (req, res) => {
    Cake.create(req.body)
        .then(cake => res.json(cake))
        .catch(err => 
            {
                console.log(err);
                res.status(400).json(err);
            })
}

//Controlador para traer todas las instacias de una colección, se usa para Listar
module.exports.get_all = (req, res) => {
    Cake.find().sort({nombre: 1})
        .then(cakes => res.json(cakes))
        .catch(err => 
            {
                console.log(err);
                res.status(404).json({ message: "Error" + err });
            })
}
//Obtener un solo objeto de la colección basado en la condición,se usa para detallar
module.exports.get_cake = (req, res) => {
    Cake.findOne({ _id: req.params.id })
        .then(cake => res.json(cake))
        .catch(err => 
            {
                console.log(err);
                res.status(404).json({ message: "Error" + err });
            })
}

//Borrar un objeto en específico
module.exports.delete_cake = (req, res) => {
    Cake.deleteOne({ _id: req.params.id })
        .then(result => res.json(result))
        .catch(err => 
            {
                console.log(err);
                res.status(400).json({ message: "Error" + err });
            })
}

module.exports.update_cake = (req, res) => {
    //new:true nos regresa el documento ya modificado
    //runValidators: true nos revisa una vez más las validaciones del modelo
    Cake.findByIdAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators:true})
        .then(cake => res.json(cake))
        .catch(err => res.status(400).json(err));
}
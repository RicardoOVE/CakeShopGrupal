const mongoose = require('mongoose');


const EsquemaCakes = new mongoose.Schema({

    nombre: {
        type: String,
        required: [true, "Nombre de Producto obligatorio."],
        minlength: [2, "Nombre debe tener al menos 2 caracteres"]
    },
    categoria: {
        type: String,
        required: [true, "Categoría obligatoria."],
    },
    imagenURL: {
        type: String,
        required: [true, "URL de imagen obligatoria."],
        minlength: [3, "URL debe tener al menos 3 caracteres"]
    },
    porciones: {
        type: String,
        required: [true, "Número de porciones Obligatorio."],
        minlength: [1, "Número de porciones debe tener al menos 4 caracteres"]
    },
    price: {
        type: String,
        required: [true, "Precio Obligatorio."],
        minlength: [7, "Precio debe tener al menos 7 caracteres"]
    },
    porciones2: {
        type: String,
        required: [true, "Número de porciones Obligatorio."],
        minlength: [1, "Número de porciones debe tener al menos 4 caracteres"]
    },
    price2: {
        type: String,
        required: [true, "Precio Obligatorio."],
        minlength: [7, "Precio debe tener al menos 7 caracteres"]
    },
    porciones3: {
        type: String,
        
    },
    price3: {
        type: String,
        
    },
    description: {
        type: String,
        required: [true, "Descripción Obligatoria."],
        minlength: [20, "Descripicón debe tener al menos 20 caracteres"]
    },
    refrigerated: {
        type:Boolean,
        required: [true, "Refrigerado Obligatorio."],
        default: true
    },
}, { timestamps: true, versionKey: false });
//timestamps crea campos de createdAt y updatedAt
//versionKey: false elimina el campo _v


const Reposteria = mongoose.model("reposteria", EsquemaCakes);

module.exports = Reposteria;
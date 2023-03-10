import { check } from "express-validator";
import resultadosValidacion from "./resultadoValidacion";

const validarProducto = [
    check("nombreProducto")
    .notEmpty().withMessage("El nombre debe ser obligatorio")   
    .isLength({min:2, max:50}).withMessage("El producto debe tener entre 2 y 50 caracteres"),

    check("precio")
    .notEmpty().withMessage("El precio es obligatorio")
    .custom((value)=>{
        if (value>=0 && value<=9000) {
            return true
        }else{
            throw new Error("El precio debe estar entre 0 y 9000")
        }
    }),

    check("categoria")
    .notEmpty().withMessage("La categoria es obligatoria"),

    check("imagen")
    .notEmpty().withMessage("La imagen es obligatoria")
    .custom((value)=>{
        const patron = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/;

        if (patron.test(value)) {
            return true
        } else {
            throw new Error("El link es invalido")
        }
    }),

    check("descripcion")
    .notEmpty().withMessage("Debe de haber una descripcion simple del producto")
    .isLength({max:300}).withMessage("La descripcion debe ser de menos de 300 caracteres"),

    (req, res, next) => {
        resultadosValidacion(req, res, next)
    }
];

export default validarProducto;

import { validationResult } from "express-validator";

const resultadosValidacion = (req, res, next) => {
    const errors = validationResult(req)
    //Pregunto si tengo errores
    if (!errors.isEmpty()) {
        return res.status(400).json(
            {
                errors: errors.array() //devuelve la lista de errores
                // error: errors.mapped() //devuelve el primer error que ocurre
            }
        )
    }
    //le digo que continue con el flujo
    next()
}

export default resultadosValidacion;
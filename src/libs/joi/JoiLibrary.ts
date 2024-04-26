import Joi from "joi"

import { ErrosJoiAdapter } from "../../infra/adapters/errors"
import { RegrasDeValidacao } from "./RegrasDeValidacao"

export class JoiLibrary {
    public static validarSchema( camposDeEntrada: any, regras: any ) {
        const schemas = Joi.object(regras)
        const { error } = schemas.validate(camposDeEntrada, RegrasDeValidacao.opcoes)

        if( error ) ErrosJoiAdapter.execute(error)
    }
}
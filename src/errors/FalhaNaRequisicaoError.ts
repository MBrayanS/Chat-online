import { ErroCustomizado } from './'
import { INTERNAL_SERVER_ERROR_CODE } from './statusCodeHttp'

export type TFalhaNaRequisicaoError = {
    code?: number
    message?: string
    name?: string
    logging?: boolean
}

export class FalhaNaRequisicaoError extends ErroCustomizado {
    readonly statusCode: number
    
    constructor( params?: TFalhaNaRequisicaoError ) {
        const { code, message, name, logging } = params || {}

        super({
            name: name || 'FalhaNaRequisicao',
            message: message || 'Falha na requisição',
            logging
        })

        this.statusCode = code || INTERNAL_SERVER_ERROR_CODE
    }
}
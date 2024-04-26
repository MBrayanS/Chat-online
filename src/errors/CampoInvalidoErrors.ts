import { FalhaNaRequisicaoError } from './FalhaNaRequisicaoError'
import { BAD_REQUEST_CODE } from './statusCodeHttp'

export type TCampoInvalidoError = {
    name?: string
    message?: string
    code?: number
}

export class CampoInvalidoError extends FalhaNaRequisicaoError {
    constructor( message: string ) {
        super({
            message,
            name: 'CampoInvalido',
            code: BAD_REQUEST_CODE
        })
    }
}
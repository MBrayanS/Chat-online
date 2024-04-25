import { FalhaNaRequisicaoError } from './FalhaNaRequisicaoError'
import { CONFLICT_CODE, NOT_FOUND_CODE } from './statusCodeHttp'

export class UsuarioJaExisteError extends FalhaNaRequisicaoError {
    constructor( logging?: boolean ) {
        super({
            name: 'UsuarioJaExiste',
            message: 'Já existe um usuário com esta chave',
            code: CONFLICT_CODE,
            logging,
        })
    }
}

export class UsuarioNaoEncontradoError extends FalhaNaRequisicaoError {
    constructor( logging?: boolean ) {
        super({
            name: 'UsuarioNaoEncontrado',
            message: 'Usuário não encontrado',
            code: NOT_FOUND_CODE,
            logging,
        })
    }
}
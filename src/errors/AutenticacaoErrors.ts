import { FalhaNaRequisicaoError, TFalhaNaRequisicaoError } from './FalhaNaRequisicaoError'
import { UNAUTHORIZED_CODE } from './statusCodeHttp'

export class AutenticacaoError extends FalhaNaRequisicaoError {
    constructor( params?: TFalhaNaRequisicaoError ) {
        const { message, name } = params || {}

        super({
            name: name || 'ErroDeAutenticacao',
            message: message || 'Credenciais inválidas',
            code: UNAUTHORIZED_CODE
        })
    }
}

export class TokenNaoEncontradoError extends AutenticacaoError {
    constructor() {
        super({
            name: 'TokenNaoEncontrado',
            message: 'Token não encontrado'
        })
    }
}

export class TokenMalFormadoError extends AutenticacaoError {
    constructor() {
        super({
            name: 'TokenInvalido',
            message: 'O formato do token é inválido'
        })
    }
}

export class TokenInvalidoError extends AutenticacaoError {
    constructor() {
        super({
            name: 'TokenInvalido',
            message: 'Este token é inválido'
        })
    }
}

export class TokenExpiradoError extends AutenticacaoError {
    constructor() {
        super({
            name: 'TokenExpirado',
            message: 'Este token expirou'
        })
    }
}

export class CredenciaisInvalidasError extends AutenticacaoError {
    constructor() {
        super({
            name: 'CredenciaisInvalidas',
            message: 'Credenciais inválidas'
        })
    }
}
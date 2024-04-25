import { ErroCustomizado } from '.'

export class RepositoryError extends ErroCustomizado {
    constructor( name: string, message: string ) {
        super({ name, message })
    }
}

export class ValorDuplicadoError extends RepositoryError {
    constructor( message: string ) {
        super('ValorDuplicado', message)
    }
}

export class SintaxeInvalidaError extends RepositoryError {
    constructor( message: string ) {
        super('SintaxeInvalida', message)
    }
}
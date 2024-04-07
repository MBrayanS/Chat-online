export type TErroCustomizado = {
    name?: string
    message?: string
    logging?: boolean
}

export class ErroCustomizado extends Error {
    readonly name: string
    readonly logging: boolean

    constructor( params: TErroCustomizado ) {
        const { name, message, logging } = params

        super(message)

        this.name = name || 'ErroCustomizado'
        this.logging = logging ?? true
    }
}
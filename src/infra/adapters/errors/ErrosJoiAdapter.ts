import { CampoInvalidoError } from '../../../errors'

export class ErrosJoiAdapter {
    public static execute( erro: any ) {
        if( erro.message ) throw new CampoInvalidoError(erro.message)

        throw new Error(erro)
    }
}
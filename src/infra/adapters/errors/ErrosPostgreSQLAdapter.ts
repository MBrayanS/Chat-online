import { SintaxeInvalidaError, ValorDuplicadoError } from '../../../errors'

export class ErrosPostgreSQLAdapter {
    private static codigosAceitos: Record<string, ( message: string ) => any> = {
        '23505': ( message ) => new ValorDuplicadoError(message),
        '22P02': ( message ) => new SintaxeInvalidaError(message)
    }

    public static execute( erro: any ) {
        const codigoDoErro = erro.parent.code
        const oErroDeveSerAdaptado = codigoDoErro in ErrosPostgreSQLAdapter.codigosAceitos

        if( oErroDeveSerAdaptado ) throw ErrosPostgreSQLAdapter.codigosAceitos[codigoDoErro](erro.message)

        throw new Error(erro)
    }
}
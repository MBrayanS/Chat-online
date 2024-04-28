import { ValorDuplicadoError } from '../../../errors'

export class ErrosSqliteAdapter {
    private static codigosAceitos: Record<string, ( message: string ) => any> = {
        'SQLITE_CONSTRAINT': ( message ) => new ValorDuplicadoError(message)
    }

    public static execute( erro: any ) {
        const codigoDoErro = erro.parent.code
        const oErroDeveSerAdaptado = codigoDoErro in ErrosSqliteAdapter.codigosAceitos

        if( oErroDeveSerAdaptado ) throw ErrosSqliteAdapter.codigosAceitos[codigoDoErro](erro.message)

        throw new Error(erro)
    }
}
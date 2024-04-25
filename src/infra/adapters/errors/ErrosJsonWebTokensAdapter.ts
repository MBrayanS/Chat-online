import { TokenExpiradoError, TokenInvalidoError, TokenMalFormadoError, TokenNaoEncontradoError } from "../../../errors"

export class ErrosJsonWebTokensAdapter {
    private static erros: Record<string, () => any> = {
        'jwt malformed': () => new TokenMalFormadoError(),
        'jwt expired': () => new TokenExpiradoError(),
        'invalid token': () => new TokenInvalidoError(),
        'jwt must be provided' : () => new TokenNaoEncontradoError()
    }

    public static execute( mensagemDoErro: string ) {
        const oErroDeveSerAdaptado = mensagemDoErro in ErrosJsonWebTokensAdapter.erros

        if( oErroDeveSerAdaptado ) throw ErrosJsonWebTokensAdapter.erros[mensagemDoErro]()

        throw new Error(mensagemDoErro)
    }
}
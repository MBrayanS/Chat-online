import JWT from 'jsonwebtoken'

import { JWT_CHAVE_SECRETA, JWT_DURACAO_DO_TOKEN } from '../../config'

export default class JsonWebTokensLibrary {
    private static chaveSecreta = JWT_CHAVE_SECRETA
    private static duracaoDoToken = JWT_DURACAO_DO_TOKEN

    public static gerarToken( payload: any ) {
        return JWT.sign(payload, JsonWebTokensLibrary.chaveSecreta, { expiresIn: JsonWebTokensLibrary.duracaoDoToken })
    }

    public static verificarToken( token: string ) {
        return JWT.verify(token, JsonWebTokensLibrary.chaveSecreta)
    }
}
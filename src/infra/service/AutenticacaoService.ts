import JsonWebTokensLibrary from "../../libs/jsonWebTokens"
import { ErrosJsonWebTokensAdapter } from "../adapters/errors"

export interface IAutenticacaoService {
    gerarToken( payload: any ): string
    verificarToken( token: string ): any
}

export class AutenticacaoService {
    
    public static gerarToken( payload: any ): string {
        return JsonWebTokensLibrary.gerarToken( payload )
    }

    public static verificarToken( token: string ): any { 
        try { return JsonWebTokensLibrary.verificarToken( token ) }

        catch ( erro: any ) { ErrosJsonWebTokensAdapter.execute(erro.message) }
    }
}
import { JoiLibrary, RegrasDeValidacao } from "../../libs/joi"

export interface IValidacaoService {
    Regras: typeof RegrasDeValidacao

    validarBody( body: any, regrasDeValidacao: Partial<typeof RegrasDeValidacao> ): void
}

export class ValidacaoService {
    public static readonly Regras = RegrasDeValidacao

    public static validarBody( body: any, regrasDeValidacao: Partial<typeof RegrasDeValidacao> ) {
        JoiLibrary.validarSchema(body, regrasDeValidacao)
    }
}
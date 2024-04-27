import { IEncontrarUsuarioCadastradoUseCase } from '../../../core/useCases/EncontrarUsuarioCadastradoUseCase'
import { IAutenticacaoService, IValidacaoService } from '../../../infra/service'
import { TEnviarCookiesControllerResponse } from '../../adapters'

export type TLogarControllerRequestDTO = {
    chave: string
    senha: string
}

export interface ILogarController {
    execute( params: any, body: TLogarControllerRequestDTO ): Promise<TEnviarCookiesControllerResponse>
}

export class LogarController implements ILogarController {

    constructor(
        protected EncontrarUsuarioUseCase: IEncontrarUsuarioCadastradoUseCase,
        protected AutenticacaoService: IAutenticacaoService,
        protected ValidacaoService: IValidacaoService
    ) {
        this.validarBody = this.validarBody.bind(this)
        this.execute = this.execute.bind(this)
    }

    public validarBody( params: any, body: TLogarControllerRequestDTO ) {
        const regrasDeValidacao = {
            chave: this.ValidacaoService.Regras.chave,
            senha: this.ValidacaoService.Regras.senha
        }

        this.ValidacaoService.validarBody(body, regrasDeValidacao)
    }

    public async execute( params: any, { chave, senha }: TLogarControllerRequestDTO ) {
        const { id, nome } = await this.EncontrarUsuarioUseCase.execute(chave, senha)

        const token = this.AutenticacaoService.gerarToken({ id, nome })

        return { statusCode: 200, token }
    }
}
import { TUsuarioEntityCreateDTO } from '../../../core/domain'
import { ICriarNovoUsuarioUseCase } from '../../../core/useCases'
import { IAutenticacaoService, IValidacaoService } from '../../../infra/service'
import { TEnviarCookiesControllerResponse } from '../../adapters'

export interface ICadastrarController {
    validarBody( params: any, body: TUsuarioEntityCreateDTO ): void
    execute( params: any, body: TUsuarioEntityCreateDTO ): Promise<TEnviarCookiesControllerResponse>
}

export class CadastrarController implements ICadastrarController {
    constructor(
        protected CriarNovoUsuarioUseCase: ICriarNovoUsuarioUseCase,
        protected AutenticacaoService: IAutenticacaoService,
        protected ValidacaoService: IValidacaoService
    ) {
        this.validarBody = this.validarBody.bind(this)
        this.execute = this.execute.bind(this)
    }

    public validarBody( params: any, body: TUsuarioEntityCreateDTO ) {
        const regrasDeValidacao = {
            nome: this.ValidacaoService.Regras.nome,
            chave: this.ValidacaoService.Regras.chave,
            senha: this.ValidacaoService.Regras.senha
        }

        this.ValidacaoService.validarBody(body, regrasDeValidacao)
    }

    public async execute( params: any, body: TUsuarioEntityCreateDTO ) {
        const { id, nome } = await this.CriarNovoUsuarioUseCase.execute(body)
        
        const token = this.AutenticacaoService.gerarToken({ id, nome })

        return { statusCode: 201, token }
    }
}
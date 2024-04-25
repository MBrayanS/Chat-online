import { ICriptografarService } from '../../infra/service'
import { IUsuarioRepository } from '../../infra/repositories'
import { TUsuarioModelDTO } from '../../infra/models'
import { TUsuarioRepositoryDTO } from '../../infra/adapters/models'
import { TUsuarioEntityCreateDTO } from '../domain'
import { IModelAdapter } from '../adapters'

import { UsuarioJaExisteError } from '../../errors'

export interface ICriarNovoUsuarioUseCase {
    execute( usuarioEntityDTO: TUsuarioEntityCreateDTO ): Promise<TUsuarioRepositoryDTO>
}

export class CriarNovoUsuarioUseCase implements ICriarNovoUsuarioUseCase {
    constructor(
        protected UsuarioRepository: IUsuarioRepository,
        protected UsuarioAdapter: IModelAdapter<TUsuarioModelDTO, TUsuarioRepositoryDTO>,
        protected CriptografarService: ICriptografarService
    ) {}

    public async execute( { nome, chave, senha }: TUsuarioEntityCreateDTO ) {
        const usuarioJaExiste = await this.UsuarioRepository.encontrar({ chave })
        
        if( usuarioJaExiste ) throw new UsuarioJaExisteError()
        
        const senha_hash = this.CriptografarService.criptografar(senha)

        const novoUsuarioModelDTO = await this.UsuarioRepository.criar({ nome, chave, senha_hash })

        return this.UsuarioAdapter.paraRepositoryDTO(novoUsuarioModelDTO)
    }
}
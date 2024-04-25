import { TUsuarioRepositoryDTO } from '../../infra/adapters/models'
import { TUsuarioModelDTO } from '../../infra/models'
import { IUsuarioRepository } from '../../infra/repositories'
import { ICriptografarService } from '../../infra/service'
import { IModelAdapter } from '../adapters'

import { UsuarioNaoEncontradoError, CredenciaisInvalidasError } from '../../errors'

export interface IEncontrarUsuarioCadastradoUseCase {
    execute( chave: string, senha: string ): Promise<TUsuarioRepositoryDTO>
}

export class EncontrarUsuarioCadastradoUseCase implements IEncontrarUsuarioCadastradoUseCase {
    constructor(
        protected UsuarioRepository: IUsuarioRepository,
        protected UsuarioAdapter: IModelAdapter<TUsuarioModelDTO, TUsuarioRepositoryDTO>,
        protected CriptografarService: ICriptografarService
    ) {}

    public async execute( chave: string, senha: string ) {
        const usuarioExiste = await this.UsuarioRepository.encontrar({ chave })

        if( !usuarioExiste ) throw new UsuarioNaoEncontradoError()

        const ASenhaEstaCorreta = this.CriptografarService.descriptografar(senha, usuarioExiste.senha_hash)

        if( !ASenhaEstaCorreta ) throw new CredenciaisInvalidasError()

        return this.UsuarioAdapter.paraRepositoryDTO(usuarioExiste)
    }
}
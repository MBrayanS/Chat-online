import {
    CriarNovoUsuarioUseCase as CriarNovoUsuarioUseCaseClass,
    EncontrarUsuarioCadastradoUseCase as EncontrarUsuarioCadastradoUseCaseClass
} from '../core/useCases'

import { UsuarioModelAdapter } from '../infra/adapters/models'
import { CriptografarService } from '../infra/service'

import { UsuarioRepository } from './RepositoriesModule'

export const CriarNovoUsuarioUseCase = new CriarNovoUsuarioUseCaseClass(UsuarioRepository, UsuarioModelAdapter, CriptografarService)
export const EncontrarUsuarioCadastradoUseCase = new EncontrarUsuarioCadastradoUseCaseClass(UsuarioRepository, UsuarioModelAdapter, CriptografarService)
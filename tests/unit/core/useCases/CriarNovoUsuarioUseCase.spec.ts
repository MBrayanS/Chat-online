import { CriarNovoUsuarioUseCase } from '../../../../src/core/useCases'
import { UsuarioModelAdapter } from '../../../../src/infra/adapters/models'
import { UsuarioRepository } from '../../../../src/infra/repositories'
import { UsuarioJaExisteError } from '../../../../src/errors'
import { CriptografarService } from '../../../../src/infra/service'

import { usuarioFakeDTOFactory, usuarioFakeModelDTOFactory } from '../../../mocks'

jest.mock('../../../../src/infra/repositories/UsuarioRepository')
jest.mock('../../../../src/infra/service/CriptografarService')

const sutFactory = () => {
    const repository = new UsuarioRepository({} as any)
    const sut = new CriarNovoUsuarioUseCase(repository, UsuarioModelAdapter, CriptografarService)
    
    repository.encontrar = jest.fn().mockReturnValue(false)
    CriptografarService.criptografar = jest.fn().mockImplementation( (texto: string) => texto)
    
    return { sut, repository }
}

describe('CriarNovoUsuarioUseCase', () => {

    test('Deve criar um novo usuário', async () => {
        const { sut, repository } = sutFactory()

        const usuarioFakeEntityDTO = usuarioFakeDTOFactory()
        const usuarioFakeModelDTO = usuarioFakeModelDTOFactory()
        const usuarioModelCreatDTO = {
            nome: usuarioFakeEntityDTO.nome,
            chave: usuarioFakeEntityDTO.chave,
            senha_hash: usuarioFakeModelDTO.senha_hash
        }

        repository.criar = jest.fn().mockReturnValue(usuarioFakeModelDTO)
    
        const respostaDoUseCase = await sut.execute(usuarioFakeEntityDTO)

        expect(repository.encontrar).toHaveBeenCalledWith({ chave: usuarioFakeEntityDTO.chave })
        expect(repository.criar).toHaveBeenCalledWith(usuarioModelCreatDTO)
        expect(respostaDoUseCase).toEqual({
            id: usuarioFakeModelDTO.id,
            nome: usuarioFakeModelDTO.nome,
            chave: usuarioFakeModelDTO.chave,
            senhaHash: usuarioFakeModelDTO.senha_hash,
            createdAt: usuarioFakeModelDTO.createdAt,
            updatedAt: usuarioFakeModelDTO.updatedAt
        })
    })
    
    test('Deve retornar um erro se o usuário ja existir', async () => {
        const { sut, repository } = sutFactory()

        const usuarioFakeEntityDTO = usuarioFakeDTOFactory()

        repository.encontrar = jest.fn().mockReturnValue(usuarioFakeEntityDTO)

        const respostaDoUseCase = sut.execute(usuarioFakeEntityDTO)

        await expect(respostaDoUseCase).rejects.toEqual( new UsuarioJaExisteError() )
    })
})

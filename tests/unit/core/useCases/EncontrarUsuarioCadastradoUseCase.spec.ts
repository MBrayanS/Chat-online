import { EncontrarUsuarioCadastradoUseCase } from '../../../../src/core/useCases'
import { UsuarioModelAdapter } from '../../../../src/infra/adapters/models'
import { UsuarioRepository } from '../../../../src/infra/repositories'
import { CriptografarService } from '../../../../src/infra/service'
import { CredenciaisInvalidasError, UsuarioNaoEncontradoError } from '../../../../src/errors'

import { usuarioFakeModelDTOFactory } from '../../../mocks'

jest.mock('../../../../src/infra/repositories/UsuarioRepository')
jest.mock('../../../../src/infra/service/CriptografarService')

const sutFactory = () => {
    const repository = new UsuarioRepository({} as any)
    const sut = new EncontrarUsuarioCadastradoUseCase(repository, UsuarioModelAdapter, CriptografarService)
    
    repository.criar = jest.fn().mockImplementation( (modelCreateDTO: any) => modelCreateDTO)
    CriptografarService.descriptografar = jest.fn().mockReturnValue(true)
    
    return { sut, repository }
}

describe('EncontrarUsuarioCadastradoUseCase', () => {
    test('Deve encontrar um usuário', async () => {
        const { sut, repository } = sutFactory()

        const usuarioFakeModelDTO = usuarioFakeModelDTOFactory()

        repository.encontrar = jest.fn().mockReturnValue(usuarioFakeModelDTO)

        const respostaDoUseCase = await sut.execute(usuarioFakeModelDTO.chave, usuarioFakeModelDTO.senha_hash)

        expect(respostaDoUseCase).toEqual({
            id: usuarioFakeModelDTO.id,
            nome: usuarioFakeModelDTO.nome,
            chave: usuarioFakeModelDTO.chave,
            senhaHash: usuarioFakeModelDTO.senha_hash,
            createdAt: usuarioFakeModelDTO.createdAt,
            updatedAt: usuarioFakeModelDTO.updatedAt
        })
    })

    test('Deve retornar um erro se o usuário não for encontrado', async () => {
        const { sut, repository } = sutFactory()

        repository.encontrar = jest.fn().mockReturnValue(false)

        const respostaDoUseCase = sut.execute('chave', 'senha')

        await expect(respostaDoUseCase).rejects.toBeInstanceOf(UsuarioNaoEncontradoError)
    })

    test('Deve retornar um erro se a senha estiver incorreta', async () => {
        const { sut, repository } = sutFactory()

        const usuarioFakeModelDTO = usuarioFakeModelDTOFactory()

        repository.encontrar = jest.fn().mockReturnValue(usuarioFakeModelDTO)
        CriptografarService.descriptografar = jest.fn().mockReturnValue(false)

        const respostaDoUseCase = sut.execute('chave', 'senhaIncorreta')

        await expect(respostaDoUseCase).rejects.toBeInstanceOf(CredenciaisInvalidasError)
    })
})
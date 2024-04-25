import { UsuarioModel } from '../../../../../src/infra/models'
import { UsuarioRepository } from '../../../../../src/infra/repositories'

import { ValorDuplicadoError } from '../../../../../src/errors'

import { usuarioFakeDTOFactory } from '../../../../mocks/factories'

const sutFactory = async () => {
    await UsuarioModel.truncate()

    return new UsuarioRepository(UsuarioModel)
}

describe('Criar registro com PostgreSQLRepository', () => {

    afterAll( async () => await UsuarioModel.truncate() ) 

    test('Deve criar um novo usuário', async () => {
        const sut = await sutFactory()

        const { nome, chave, senha: senha_hash } = usuarioFakeDTOFactory()

        await sut.criar({ nome, chave, senha_hash })

        const usuarioSalvo = await UsuarioModel.findOne({ where: { chave } })
        const usuarioJSON = usuarioSalvo?.toJSON()

        expect(usuarioJSON).toEqual({
            id: expect.any(String),
            createdAt: expect.any(Date),
            updatedAt: expect.any(Date),
            nome, chave, senha_hash
        })
    })

    test('Deve retornar um erro se já existir um usuário com a mesma chave', async () => {
        const sut = await sutFactory()

        const { nome, chave, senha: senha_hash } = usuarioFakeDTOFactory()

        await sut.criar({ nome, chave, senha_hash })

        const respostaDoSut = sut.criar({ nome, chave, senha_hash })

        await expect(respostaDoSut).rejects.toBeInstanceOf(ValorDuplicadoError)
    })
})
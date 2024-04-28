import { UsuarioModel } from "../../../../src/infra/models"

import { SintaxeInvalidaError } from "../../../../src/errors"

import { usuarioFakeDTOFactory } from "../../../mocks/factories"
import { UsuarioRepository } from "../../../../src/modules/RepositoriesModule"

const sutFactory = async () => {
    await UsuarioModel.truncate()

    return UsuarioRepository
}

describe('Encontrar registro no banco de dados', () => {

    afterAll( async () => await UsuarioModel.truncate() )

    test('Deve encontrar um usuário pela chave', async () => {
        const sut = await sutFactory()

        const { nome, chave, senha: senha_hash } = usuarioFakeDTOFactory()
        
        const usuarioCriado = await UsuarioModel.create({ nome, chave, senha_hash })
        const usuarioSalvo = await sut.encontrar({ chave: usuarioCriado.chave })

        expect(usuarioSalvo).toEqual({
            id: usuarioCriado.id,
            nome: usuarioCriado.nome,
            createdAt: usuarioCriado.createdAt,
            updatedAt: usuarioCriado.updatedAt,
            chave: usuarioCriado.chave,
            senha_hash: usuarioCriado.senha_hash
        })
    })

    test('Deve retornar false se o usuário não existir', async () => {
        const sut = await sutFactory()

        const chaveFake = 'chaveInvalida'

        const respostaDoSut = sut.encontrar({ chave: chaveFake })

        expect(await respostaDoSut).toBeFalsy()
    })

    test('Deve retornar um erro se o id for inválido', async () => {
        const sut = await sutFactory()

        const idFake = 'idInvalido'
        const respostaDoSut = sut.encontrar({ id: idFake })

        await expect(respostaDoSut).rejects.toBeInstanceOf(SintaxeInvalidaError)
    })
})
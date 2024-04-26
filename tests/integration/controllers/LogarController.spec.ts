import Request from 'supertest'

import AplicacaoExpress from '../../../src/infra/servers/express'

import { usuarioFakeDTOFactory } from '../../mocks'
import { AutenticacaoService } from '../../../src/infra/service'
import { CriarNovoUsuarioUseCase } from '../../../src/modules/UseCasesModule'
import { UsuarioModel } from '../../../src/infra/models'

const aplicacaoExpress = new AplicacaoExpress('3002')

const sutFactory = async () => {
    aplicacaoExpress.configurar()
    await aplicacaoExpress.conectarBancoDeDados()

    const sut = async ( corpoDaRequisicao: any ) => await Request(aplicacaoExpress.aplicacao).post('/logar').send(corpoDaRequisicao)

    return sut 
}

const pegarToken = ( res: any ) => res.headers['set-cookie'][0].split('; ')[0].split('=')[1]

describe('LogarController', () => {

    beforeEach( async () => await UsuarioModel.truncate() )
    afterEach( async () => await UsuarioModel.truncate() )

    test('Deve logar um usuário', async () => {
        const sut = await sutFactory()

        const corpoDaRequisicao = usuarioFakeDTOFactory()

        await CriarNovoUsuarioUseCase.execute(corpoDaRequisicao)

        const respostaDaRequisicao = await sut({ chave: corpoDaRequisicao.chave, senha: corpoDaRequisicao.senha })

        const token = pegarToken(respostaDaRequisicao)
        const validarToken = AutenticacaoService.verificarToken(token)

        expect(respostaDaRequisicao.statusCode).toEqual(200)
        expect(validarToken).toEqual({
            iat: expect.any(Number),
            exp: expect.any(Number),
            id: expect.any(String),
            nome: corpoDaRequisicao.nome
        })
    })

    test('Deve retornar um erro se o corpo da requisição estiver invalido', async () => {
        const sut = await sutFactory()

        const respostaDaRequisicao = await sut({})

        expect(respostaDaRequisicao.body).toEqual({
            code: 400,
            message: 'O campo \"chave\" é obrigatório.',
            name: 'CampoInvalido',
        })
    })

    test('Deve retornar um erro se o usuário não existir', async () => {
        const sut = await sutFactory()

        const { nome, chave, senha} = usuarioFakeDTOFactory()

        await CriarNovoUsuarioUseCase.execute({ nome, chave, senha: '123456' })

        const respostaDaRequisicao = await sut({ chave, senha })

        expect(respostaDaRequisicao.body).toEqual({
            code: 401,
            message: 'Credenciais inválidas',
            name: 'CredenciaisInvalidas',
        })
    })
})
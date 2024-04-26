import Request from 'supertest'

import AplicacaoExpress from '../../../src/infra/servers/express'
import { AutenticacaoService } from '../../../src/infra/service'
import { UsuarioModel } from '../../../src/infra/models'
import { usuarioFakeDTOFactory } from '../../mocks'

const sutFactory = async () => {
    const aplicacaoExpress = new AplicacaoExpress('3002')

    aplicacaoExpress.configurar()
    await aplicacaoExpress.conectarBancoDeDados()
    
    const sut = async ( corpoDaRequisicao: any ) => await Request(aplicacaoExpress.aplicacao).post('/api/cadastrar').send(corpoDaRequisicao)

    return sut
}

const pegarToken = ( res: any ) => res.headers['set-cookie'][0].split('; ')[0].split('=')[1]

describe('CadastrarController', () => {

    beforeEach( async () => await UsuarioModel.truncate() )
    afterEach( async () => await UsuarioModel.truncate() )
    
    test('Deve cadastrar um novo usuário', async () => {
        const sut = await sutFactory()

        const corpoDaRequisicao = usuarioFakeDTOFactory()
        const respostaDaRequisicao = await sut(corpoDaRequisicao)

        const token = pegarToken(respostaDaRequisicao)
        
        const validarToken = AutenticacaoService.verificarToken(token)

        expect(respostaDaRequisicao.statusCode).toEqual(201)
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
            message: 'O campo \"nome\" é obrigatório.',
            name: 'CampoInvalido',
        })
    })

    test('Deve retornar um erro se o usuário já existir', async () => {
        const sut = await sutFactory()

        const corpoDaRequisicao = usuarioFakeDTOFactory()
        await sut(corpoDaRequisicao)

        const respostaDaRequisicao = await sut(corpoDaRequisicao)

        expect(respostaDaRequisicao.body).toEqual({
            code: 409,
            message: 'Já existe um usuário com esta chave',
            name: 'UsuarioJaExiste'
        })
    })
})
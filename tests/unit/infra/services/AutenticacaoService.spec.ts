import { AutenticacaoService } from '../../../../src/infra/service'

import { TokenExpiradoError, TokenInvalidoError, TokenMalFormadoError, TokenNaoEncontradoError } from '../../../../src/errors'

describe('AutenticacaoService', () => {
    test('Deve gerar um token que seja valido', () => {
        const payload = { id: 'idFake' }
        
        const token = AutenticacaoService.gerarToken(payload)
        const verificarToken = AutenticacaoService.verificarToken(token)

        expect(verificarToken).toEqual({
            iat: expect.any(Number),
            exp: expect.any(Number),
            id: 'idFake'
        })
    })

    test('Deve retornar um erro se o token não for passado', async () => {
        const token = ''
        const sut = async () => AutenticacaoService.verificarToken(token) ()
        
        await expect(sut).rejects.toEqual( new TokenNaoEncontradoError() )
    })

    test('Deve retornar um erro se o token for inválido', async () => {
        const token = 'tokenFake'

        const sut = async () => AutenticacaoService.verificarToken(token) ()
        
        await expect(sut).rejects.toEqual( new TokenMalFormadoError() )
    })

    test('Deve retornar um erro se o token expirar', async () => {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImlkRmFrZSIsImlhdCI6MTcxMzYzODU1MiwiZXhwIjoxNzEzNjM4NTUzfQ.x7LjXdIQ6q6y_wcLBzt6Fo-AVBy_OxAUDPCLm08wa7M'

        const sut = async () => AutenticacaoService.verificarToken(token) ()

        await expect(sut).rejects.toEqual( new TokenExpiradoError() )
    })

    test('Deve retornar um erro se o token for inválido', async () => {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVAJ9.eyJpZCI6ImlkRmFrZSIsImlhdCI6MTcxMzYzODU1MiwiZXhwIjoxNzEzNjM4NTUzfQ.x7LjXdIQ6q6y_wcLBzt6Fo-AVBy_OxAUDPCLm08wa7M'

        const sut = async () => AutenticacaoService.verificarToken(token) ()

        await expect(sut).rejects.toEqual( new TokenInvalidoError() )
    })
})
import { CampoInvalidoError } from "../../../../src/errors"
import { ValidacaoService } from "../../../../src/infra/service"

const sutFactory = async ( body: any, regrasDeValidacao: any ) => ValidacaoService.validarBody(body, regrasDeValidacao)

describe('ValidacaoService', () => {
    describe('Deve testar as regras de validação', () => {
        const  regrasDeValidacao = { nome: ValidacaoService.Regras.nome }

        test('Deve retornar um erro se o campo não for informado', async () => {
            const sut = sutFactory({}, regrasDeValidacao)

            await expect(sut).rejects.toThrow( new CampoInvalidoError('O campo \"nome\" é obrigatório.') )
        })

        test('Deve retornar um erro se o tipo do campo for invalido', async () => {
            const sut = sutFactory({ nome: 123 }, regrasDeValidacao)

            await expect(sut).rejects.toThrow( new CampoInvalidoError('O campo \"nome\" deve ser uma string.') )
        })

        test('Deve retornar um erro se a string for vazia', async () => {
            const sut = sutFactory({ nome: '' }, regrasDeValidacao)

            await expect(sut).rejects.toThrow( new CampoInvalidoError('O campo \"nome\" não pode estar vazio.') )
        })
    })

    describe('Deve validar o campo nome', () => {
        const  regrasDeValidacao = { nome: ValidacaoService.Regras.nome }

        test('Deve retornar um erro se o campo tiver menos de 3 caracteres', async () => {
            const sut = sutFactory({ nome: '12' }, regrasDeValidacao)

            await expect(sut).rejects.toThrow( new CampoInvalidoError('O campo \"nome\" deve conter pelo menos 3 caracteres.') )
        })

        test('Deve retornar um erro se o campo tiver mais de 50 caracteres', async () => {
            const sut = sutFactory({ nome: 'a'.repeat(51) }, regrasDeValidacao)

            await expect(sut).rejects.toThrow( new CampoInvalidoError('O campo \"nome\" deve conter no maximo 50 caracteres.') )
        })
    })

    describe('Deve validar o campo chave', () => {
        const  regrasDeValidacao = { chave: ValidacaoService.Regras.chave }

        test('Deve retornar um erro se o campo não cumprir as regras de caracteres', async () => {
            const sut = sutFactory({ chave: 'chave' }, regrasDeValidacao)

            await expect(sut).rejects.toThrow( new CampoInvalidoError('O campo \"chave\" deve conter pelo menos uma letra maiúscula, uma letra minúscula e um caractere especial.') )
        })

        test('Deve retornar um erro se o campo tiver menos de 4 caracteres', async () => {
            const sut = sutFactory({ chave: '123' }, regrasDeValidacao)

            await expect(sut).rejects.toThrow( new CampoInvalidoError('O campo \"chave\" deve conter pelo menos 4 caracteres.') )
        })

        test('Deve retornar um erro se o campo tiver mais de 255 caracteres', async () => {
            const sut = sutFactory({ chave: 'a'.repeat(256) }, regrasDeValidacao)

            await expect(sut).rejects.toThrow( new CampoInvalidoError('O campo \"chave\" deve conter no maximo 255 caracteres.') )
        })
    })

    describe('Deve validar o campo senha', () => {
        const  regrasDeValidacao = { senha: ValidacaoService.Regras.senha }

        test('Deve retornar um erro se o campo não cumprir as regras de caracteres', async () => {
            const sut = sutFactory({ senha: 'senha123' }, regrasDeValidacao)

            await expect(sut).rejects.toThrow( new CampoInvalidoError('O campo \"senha\" deve conter pelo menos uma letra maiúscula, uma letra minúscula e um caractere especial.') )
        })

        test('Deve retornar um erro se o campo tiver menos de 8 caracteres', async () => {
            const sut = sutFactory({ senha: '1234567' }, regrasDeValidacao)

            await expect(sut).rejects.toThrow( new CampoInvalidoError('O campo \"senha\" deve conter pelo menos 8 caracteres.') )
        })

        test('Deve retornar um erro se o campo tiver mais de 255 caracteres', async () => {
            const sut = sutFactory({ senha: 'a'.repeat(256) }, regrasDeValidacao)

            await expect(sut).rejects.toThrow( new CampoInvalidoError('O campo \"senha\" deve conter no maximo 255 caracteres.') )
        })
    })
})
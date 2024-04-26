import { CadastrarController } from '../../../../src/app/controllers'
import { CriarNovoUsuarioUseCase } from '../../../../src/core/useCases'
import { AutenticacaoService, ValidacaoService } from '../../../../src/infra/service'
import { usuarioFakeDTOFactory, usuarioFakeRepositoryDTOFactory } from '../../../mocks'

jest.mock('../../../../src/core/useCases/CriarNovoUsuarioUseCase')
jest.mock('../../../../src/infra/service/AutenticacaoService')

const sutFactory = () => {
    const criarNovoUsuarioUseCase = new CriarNovoUsuarioUseCase({} as any, {} as any, {} as any)

    const sut = new CadastrarController(criarNovoUsuarioUseCase, AutenticacaoService, ValidacaoService)

    return { sut, criarNovoUsuarioUseCase }
}

describe('CadastrarController', () => {
    test('Deve cadastrar um novo usuário', async () => {
        const { sut, criarNovoUsuarioUseCase } = sutFactory()

        const corpoDaRequisicao = usuarioFakeDTOFactory()
        const usuarioRepositoryDTO = usuarioFakeRepositoryDTOFactory()

        const gerarTokenParametros = { id: usuarioRepositoryDTO.id, nome: corpoDaRequisicao.nome }

        criarNovoUsuarioUseCase.execute = jest.fn().mockResolvedValue(usuarioRepositoryDTO)
        AutenticacaoService.gerarToken = jest.fn().mockReturnValue('tokenFake')

        const respostaDoController = await sut.execute({}, corpoDaRequisicao)
        
        expect(criarNovoUsuarioUseCase.execute).toHaveBeenCalledWith(corpoDaRequisicao)
        expect(AutenticacaoService.gerarToken).toHaveBeenCalledWith(gerarTokenParametros)
        expect(respostaDoController).toEqual({ statusCode: 201, token: 'tokenFake' })
    })
})
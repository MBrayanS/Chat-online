import { LogarController } from "../../../../src/app/controllers"
import { EncontrarUsuarioCadastradoUseCase } from "../../../../src/core/useCases"
import { AutenticacaoService, ValidacaoService } from "../../../../src/infra/service"
import { usuarioFakeDTOFactory, usuarioFakeRepositoryDTOFactory } from "../../../mocks"

jest.mock("../../../../src/infra/service/AutenticacaoService")
jest.mock("../../../../src/core/useCases/EncontrarUsuarioCadastradoUseCase")

const sutFactory = () => {
    const encontrarUsuarioCadastradoUseCase = new EncontrarUsuarioCadastradoUseCase({} as any, {} as any, {} as any)
    const sut = new LogarController(encontrarUsuarioCadastradoUseCase, AutenticacaoService, ValidacaoService)

    return { sut, encontrarUsuarioCadastradoUseCase }
}

describe('LogarController', () => {
    test('Deve logar um usuário', async () => {
        const { sut, encontrarUsuarioCadastradoUseCase } = sutFactory()

        const usuarioFakeDTO = usuarioFakeDTOFactory()
        const usuarioFakeRepositoryDTO = usuarioFakeRepositoryDTOFactory()

        const gerarTokenParametros = { id: usuarioFakeRepositoryDTO.id, nome: usuarioFakeRepositoryDTO.nome }

        AutenticacaoService.gerarToken = jest.fn().mockReturnValue('tokenFake')
        encontrarUsuarioCadastradoUseCase.execute = jest.fn().mockResolvedValue(usuarioFakeRepositoryDTO)

        const respostaDoController = await sut.execute({}, usuarioFakeDTO)

        expect(encontrarUsuarioCadastradoUseCase.execute).toHaveBeenCalledWith(usuarioFakeDTO.chave, usuarioFakeDTO.senha)
        expect(AutenticacaoService.gerarToken).toHaveBeenCalledWith(gerarTokenParametros)
        expect(respostaDoController).toEqual({ statusCode: 200, token: 'tokenFake' })
    })
})
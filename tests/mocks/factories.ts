import { TUsuarioEntityCreateDTO } from "../../src/core/domain"
import { TUsuarioRepositoryDTO } from "../../src/infra/adapters/models"
import { TUsuarioModelDTO } from "../../src/infra/models"

export const usuarioFakeDTOFactory = (): TUsuarioEntityCreateDTO => ({
    nome: 'Fulano de tal',
    chave: 'podeSerQualquerCoisa123!',
    senha: 'umaSenhaQualquer123!'
})

export const usuarioFakeRepositoryDTOFactory = (): TUsuarioRepositoryDTO => {
    const usuarioFakeEntityDTO = usuarioFakeDTOFactory()

    return {
        id: 'idFake',
        nome: usuarioFakeEntityDTO.nome,
        chave: usuarioFakeEntityDTO.chave,
        senhaHash: usuarioFakeEntityDTO.senha,
        createdAt: new Date(),
        updatedAt: new Date()
    }
}

export const usuarioFakeModelDTOFactory = (): TUsuarioModelDTO => {
    const usuarioFakeEntityDTO = usuarioFakeDTOFactory()

    return {
        id: 'idFake',
        nome: usuarioFakeEntityDTO.nome,
        chave: usuarioFakeEntityDTO.chave,
        senha_hash: usuarioFakeEntityDTO.senha,
        createdAt: new Date(),
        updatedAt: new Date()
    }
}
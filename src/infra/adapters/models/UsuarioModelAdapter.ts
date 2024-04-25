import { IModelAdapter } from "../../../core/adapters"
import { TUsuarioModelDTO } from "../../models"

export type TUsuarioRepositoryDTO = {
    id: string
    nome: string
    chave: string
    senhaHash: string
    createdAt: Date
    updatedAt: Date
}

class UsuarioModelAdapterClass implements IModelAdapter<TUsuarioModelDTO, TUsuarioRepositoryDTO> {
    public paraRepositoryDTO( usuarioModel: TUsuarioModelDTO ): TUsuarioRepositoryDTO {
        const { id, nome, chave, senha_hash, createdAt, updatedAt } = usuarioModel

        return {
            id, nome, createdAt, updatedAt, chave,
            senhaHash: senha_hash
        }
    }
}

export const UsuarioModelAdapter = new UsuarioModelAdapterClass()
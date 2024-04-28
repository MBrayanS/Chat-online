import { ModelStatic } from "sequelize"

import { TUsuarioModelDTO, UsuarioModel } from "../models"
import { IRepositoryBase, RepositoryBase } from "../../core/repositories"

export type TUsuarioModelCreateDTO = {
    nome: string
    chave: string
    senha_hash: string
}

export type IUsuarioRepository = IRepositoryBase<TUsuarioModelCreateDTO, TUsuarioModelDTO>

export class UsuarioRepository extends RepositoryBase<TUsuarioModelCreateDTO, TUsuarioModelDTO> {
    constructor(
        protected Model: ModelStatic<UsuarioModel>,
        protected ErrosRepositoryAdapter: any
    ) {
        super(Model, ErrosRepositoryAdapter)
    }
}
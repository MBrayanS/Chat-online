import { ModelStatic } from "sequelize"

import { TUsuarioModelDTO, UsuarioModel } from "../models"
import { PostgreSQLRepositoryBase } from "./PostgreSQLRepositoryBase"
import { IRepositoryBase } from "../../core/repositories"

export type TUsuarioModelCreateDTO = {
    nome: string
    chave: string
    senha_hash: string
}

export type IUsuarioRepository = IRepositoryBase<TUsuarioModelCreateDTO, TUsuarioModelDTO>

export class UsuarioRepository extends PostgreSQLRepositoryBase<TUsuarioModelCreateDTO, TUsuarioModelDTO> {
    constructor( protected model: ModelStatic<UsuarioModel> ) {
        super(model)
    }
}
// @ts-ignore
import UsuarioAtributosModel from "../databases/models/UsuarioModel"
import { DataTypes, Model } from "sequelize"

import BancoDeDados from "../databases/database"

export type TUsuarioModelDTO = {
    id: string
    nome: string
    chave: string
    senha_hash: string
    createdAt: Date
    updatedAt: Date
}

export class UsuarioModel extends Model implements TUsuarioModelDTO {
    public declare id: string
    public declare nome: string
    public declare chave: string
    public declare senha_hash: string
    public declare createdAt: Date
    public declare updatedAt: Date
}

const atributosModel = UsuarioAtributosModel(DataTypes)

UsuarioModel.init( atributosModel, {
    sequelize: BancoDeDados.database,
    modelName: 'Usuarios'
})
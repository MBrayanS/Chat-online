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

UsuarioModel.init({
    id: {
        type: DataTypes.UUID,
        allowNull: true,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    chave: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true
    },
    senha_hash: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    sequelize: BancoDeDados.database,
    modelName: 'Usuarios'
})
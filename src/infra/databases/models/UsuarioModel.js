function UsuarioAtributosModel( DataTypes ) {
    return {
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
    }
}

module.exports = UsuarioAtributosModel
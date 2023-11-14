const { DataTypes } = require("sequelize");
const sequelize = require("../database/sequelize");

const Membro = sequelize.define('Membro', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4(),
        primaryKey: true,
        allowNull: false
    },
    ultima_interacao: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    ultima_mensagem: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    usuario_id: {
        type: DataTypes.UUID,
        allowNull: false
    },
    grupo_id: {
        type: DataTypes.UUID,
        allowNull: false
    }
})

module.exports = Membro
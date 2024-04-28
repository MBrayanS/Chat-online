const { MODO_DE_PRODUCAO, DB_DATABASE, DB_DIALECT, DB_HOST, DB_PASSWORD, DB_USER } = require('../../config/config.js')
const diretorios = require('../../config/diretorios')

const baseConfig = {
    logging: false,
    define: {
        freezeTableName: true,
        timestamps: true,
        underscored: false
    },
}

const configuracaoDeProducao = {
    ...baseConfig,
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    host: DB_HOST,
    dialect: DB_DIALECT
}

const configuracaoDeTeste = {
    ...baseConfig,
    dialect: 'sqlite',
    storage: diretorios.databaseInMemory
}

module.exports = MODO_DE_PRODUCAO ? configuracaoDeProducao : configuracaoDeTeste
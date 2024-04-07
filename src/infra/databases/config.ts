import { 
    DB_DATABASE, DB_DIALECT, DB_HOST, DB_PASSWORD, DB_USER, 
    DB_DATABASE_TEST, DB_DIALECT_TEST, DB_HOST_TEST, DB_PASSWORD_TEST, DB_USER_TEST
} from '../../config'

const baseConfig = {
    logging: false,
    define: {
        freezeTableName: true,
        timestamps: true,
        underscored: true
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
    username: DB_USER_TEST,
    password: DB_PASSWORD_TEST,
    database: DB_DATABASE_TEST,
    host: DB_HOST_TEST,
    dialect: DB_DIALECT_TEST
}

const modoDeProducao = process.env.NODE_ENV !== 'test'

export const config = modoDeProducao ? configuracaoDeProducao : configuracaoDeTeste
require('dotenv').config()

// Variaveis do servidor

const PORT = process.env.PORT || '3001'
const MODO_DE_PRODUCAO = process.env.MODO_DE_PRODUCAO === 'true' 

// Variaveis do banco de dados de produção

const DB_HOST = process.env.DB_HOST
const DB_DATABASE = process.env.DB_DATABASE
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_DIALECT = process.env.DB_DIALECT
const DB_PORT = process.env.DB_PORT

// Variaveis do Jason Web Token

const JWT_CHAVE_SECRETA = process.env.JWT_CHAVE_SECRETA || 'lapislazuli-chat'
const JWT_DURACAO_DO_TOKEN = process.env.JWT_DURACAO_DO_TOKEN || '1h'

module.exports = {
    PORT,
    MODO_DE_PRODUCAO,
    DB_HOST,
    DB_DATABASE,
    DB_USER,
    DB_PASSWORD,
    DB_DIALECT,
    DB_PORT,
    JWT_CHAVE_SECRETA,
    JWT_DURACAO_DO_TOKEN
}
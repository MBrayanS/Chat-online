import { configDotenv } from "dotenv"

configDotenv()

// Variaveis do servidor

export const PORT = process.env.PORT || '3001'

// Variaveis do banco de dados de produção

export const DB_HOST = process.env.DB_HOST
export const DB_DATABASE = process.env.DB_DATABASE
export const DB_USER = process.env.DB_USER
export const DB_PASSWORD = process.env.DB_PASSWORD
export const DB_DIALECT = process.env.DB_DIALECT
export const DB_PORT = process.env.DB_PORT

// Variaveis do banco de dados de teste

export const DB_HOST_TEST = process.env.DB_HOST_TEST
export const DB_DATABASE_TEST = process.env.DB_DATABASE_TEST
export const DB_USER_TEST = process.env.DB_USER_TEST
export const DB_PASSWORD_TEST = process.env.DB_PASSWORD_TEST
export const DB_DIALECT_TEST = process.env.DB_DIALECT_TEST
export const DB_PORT_TEST = process.env.DB_PORT_TEST

// Variaveis do Jason Web Token

export const JWT_CHAVE_SECRETA = process.env.JWT_CHAVE_SECRETA || 'lapislazuli-chat'
export const JWT_DURACAO_DO_TOKEN = process.env.JWT_DURACAO_DO_TOKEN || '1h'
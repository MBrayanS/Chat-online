export type TUsuarioEntityCreateDTO = {
    nome: string
    chave: string
    senha: string
}

export type TUsuarioEntityDTO = {
    nome: string
    chave: string
    senhaHash: string
}

export type TUsuarioTokenDTO = {
    id: string
    nome: string
}
import BycryptLibrary from "../../libs/bcrypt"

export interface ICriptografarService {
    criptografar( texto: string ): string
    descriptografar( texto: string, hash: string ): any
}

export class CriptografarService {
    public static criptografar( texto: string ) {
        return BycryptLibrary.criptografar(texto)
    }

    public static descriptografar( texto: string, hash: string ) {
        return BycryptLibrary.descriptografar(texto, hash)
    }
}
import bcrypt from 'bcrypt'

export default class BycryptLibrary {
    private static saltos = 10

    public static criptografar( texto: string ) {
        return bcrypt.hashSync(texto, BycryptLibrary.saltos)
    }

    public static descriptografar( texto: string, hash: string ) {
        return bcrypt.compareSync(texto, hash)
    }
}
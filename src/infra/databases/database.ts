import { Sequelize } from 'sequelize'
import { config } from './config'

export default class BancoDeDados {
    private static _database: Sequelize

    public static get database () {
        if( !BancoDeDados._database ) BancoDeDados.conectar()

        return BancoDeDados._database
    }

    public static async conectar() {
        BancoDeDados._database = new Sequelize(config as any)
    }
}

BancoDeDados.database
import Express from 'express'
import BancoDeDados from '../../databases/database'
import rotasExpress from './routes'

import { ManipuladorDeErros } from './middlewares/ManipuladorDeErros'

export default class AplicacaoExpress {
    readonly aplicacao = Express()
    readonly rotas = rotasExpress

    constructor( protected porta: string ) {}

    public rodar() {
        this.aplicacao.listen( this.porta, () => console.log(`Servidor rodando em http://localhost:${this.porta}`) )
    }

    public async conectarBancoDeDados() {
        await BancoDeDados.conectar()
    }

    public configurar() {
        this.configurarExpress()
        this.configurarRotas()
        this.configurarMiddlewares()
    }

    private configurarExpress() {
        this.aplicacao.use( Express.json() )
        this.aplicacao.use( Express.urlencoded({ extended: true }) )
        this.aplicacao.use( Express.static('./src/app/public') )
    }
    
    private configurarRotas() {
        this.aplicacao.use(this.rotas)
    }

    private configurarMiddlewares() {
        this.aplicacao.use( ManipuladorDeErros.execute )
    }
}
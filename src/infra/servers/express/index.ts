// @ts-ignore
import diretorios from '../../../config/diretorios'

import Express from 'express'
import BancoDeDados from '../../databases/database'
import rotasExpress from './routes/routes'

import { ManipuladorDeErros } from './middlewares/ManipuladorDeErros'

export default class AplicacaoExpress {
    readonly aplicacao = Express()
    readonly rotas = rotasExpress
    readonly diretorios = diretorios

    constructor( protected porta: string ) {}

    public rodar() {
        this.aplicacao.listen( this.porta, () => console.log(`Servidor rodando em http://localhost:${this.porta}`) )
    }

    public async conectarBancoDeDados() {
        await BancoDeDados.conectar()
    }

    public configurar() {
        this.configurarExpress()
        this.configurarEJS()
        this.configurarRotas()
        this.configurarMiddlewares()
    }

    private configurarExpress() {
        this.aplicacao.use( Express.json() )
        this.aplicacao.use( Express.urlencoded({ extended: true }) )
        this.aplicacao.use( Express.static(this.diretorios.public) )
    }

    private configurarEJS() {
        this.aplicacao.set('view engine', 'ejs')
        this.aplicacao.set('views', this.diretorios.views)
    }
    
    private configurarRotas() {
        this.aplicacao.use(this.rotas)
    }

    private configurarMiddlewares() {
        this.aplicacao.use( ManipuladorDeErros.execute )
    }
}
import dontenv from 'dotenv'
import AplicacaoExpress from './infra/servers/express'

import { PORT } from './config'

dontenv.config()

const aplicacao = new AplicacaoExpress(PORT)

aplicacao.configurar()
aplicacao.conectarBancoDeDados()
    .then( () => aplicacao.rodar() )
    .catch( (erro) => console.log(erro) )
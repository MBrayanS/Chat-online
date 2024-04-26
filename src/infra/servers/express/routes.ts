import 'express-async-errors'

import { Router } from 'express'

import { CadastrarController, LogarController } from '../../../modules/ControllersModule'

const rotas = Router()

rotas.post('/cadastrar', CadastrarController.validarBody, CadastrarController.execute)
rotas.post('/logar', LogarController.validarBody, LogarController.execute)

export default rotas
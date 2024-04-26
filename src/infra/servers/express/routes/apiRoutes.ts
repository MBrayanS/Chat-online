import 'express-async-errors'
import { Router } from 'express'

import { CadastrarController, LogarController } from '../../../../modules/ControllersModule'

const rotasDaApi = Router()

rotasDaApi.post('/cadastrar', CadastrarController.validarBody, CadastrarController.execute)
rotasDaApi.post('/logar', LogarController.validarBody, LogarController.execute)

export default rotasDaApi
import { Router } from 'express'
import { ViewsControllers } from '../../../../modules/ViewsControllerModule'

const rotasDasPaginas = Router()

rotasDasPaginas.get('/', ViewsControllers.home)
rotasDasPaginas.get('/cadastrar', ViewsControllers.cadastrar)
rotasDasPaginas.get('/logar', ViewsControllers.logar)

export default rotasDasPaginas
import { Router } from 'express'

import rotasDasPaginas from './viewsRoutes'
import rotasDaApi from './apiRoutes'

const rotasExpress = Router()

rotasExpress.use('/', rotasDasPaginas)
rotasExpress.use('/api', rotasDaApi)

export default rotasExpress
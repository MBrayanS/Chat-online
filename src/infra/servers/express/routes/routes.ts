import { Router } from 'express'

import rotasDaApi from './apiRoutes'

const rotasExpress = Router()

rotasExpress.use('/api', rotasDaApi)

export default rotasExpress
import { ExpressAdapter } from '../app/adapters'

import { ViewsControllers as ViewsControllersClass } from '../app/controllers'

export const ViewsControllers = {
    home: ExpressAdapter.renderizarPagina(ViewsControllersClass.home),
    cadastrar: ExpressAdapter.renderizarPagina(ViewsControllersClass.cadastrar),
    logar: ExpressAdapter.renderizarPagina(ViewsControllersClass.logar),
}
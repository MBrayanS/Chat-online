import { NextFunction, Request, Response } from 'express'
import { IEnviarCookiesController, IRenderizarView, IValidarBodyController } from './AdapterInterfaces'

export class ExpressAdapter {

    public static renderizarPagina( rotaExpress: any ) {
        return function( request: Request, response: Response ) {
            const render: IRenderizarView = ( rota: string ) => response.render(rota)

            return rotaExpress(render)
        }
    }

    public static validarBody( rotaExpress: IValidarBodyController ) {
        return function( request: Request, response: Response, next: NextFunction ) {
            rotaExpress(request.params, request.body)

            next()
        }
    }

    public static enviarCookies( rotaExpress: IEnviarCookiesController ) {
        return async function( request: Request, response: Response ) {
            const { statusCode, token } = await rotaExpress(request.params, request.body)

            response.cookie( 'token', token, { httpOnly: true, secure: true, } )
            response.sendStatus(statusCode)
        }
    }
}
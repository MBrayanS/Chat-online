import { Request, Response, NextFunction } from 'express'
import { ErroCustomizado, FalhaNaRequisicaoError } from '../../../../errors'

export class ManipuladorDeErros {
    private static sistemaEmModoDeTeste = process.env.NODE_ENV === 'test'

    public static execute( erro: any, request: Request, response: Response, next: NextFunction ) {
        const oErroEhInesperado = !(erro instanceof ErroCustomizado)
        
        if( oErroEhInesperado ) {
            console.log(erro)

            erro = new FalhaNaRequisicaoError({ logging: false })
        }
        
        ManipuladorDeErros.retornarErro(erro, request, response, next)
    }
    
    private static retornarErro( erro: FalhaNaRequisicaoError, request: Request, response: Response, next: NextFunction ) {
        const { statusCode, message, name, logging } = erro
        
        if( logging && !ManipuladorDeErros.sistemaEmModoDeTeste ) console.error(erro)
            
        response.status(statusCode).json({ code: statusCode, message, name })
    }
}
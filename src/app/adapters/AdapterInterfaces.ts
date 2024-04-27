export type TEnviarCookiesControllerResponse = {
    statusCode: number
    token: string
}

export interface IEnviarCookiesController {
    ( params: any, body: any ): Promise<TEnviarCookiesControllerResponse>
}

export interface IValidarBodyController { ( params: any, body: any ): void }

export interface IRenderizarView { ( rota: string ): void }
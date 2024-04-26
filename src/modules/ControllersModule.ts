import {
    CadastrarController as CadastrarControllerClass,
    LogarController as LogarControllerClass
} from "../app/controllers"

import { AutenticacaoService, ValidacaoService } from "../infra/service"

import { CriarNovoUsuarioUseCase, EncontrarUsuarioCadastradoUseCase } from "./UseCasesModule"

import { ExpressAdapter } from "../app/adapters"

const cadastrarController = new CadastrarControllerClass(CriarNovoUsuarioUseCase, AutenticacaoService, ValidacaoService)
const logarController = new LogarControllerClass(EncontrarUsuarioCadastradoUseCase, AutenticacaoService, ValidacaoService)

export const CadastrarController = {
    validarBody: ExpressAdapter.validarBody(cadastrarController.validarBody),
    execute: ExpressAdapter.enviarCookies(cadastrarController.execute)
}
export const LogarController = {
    validarBody: ExpressAdapter.validarBody(logarController.validarBody),
    execute: ExpressAdapter.enviarCookies(logarController.execute)
}
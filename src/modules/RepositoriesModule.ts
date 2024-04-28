
import { UsuarioModel } from "../infra/models"

import { UsuarioRepository as UsuarioRepositoryClass } from "../infra/repositories"
import { ErrosRepositoryAdapter } from "./ErrosAdapterModule"

export const UsuarioRepository = new UsuarioRepositoryClass(UsuarioModel, ErrosRepositoryAdapter)
import { UsuarioModel } from "../infra/models"

import { UsuarioRepository as UsuarioRepositoryClass } from "../infra/repositories"

export const UsuarioRepository = new UsuarioRepositoryClass(UsuarioModel)
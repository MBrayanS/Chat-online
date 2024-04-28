// @ts-ignore
import { MODO_DE_PRODUCAO } from "../config/config"

import { ErrosPostgreSQLAdapter } from "../infra/adapters/errors"
import { ErrosSqliteAdapter } from "../infra/adapters/errors/ErrosSqliteAdapter"

export const ErrosRepositoryAdapter = MODO_DE_PRODUCAO ? ErrosPostgreSQLAdapter : ErrosSqliteAdapter
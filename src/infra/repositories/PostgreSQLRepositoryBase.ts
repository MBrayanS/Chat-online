import { IRepositoryBase } from '../../core/repositories'
import { ErrosPostgreSQLAdapter } from '../adapters/errors'

export abstract class PostgreSQLRepositoryBase<TModelCreateDTO, TModelDTO> implements IRepositoryBase<TModelCreateDTO, TModelDTO> {

    constructor( protected model: any ) {}

    async criar( modelCreateDTO: TModelCreateDTO ) {
        try {
            const entityModel = await this.model.create(modelCreateDTO)
    
            return entityModel.toJSON()
        }

        catch( erro: any ) { throw ErrosPostgreSQLAdapter.execute(erro) }
    }

    async encontrar( propriedades: Partial<TModelDTO> ) {
        try {
            const entityModel = await this.model.findOne({ where: propriedades })

            if( !entityModel ) return false

            return entityModel.toJSON()
        }

        catch( erro: any ) { throw ErrosPostgreSQLAdapter.execute(erro) }
    }
}
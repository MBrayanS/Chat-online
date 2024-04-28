export interface IRepositoryBase<TModelCreateDTO, TModelDTO> {
    criar( modelCreateDTO: TModelCreateDTO ): Promise<TModelDTO>
    encontrar( propriedades: Partial<TModelDTO> ): Promise<TModelDTO | false>
}

export class RepositoryBase<TModelCreateDTO, TModelDTO> implements IRepositoryBase<TModelCreateDTO, TModelDTO> {

    constructor(
        protected Model: any,
        protected ErrosRepositoryAdapter: any
    ) {}

    async criar( modelCreateDTO: TModelCreateDTO ) {
        try {
            const entityModel = await this.Model.create(modelCreateDTO)
    
            return entityModel.toJSON()
        }

        catch( erro: any ) { throw this.ErrosRepositoryAdapter.execute(erro) }
    }

    async encontrar( propriedades: Partial<TModelDTO> ) {
        try {
            const entityModel = await this.Model.findOne({ where: propriedades })

            if( !entityModel ) return false

            return entityModel.toJSON()
        }

        catch( erro: any ) { throw this.ErrosRepositoryAdapter.execute(erro) }
    }
}
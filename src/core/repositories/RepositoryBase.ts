export interface IRepositoryBase<TModelCreateDTO, TModelDTO> {
    criar( modelCreateDTO: TModelCreateDTO ): Promise<TModelDTO>
    encontrar( propriedades: Partial<TModelDTO> ): Promise<TModelDTO | false>
}
export interface IModelAdapter<TModelDTO, TRepositoryDTO> {
    paraRepositoryDTO( modelDTO: TModelDTO ): TRepositoryDTO
}
import { Prodotto } from 'src/entities/Prodotto';
import { Categoria } from 'src/entities/Categoria';
import { IGenericRepository } from '../repository/IGenericRepository';

export interface IDataService {
  prodotti: IGenericRepository<Prodotto>;
  categorie: IGenericRepository<Categoria>;
}

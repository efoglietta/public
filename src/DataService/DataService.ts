import { Categoria } from 'src/entities/Categoria';
import { Prodotto } from 'src/entities/Prodotto';
import { IGenericRepository } from '../repository/IGenericRepository';
import { IDataService } from './IDataService';

export class DataService implements IDataService {
  prodotti: IGenericRepository<Prodotto>;
  categorie: IGenericRepository<Categoria>;
}

import connection from '../models/connection';
import ProductModel from '../models/product.model';
import IProduct from '../interfaces/product.interface';

class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async getAll(): Promise<IProduct[]> {
    const books = await this.model.getAll();
    return books;
  }

  public async register(product: IProduct): Promise<IProduct> {
    return this.model.register(product);
  }
}

export default ProductService;
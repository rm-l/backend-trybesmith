import { Pool } from 'mysql2/promise';
import IProduct from '../interfaces/product.interface';

export default class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<IProduct[]> {
    const result = await this.connection.execute('SELECT * FROM Trybesmith.products');
    const [rows] = result;
    return rows as IProduct[];
  }

  // public async create(book: Book): Promise<Book> {
  //   const { title, price, author, isbn } = book;
  //   const result = await this.connection.execute<ResultSetHeader>(
  //     'INSERT INTO books (title, price, author, isbn) VALUES (?, ?, ?, ?)',
  //     [title, price, author, isbn],
  //   );
  //   const [dataInserted] = result;
  //   const { insertId } = dataInserted;
  //   return { id: insertId, ...book };
  // }
}

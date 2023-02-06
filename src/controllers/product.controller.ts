import { Request, Response } from 'express';
import ProductService from '../services/product.service';

class ProductController {
  constructor(private productService = new ProductService()) { }

  public getAll = async (_req: Request, res: Response) => {
    const products = await this.productService.getAll();
    res.status(200).json(products);
  };

  public register = async (req: Request, res: Response) => {
    const product = req.body;

    const createdProduct = await this.productService.register(product);
    res.status(201).json(createdProduct);
  };
}

export default ProductController;
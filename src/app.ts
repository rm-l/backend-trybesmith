import express, { Request, Response } from 'express';
import ProductRoutes from './routes/product.routes';
import UserRoutes from './routes/user.routes';
import OrderRoutes from './routes/order.routes';

const app = express();

app.use(express.json());

app.get('/', (_req: Request, res: Response) => {
  res.status(200).send('test');
});

app.use(ProductRoutes);
app.use(UserRoutes);
app.use(OrderRoutes);

export default app;

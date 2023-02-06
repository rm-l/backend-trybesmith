import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import UserService from '../services/user.service';

const { JWT_SECRET } = process.env;

class UserController {
  constructor(private userService = new UserService()) { }

  public register = async (req: Request, res: Response) => {
    const user = req.body;
    
    const createdUser = await this.userService.register(user);

    const payload = {
      id: createdUser.id,
      username: createdUser.username,
    };
    const token = jwt.sign(payload, JWT_SECRET as string);
    res.status(201).json({ token });
  };
}

export default UserController;
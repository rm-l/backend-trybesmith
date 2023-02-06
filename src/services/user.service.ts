import connection from '../models/connection';
import UserModel from '../models/user.model';
import IUser from '../interfaces/user.interface';

export default class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async register(user: IUser): Promise<IUser> {
    return this.model.register(user);
  }
}

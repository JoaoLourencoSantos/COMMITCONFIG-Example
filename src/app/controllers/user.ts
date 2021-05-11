import { Request, Response } from 'express';

import UserService from '../services/user';

class UserController {
  findAll = async (_: Request, res: Response) => {
    res.status(200).json(await UserService.findAll());
  };
}

export default new UserController();

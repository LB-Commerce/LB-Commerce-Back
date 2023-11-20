import { Request, Response } from "express";
import { TUserResponse, TUserRequest } from "../../interfaces/user.interfaces";
import { createUserService } from "../../services/users/createUser.service";

export const createUsersController = async (
  req: Request,
  res: Response
): Promise<Response<TUserResponse>> => {
  const users: TUserRequest = req.body;

  const newUsers: TUserResponse = await createUserService(users);

  return res.status(201).json(newUsers);
};

import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { Users } from "../entities/user.entity";
import { AppError } from "../errors/AppError";

export const userExistsCreate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, cpf } = req.body;

  const id = req.params.id ? parseInt(req.params.id) : res.locals.userId;

  const userRepository = AppDataSource.getRepository(Users);

  const existingUser = await userRepository.findOne({
    where: [{ email }, { cpf }, { id }],
  });

  if (existingUser) {
    if (existingUser.email === email) {
      throw new AppError("This email already exists", 409);
    }
    if (existingUser.cpf === cpf) {
      throw new AppError("This cpf already exists", 409);
    }
    if (!existingUser) {
      throw new AppError("This user is not exists", 409);
    }
  }

  return next();
};

export const userExistsbyId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id ? parseInt(req.params.id) : res.locals.userId;

  const userRepository = AppDataSource.getRepository(Users);

  const existingUser = await userRepository.findOne({
    where: [{ id }],
  });

  if (!existingUser) {
    throw new AppError("This user is not exists", 409);
  }

  return next();
};

export const isOwnerOrAdminUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userId = req.params.id ? parseInt(req.params.id) : res.locals.userId;

  const repository = AppDataSource.getRepository(Users);

  const user = await repository.findOne({
    where: { id: res.locals.userId },
  });

  const userFind = await repository.findOne({
    where: { id: userId },
  });

  if (user?.is_admin === true || user?.id == userFind?.id) {
    return next();
  }

  throw new AppError(`This does not belong to you`, 401);
};

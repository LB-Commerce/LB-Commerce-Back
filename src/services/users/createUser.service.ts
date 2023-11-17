import { AppDataSource } from "../../data-source";
import { Users } from "../../entities/user.entity";
import { TUserRequest, TUserResponse } from "../../interfaces/user.interfaces";
import { userSchemaResponse } from "../../schemas/users.schema";

export const createUserService = async (
  userData: TUserRequest
): Promise<TUserResponse> => {
  const { ...userFields } = userData;

  const userRepository = AppDataSource.getRepository(Users);

  const newUser = userRepository.create({
    ...userFields,
  });

  await userRepository.save(newUser);

  return userSchemaResponse.parse(newUser);
};

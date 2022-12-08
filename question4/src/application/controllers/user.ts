import { Request, Response } from "express";
import MemoryUsers, {
  UserReqBody,
  DatabaseUser,
} from "../../framework/database/store";

const MemoryUserController = () => {
  const memoryUser = new MemoryUsers();

  const getUserById = (req: Request, res: Response) => {
    const { id } = req.params;
    res.status(200).send({ data: memoryUser.getUserById(id) });
  };

  const addUser = (req: Request, res: Response) => {
    const body: UserReqBody = req.body;
    memoryUser.addUser({
      ...body,
    });
    res.status(200).send({ message: "Successfully added user" });
  };

  const removeUser = (req: Request, res: Response) => {
    const { id } = req.params;
    memoryUser.removeUser(id);
    res.status(200).send({ message: "removed user" });
  };

  const listUsers = async (req: Request, res: Response) => {
    const { name, email } = req.query;
    const list = memoryUser.listUsers({
      name: name?.toString(),
      email: email?.toString(),
    });
    res.status(200).send({
      data: {
        users: list,
      },
    });
  };

  return { listUsers, addUser, removeUser, getUserById };
};

export const DBUSerController = () => {
  const databaseUser = new DatabaseUser();

  const getUserById = async (req: Request, res: Response) => {
    const { id } = req.params;

    const user = await databaseUser.getUserById(id);
    res.status(200).send({ data: user });
  };

  const addUser = (req: Request, res: Response) => {
    const body: UserReqBody = req.body;

    res.status(200).send({ message: "Successfully added user" });
  };

  const removeUser = (req: Request, res: Response) => {
    const { id } = req.params;

    res.status(200).send({ message: "removed user" });
  };

  const listUsers = async (req: Request, res: Response) => {
    const { name, email } = req.query;
    const list = await databaseUser.listUsers({});
    res.status(200).send({
      data: {
        users: list,
      },
    });
  };

  return { listUsers, addUser, removeUser, getUserById };
};

export default MemoryUserController;

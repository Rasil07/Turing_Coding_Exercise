import UserModel from "./model/user";

export type UserEntity = {
  id: string;
  name: string;
  email: string;
};

export type UserFilterQuery = {
  name?: string;
  email?: string;
};

export type UserReqBody = {
  name: string;
  email: string;
};

class MemoryUsers {
  users: UserEntity[] = [];

  public addUser(data: UserReqBody) {
    const newUser: UserEntity = {
      id: `${this.users.length + 1}`,
      email: data.email,
      name: data.name,
    };
    this.users.push(newUser);
  }

  public removeUser(id: string) {
    const userIndex = this.users.findIndex((user) => user.id === id);

    if (userIndex < 0) {
      throw new Error("Could not find user");
    }

    this.users.splice(userIndex, 1);
  }

  public getUserById(id: string) {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex < 0) {
      throw new Error("Could not find user");
    }
    return this.users[userIndex];
  }

  private filterUsers(data: UserEntity[], filter: UserFilterQuery) {
    let filteredUsers = [...data];
    for (const key in filter) {
      if (!filter[key]) continue;
      filteredUsers = filteredUsers.filter((user) => user[key] === filter[key]);
    }

    return filteredUsers;
  }

  public listUsers(filter: UserFilterQuery) {
    // const filtered
    return this.filterUsers(this.users, filter);
  }
}

export class DatabaseUser {
  // Sample class that will use mongodb as datasource
  model = UserModel;

  public addUser(data: UserReqBody) {}

  public removeUser(id: string) {
    return this.model.deleteOne({ id });
  }

  public getUserById(id: string) {
    return this.model.find({ id });
  }

  private filterUsers(data: UserEntity[], filter: UserFilterQuery) {}

  public listUsers(filter: UserFilterQuery) {
    return this.model.find();
  }
}

export default MemoryUsers;

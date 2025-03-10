import { Injectable } from '@nestjs/common';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'john',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'maria',
    },
  ];

  findOne(username: string) {
    return this.users.find((user) => user.username === username);
  }
}

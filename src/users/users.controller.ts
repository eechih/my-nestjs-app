import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { Public } from '../auth/decorators/public.decorator';
import { RolesGuard } from '../common/guards/roles.guard';
import { Role } from './entities/role.entity';
import { User } from './entities/user.entity';

const users: User[] = [
  new User({
    id: 1,
    firstName: 'Kamil',
    lastName: 'Mysliwiec',
    password: 'password',
    role: new Role({ id: 1, name: 'admin' }),
  }),
];

@UseGuards(RolesGuard)
@Controller('users')
@UseInterceptors(ClassSerializerInterceptor)
export class UsersController {
  @Get()
  @Public()
  async findAll(): Promise<User[]> {
    return users;
  }
}

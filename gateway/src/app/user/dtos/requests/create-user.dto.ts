import { UserRole, UserStatus } from '../../user.enum';

export class CreateUserDto {
  name!: string;
  email!: string;
  password!: string;
  passwordConfirm!: string;
  role!: UserRole;
  status!: UserStatus;
}

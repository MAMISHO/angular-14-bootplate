const UserRole = {
  Admin: 'ADMIN',
  User: 'USER',
} as const;
export type UserRoleType = typeof UserRole[keyof typeof UserRole];

export interface IUser {
  username?: string;
  name?: string;
  surname?: string;
  email?: string;
  password?: string;
  role?: UserRoleType;
  passwordConfirmation?: string;
  rememberme?: boolean;
  uuid?: string;
  passwordVerified(): boolean;
  isOkpasswordFormat(): boolean;
}

export class User implements IUser {
  constructor(
    public username?: string,
    public name?: string,
    public surname?: string,
    public email?: string,
    public password?: string,
    public role?: UserRoleType,
    public rememberme?: boolean,
    public passwordConfirmation?: string,
    public uuid?: string
  ) {}

  passwordVerified(): boolean {
    return this.passwordConfirmation !== undefined && this.passwordConfirmation === this.password;
  }

  isOkpasswordFormat(): boolean {
    return this.password !== undefined && this.password.length > 7;
  }
}

export class RequestLogin {
  constructor(public username?: string, public password?: string, public rememberMe?: boolean) {}
}

export class ResponseLogin {
  constructor(public user?: User, public token?: string) {}
}

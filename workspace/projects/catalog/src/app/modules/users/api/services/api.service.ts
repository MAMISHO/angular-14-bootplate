import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { RequestLogin, ResponseLogin, User } from '../models/user.model';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(
    private userService: UserService // private localStorageService: LocalStorageService
  ) {}

  public async registerUser(user: User): Promise<User | undefined> {
    return await firstValueFrom(this.userService.register(user));
  }

  public async loginUser(user: User): Promise<boolean> {
    const req: RequestLogin = new RequestLogin(user.username, user.password);
    // const userResponse = await this.userService.login(user).toPromise();
    const res: ResponseLogin = await firstValueFrom(this.userService.login(req));
    if (!res || !res.token) {
      return Promise.resolve(false);
    }
    localStorage.setItem('token', res.token);
    return Promise.resolve(true);
  }
}

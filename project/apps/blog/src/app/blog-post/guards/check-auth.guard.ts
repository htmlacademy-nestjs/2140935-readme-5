import { HttpService } from '@nestjs/axios';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

const AUTH_URL = 'http://localhost:3030/api/auth';

@Injectable()
export class CheckAuthGuard implements CanActivate {
  constructor(
    private readonly httpService: HttpService,
  ) {}

  public async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const { data } = await this.httpService.axiosRef.post(`${AUTH_URL}/check`, {}, {
      headers: {
        'Authorization': request.headers['authorization']
      }
    });

    request['user'] = data;

    return true;
  }
}

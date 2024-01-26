import { ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard as AuthGuardInner } from '@nestjs/passport';

@Injectable()
export class AuthGuard extends AuthGuardInner('jwt') {
  constructor(private reflector: Reflector) {
    super();
  }

  canActivate(context: ExecutionContext) {
    const idPublic = this.reflector.getAllAndOverride('isPublic', [
      context.getHandler(),
      context.getClass(),
    ]);
    if (idPublic) return true;

    return super.canActivate(context);
  }
}

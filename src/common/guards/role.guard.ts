import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from '../decorators';
import { RoleEnum } from '../enums';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<RoleEnum[]>(
      ROLES_KEY,
      [context.getHandler(), context.getClass()],
    );
    console.log(
      '🚀 ~ file: role.guard.ts:16 ~ RolesGuard ~ canActivate ~ requiredRoles:',
      requiredRoles,
    );
    if (!requiredRoles) {
      return true;
    }
    const { user } = context.switchToHttp().getRequest();
    console.log(
      '🚀 ~ file: role.guard.ts:23 ~ RolesGuard ~ canActivate ~ user:',
      user,
    );
    return requiredRoles.some((role) => {
      console.log(
        '🚀 ~ file: role.guard.ts:24 ~ RolesGuard ~ returnrequiredRoles.some ~ role:',
        user.role === role,
      );
      return user.role === role;
    });
  }
}

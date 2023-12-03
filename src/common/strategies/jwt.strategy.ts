import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { DataServices } from '../../repository';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly configService: ConfigService,
    private readonly db: DataServices,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get('accessToken.secret'),
    });
  }

  async validate(payload: any) {
    const user = await this.db.user.findOneById(payload._id);
    console.log(
      '🚀 ~ file: jwt.strategy.ts:22 ~ JwtStrategy ~ validate ~ user:',
      user,
    );
    return user;
  }
}

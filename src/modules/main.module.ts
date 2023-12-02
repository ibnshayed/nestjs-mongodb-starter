import { Module } from '@nestjs/common';
import { AuthModule } from './auth';
import { UserModule } from './user';

@Module({
  imports: [AuthModule, UserModule],
})
export class MainModule {}

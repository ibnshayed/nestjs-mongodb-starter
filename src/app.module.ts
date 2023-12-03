import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RolesGuard } from './common';
import { ConfigurationModule } from './configs';
import { MainModule } from './modules/main.module';
import { MongoDBModule } from './repository';

@Module({
  imports: [ConfigurationModule, MongoDBModule, MainModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}

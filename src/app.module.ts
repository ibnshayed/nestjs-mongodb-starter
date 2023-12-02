import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigurationModule } from './configs';
import { MainModule } from './modules/main.module';
import { MongoDBModule } from './repository';

@Module({
  imports: [ConfigurationModule, MongoDBModule, MainModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

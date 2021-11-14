import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DeezGateway } from './deez.gateway';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, DeezGateway],
})
export class AppModule {}

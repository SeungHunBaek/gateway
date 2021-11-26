import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CovidController } from './covid/covid.controller';
import { CovidService } from './covid/covid.service';

@Module({
  imports: [],
  controllers: [AppController, CovidController],
  providers: [AppService, CovidService],
})
export class AppModule {}

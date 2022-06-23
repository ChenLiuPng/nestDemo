import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AbcdController } from './abcd/abcd.controller';
import { AbttController } from './abtt/abtt.controller';

@Module({
  imports: [],
  controllers: [AppController, AbcdController, AbttController],
  providers: [AppService],
})
export class AppModule {}

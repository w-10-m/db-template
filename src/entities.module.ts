import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Example } from './entities';

@Module({
  imports: [TypeOrmModule.forFeature([Example])],
  providers: [Example],
  exports: [TypeOrmModule, Example],
})
export class EntitiesModule {}

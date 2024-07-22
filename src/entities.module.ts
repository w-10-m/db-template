import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Test } from './entities/test.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Test])],
  exports: [TypeOrmModule],
})
export class EntitiesModule {}

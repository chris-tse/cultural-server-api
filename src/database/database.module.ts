import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { dataSourceOptions } from '../../db/data-source'

@Module({
  imports: [TypeOrmModule.forRoot({ ...dataSourceOptions, synchronize: process.env.NODE_ENV !== 'production' })],
})
export class DatabaseModule {}

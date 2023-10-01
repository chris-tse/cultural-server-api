import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DATABASE_HOST, // Change to your PostgreSQL server's host
  port: Number(process.env.PORT) || 5432, // Change to your PostgreSQL server's port
  username: process.env.USER,
  password: 'your_password',
  database: 'your_database',
  entities: [__dirname + '/**/*.entity.{ts,js}'],
  synchronize: true, // Set to false in production
};

export default typeOrmConfig;

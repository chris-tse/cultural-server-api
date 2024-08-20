import { DataSource, DataSourceOptions } from 'typeorm'
import 'dotenv/config'
export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/db/migrations/*.js'],
}

console.log('db connection args')
console.log(dataSourceOptions)

const dataSource = new DataSource(dataSourceOptions)

export default dataSource

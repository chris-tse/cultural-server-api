import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  const config = new DocumentBuilder()
    .setTitle('Chris Tse Resume API')
    .setDescription('My resume as a REST API')
    .setVersion('1.0')
    .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('/', app, document, { customSiteTitle: 'Chris Tse Resume API' })

  await app.listen(process.env.PORT || '3000', '0.0.0.0')
}
bootstrap()

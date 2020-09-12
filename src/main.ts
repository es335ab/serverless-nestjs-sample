import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { HOST_WEB_CLIENT } from './config/appConfig'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.enableCors({
    origin: ['http://localhost:8080', 'http://localhost:4000', HOST_WEB_CLIENT],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  })
  await app.listen(3000)
}
bootstrap()

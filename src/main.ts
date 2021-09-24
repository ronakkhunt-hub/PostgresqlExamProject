import { NestFactory } from '@nestjs/core';
import { MainModule } from './main.module'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { config } from 'dotenv';
import { ValidationPipe } from '@nestjs/common';
config();

const PORT = 8000;

async function bootstrap() {
  const app = await NestFactory.create(MainModule);
  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('Units Engine')
    .setDescription('Memberships Made Easy')
    .setVersion('1.0')
    .addBearerAuth({ type: 'apiKey', name: 'Authorization', in: 'header' })
    .build()

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('/swagger', app, document);

  await app.listen(PORT, () => {
    console.log(`Server Started At the ${PORT}`);
  });
}

bootstrap();

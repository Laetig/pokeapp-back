import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  //instance de l'appli stockée dans app
  const app = await NestFactory.create(AppModule);

  const swaggerOptions = new DocumentBuilder()
    .setTitle('Pokedex API')
    .setDescription('OpenAPI of the Pokedex API')
    .setVersion('1.0')
    .addTag('pokemon')
    .build();

  const document = SwaggerModule.createDocument(app, swaggerOptions);
  SwaggerModule.setup('pokedexApi', app, document);

  await app.listen(3000);
}
bootstrap(); //si problème, ajout de : bootstrap().catch(console.error);

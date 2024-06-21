import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PokemonModule } from './poke-api/poke-api.module';
import { PokemonController } from './poke-api/poke-api.controller';
import { PokemonFetchService } from './poke-api/poke-api.service';

@Module({
  imports: [AppModule, PokemonModule],
  controllers: [AppController, PokemonController],
  providers: [AppService, PokemonFetchService]
})
export class AppModule {}

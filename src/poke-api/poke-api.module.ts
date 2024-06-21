import { Module } from '@nestjs/common';
import { PokemonController } from './poke-api.controller';
import { PokemonFetchService } from './poke-api.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    HttpModule.register({
      baseURL: 'https://pokeapi.co/api/v2',
      timeout: 5000 //par défaut: 0ms
    })
  ],
  controllers: [PokemonController],
  providers: [PokemonFetchService],
  exports: [PokemonFetchService]
})
export class PokemonModule {}

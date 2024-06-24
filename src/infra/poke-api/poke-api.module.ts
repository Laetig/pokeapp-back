import { Module } from '@nestjs/common';
import { PokeApiController } from './poke-api.controller';
import { PokeApiService } from './poke-api.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    HttpModule.register({
      baseURL: 'https://pokeapi.co/api/v2',
      timeout: 10000 //par défaut: 0ms
    })
  ],
  controllers: [PokeApiController],
  providers: [PokeApiService],
  exports: [PokeApiService]
})
export class PokeApiModule {}

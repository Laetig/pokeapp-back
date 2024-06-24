import { Controller, Get } from '@nestjs/common';
import { PokeApiService } from './poke-api.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('PokeApi Provider')
@Controller('poke-api')
export class PokeApiController {
  constructor(private readonly pokeApiService: PokeApiService) {}

  @Get()
  async fetchPokemon() {
    return await this.pokeApiService.fetchPokemons();
  }
}

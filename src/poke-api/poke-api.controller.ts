import { Controller, Get } from '@nestjs/common';
import { PokemonFetchService } from './poke-api.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('PokeAPI Provider')
@Controller('poke-api')
export class PokemonController {
  //service injecté à travers le constructeur de classe = injection de dépendance
  constructor(private pokemonsFetchService: PokemonFetchService) {}

  @Get()
  async fetchPokemonControl() {
    return await this.pokemonsFetchService.fetchPokemon;
    // const pokemonData =
    //   await this.pokemonsFetchService.fetchPokemonDataAndWriteJSON();
    // return pokemonData;
  }
}

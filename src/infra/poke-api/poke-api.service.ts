import { HttpService } from '@nestjs/axios';
import { Inject, Injectable, LoggerService } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { PokemonResponse } from './types/pokemon-response';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';

@Injectable()
export class PokeApiService {
  private readonly pokemonEndpoint = `pokemon`;
  constructor(
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,
    private readonly httpService: HttpService
  ) {}

  async fetchPokemons(): Promise<PokemonResponse[]> {
    // 1 à 1008
    /*
    //Fait un appel, le termine, fait le second appel, le termine etc...
    const startProcedural = new Date().getTime();
    const pokemonsProcedural: PokemonResponse[] = [];
    for (let i = 1; i <= 1008; i++) {
      const { data } = await firstValueFrom(
        this.httpService.get<PokemonResponse>(
          `${this.pokemonSpeciesEndpoint}/${i}`,
        ),
      );
      pokemonsProcedural.push(data);
    }
    console.log(pokemonsProcedural.length);
    console.log(`Time procedural: ${new Date().getTime() - startProcedural}ms`);
    */

    //envoi tout en même temps, attend le retour puis renvoit le tout
    const startParallel = new Date().getTime();
    const ids = Array.from({ length: 1008 }, (_, i) => i + 1);
    const pokemons = await Promise.all(
      ids.map(async (i): Promise<PokemonResponse> => {
        const { data } = await firstValueFrom(
          this.httpService.get<PokemonResponse>(`${this.pokemonEndpoint}/${i}`)
        );
        return {
          id: data.id,
          name: data.name,
          types: data.types,
          sprites: { front_default: data.sprites.front_default }
        };
      })
    );
    // console.log(pokemons.length);
    // console.log(`Time parallel: ${new Date().getTime() - startParallel}ms`);

    // fs.writeFileSync(`pokemonsList.json`, JSON.stringify(pokemons, null, 2));

    this.logger.log(
      `Time to fetch pokemons: ${new Date().getTime() - startParallel}ms`
    );

    return pokemons;
  }
}

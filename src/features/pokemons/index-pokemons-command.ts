import { Command, CommandRunner } from 'nest-commander';
import { Inject, LoggerService } from '@nestjs/common';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { PokeApiService } from 'src/infra/poke-api/poke-api.service';

@Command({
  name: 'pokemons:index',
  description: 'Index pokemons in terminal'
})
export class IndexPokemonsCommand extends CommandRunner {
  constructor(
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,
    private readonly pokeApiService: PokeApiService
  ) {
    super();
  }

  async run(): Promise<void> {
    this.logger.log('Indexing pokemons');
    const pokemons = await this.pokeApiService.fetchPokemons();
    this.logger.log(`Pokemons fetched: ${pokemons.length}`);
  }
}

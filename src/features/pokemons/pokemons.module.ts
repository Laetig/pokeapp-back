import { Module } from '@nestjs/common';
import { IndexPokemonsCommand } from './index-pokemons-command';
import { PokeApiModule } from 'src/infra/poke-api/poke-api.module';

@Module({
  imports: [PokeApiModule],
  providers: [IndexPokemonsCommand]
})
export class PokemonsModule {}

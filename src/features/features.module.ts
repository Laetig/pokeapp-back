import { Module } from '@nestjs/common';
import { PokemonsModule } from './pokemons/pokemons.module';

@Module({
  imports: [PokemonsModule],
  exports: [PokemonsModule]
})
export class FeaturesModule {}

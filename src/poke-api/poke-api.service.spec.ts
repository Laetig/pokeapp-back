import { Test, TestingModule } from '@nestjs/testing';
import { PokemonFetchService } from './poke-api.service';

describe('GetPokemonFromApiService', () => {
  let service: PokemonFetchService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PokemonFetchService]
    }).compile();

    service = module.get<PokemonFetchService>(PokemonFetchService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

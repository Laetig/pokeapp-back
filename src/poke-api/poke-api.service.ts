import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
//import * as fs from 'fs'; //middleware fileSystem

@Injectable()
export class PokemonFetchService {
  constructor(private readonly httpService: HttpService) {}

  async fetchPokemon() {
    return 'Access to the API from the service';
  }
}

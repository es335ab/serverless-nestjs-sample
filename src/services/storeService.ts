import { Injectable } from '@nestjs/common'
import { StoreRepository } from '../repositories/StoreRepository'
import { Store } from '../models/store'

@Injectable()
export class StoreService {
  constructor(private readonly storeRepository: StoreRepository) {}
  findStore(): Store {
    return this.storeRepository.findStore()
  }
}

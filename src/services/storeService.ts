import { Injectable } from '@nestjs/common'
import { StoreRepository } from '../repositories/StoreRepository'
import { Store } from '../models/store'

@Injectable()
export class StoreService {
  constructor(private readonly storeRepository: StoreRepository) {}
  findStore(id: string): Promise<Store | undefined> {
    const primaryKey = { id }
    return this.storeRepository.findByPrimaryKey(primaryKey)
  }
}

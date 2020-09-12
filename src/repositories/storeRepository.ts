import { Injectable } from '@nestjs/common'
import { Store } from '../models/store'
import { Repository } from './repository'

@Injectable()
export class StoreRepository extends Repository<Store> {
  constructor() {
    super()
  }

  public findStore() {
    return {
      id: 'abcde',
      name: '店舗名'
    } as Store
  }
}



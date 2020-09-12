import { Injectable } from '@nestjs/common'
import { Store } from '../models/store'
import { Repository } from './repository'
import { TableName } from '../config/db'

@Injectable()
export class StoreRepository extends Repository<Store> {
  constructor() {
    super(TableName.Store)
  }
}

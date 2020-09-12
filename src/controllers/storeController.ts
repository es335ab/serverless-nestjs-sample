import { Controller, Get } from '@nestjs/common'
import { StoreService } from '../services/storeService'
import { Store } from '../models/store'

@Controller('/stores')
export class StoreController {
  constructor(private readonly storeService: StoreService) {}

  @Get('/:id')
  getStore(): Store {
    return this.storeService.findStore()
  }
}

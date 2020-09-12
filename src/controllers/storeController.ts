import { Request } from 'express'
import { Controller, Get, Req, Param } from '@nestjs/common'
import { StoreService } from '../services/storeService'
import { Store } from '../models/store'

@Controller('/stores/')
export class StoreController {
  constructor(private readonly storeService: StoreService) {}

  @Get(':id')
  async getStore(@Param() params): Promise<Store | undefined> {
    const store : Store | undefined =  await this.storeService.findStore(params.id)

    if (!store) {
      return undefined
    }

    return store
  }
}

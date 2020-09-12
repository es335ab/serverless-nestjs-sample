import { Module } from '@nestjs/common'

// controllers
import { AppController } from './controllers/appController'
import { StoreController } from './controllers/storeController'

// services
import { AppService } from './services/appService'
import { StoreService } from './services/storeService'

// repositories
import { StoreRepository } from './repositories/StoreRepository'

@Module({
  imports: [],
  controllers: [
    AppController,
    StoreController
  ],
  providers: [
    // services
    AppService,
    StoreService,

    // repositories
    StoreRepository
  ]
})
export class AppModule {}

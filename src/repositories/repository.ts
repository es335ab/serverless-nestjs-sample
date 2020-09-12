import { Injectable } from '@nestjs/common'
import { DynamoDB } from 'aws-sdk'
import { IS_OFFLINE } from '../config/appConfig'

@Injectable()
export class Repository<T> {
  protected client: DynamoDB.DocumentClient;

  constructor(private tableName: string) {
    this.client = IS_OFFLINE
      ? new DynamoDB.DocumentClient({
          region: 'localhost',
          endpoint: 'http://localhost:8000',
          convertEmptyValues: true,
        })
      : new DynamoDB.DocumentClient({ convertEmptyValues: true })
  }

  public async findByPrimaryKey(primaryKey: DynamoDB.DocumentClient.Key): Promise<T | undefined> {
    const { Item } = await this.client.get({ TableName: this.tableName, Key: primaryKey }).promise()

    if (!Item) {
      return undefined
    }

    return Item as T
  }
}


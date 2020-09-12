import { DynamoDB } from 'aws-sdk'
require('dotenv').config()
import { TableName } from '../src/config/db'
const stores = require('../db/migrate/stores.json')
const IS_OFFLINE = process.env.IS_OFFLINE || true

const client = IS_OFFLINE
  ? new DynamoDB.DocumentClient({
      region: 'localhost',
      endpoint: 'http://localhost:8000',
      convertEmptyValues: true,
    })
  : new DynamoDB.DocumentClient({ convertEmptyValues: true })

async function insertStores() {
  for (let i = 0, l = stores.length; i < l; i++) {
    const result = await client.put({
      TableName: TableName.Store,
      Item: stores[i]
    })
      .promise()
      .catch(e => {
        console.error(`[Error] insertStores, store.id: ${stores[i]['id']}`, e)
        return null
      })
  }
}

insertStores()

import { createConnections, createConnection, getConnection } from 'typeorm'

const connection = {
  async createConnections() {
    await createConnections()
  },

  async create() {
    await createConnection()
  },

  async createTestConnection() {
    await createConnection('testing')
  },

  async close() {
    await getConnection().close()
  },

  async clear() {
    const connection = getConnection()
    const entities = connection.entityMetadatas

    entities.map(async entity => {
      const repository = connection.getRepository(entity.name)
      await repository.query(`DELETE FROM ${entity.tableName}`)
    })
  }
}

export default connection
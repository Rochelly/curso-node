const assert = require('assert')
const Postgres = require('./../db/strategies/postgres')
const Context = require ('./../db/strategies/base/contextstrategy')


const context =  new Context(new Postgres())

const MOCK_HEROI_CADASTRAR = {
  nome: 'Gavião  Arqueiro',
  poder: 'flexas'
}

describe('Postgres strategy',function(){
  this.timeout(Infinity)
  this.beforeAll(async function(){
    db = await context.connect()
  })
  it('PostgresSQL Connection', async function(){
    const result = await context.isConnected()
    assert.equal(result,true)
  })
  it('Casdastrar', async function(){
    const  result = await context.create(MOCK_HEROI_CADASTRAR)
    delete result.id
    assert.deepEqual(result, MOCK_HEROI_CADASTRAR)
  })
})

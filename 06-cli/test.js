const {
  deepEqual,
  ok
} = require('assert')
//Teste
const database = require('./database')

const DEFAULT_ITEM_CADASTRAR = {
  nome: 'Flash',
  poder: 'Speed',
  id: 1
}

const DEFAULT_ITEM_ATUALIZAR = {
  nome: 'Lanterna Verde',
  poder: 'Energia do Anel',
  id: 2
}


describe('Suite de manipulação de Herois', () => {
  before(async () => {
    await database.cadastrar(DEFAULT_ITEM_CADASTRAR)
    await database.cadastrar(DEFAULT_ITEM_ATUALIZAR)
  })
  it('Deve cadastrar um heroi, usando  arquivos', async () => {
    const expected = DEFAULT_ITEM_CADASTRAR
    const resultado = await database.cadastrar(DEFAULT_ITEM_CADASTRAR)
    const [actual] = await database.listar(DEFAULT_ITEM_CADASTRAR.id)
    // entre aspas mostra somente  a primeira posição
    //  console.log(actual);
    deepEqual(actual, expected)
  })
  it('Deve listar um  heroi, usando arquivos', async () => {
    const expected = DEFAULT_ITEM_CADASTRAR
    const [resultado] = await database.listar(expected.id)
    //ok(resultado, expect) // devecomparar  só se tem  valor ou nãofn
    deepEqual(resultado, expected)
  })
  it('Deve Atualizar um heroi pelo id', async () => {
    const expected = {
      ...DEFAULT_ITEM_ATUALIZAR,
      nome: 'Batman',
      poder: 'Dinheiro'
    }
    const novoDado = {
      nome: 'Batman',
      poder: 'Dinheiro'
    }
    await database.atulizar(DEFAULT_ITEM_ATUALIZAR.id, novoDado)
    const [resultado] = await database.listar(DEFAULT_ITEM_ATUALIZAR.id)
    deepEqual(resultado, expected)
  })
  it('Deve remover um  heroi pelo id ',  async () => {
    const espected = true
    const reultado = await database.remover(DEFAULT_ITEM_CADASTRAR.id)
    deepEqual(espected,reultado)
  })
})

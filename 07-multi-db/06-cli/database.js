const {
  readFile,
  writeFile
} = require('fs')

const {
  promisify
} = require('util')
// para usar  Promise()
// //
const readFileAsync = promisify(readFile) // convertendo para primise
const writeFileAsync = promisify(writeFile)

class Database {
  constructor() {
    this.NOME_ARQUIVO = 'herois.json'
  }
  async obterDadosArquivo() {
    const arquivo = await readFileAsync(this.NOME_ARQUIVO, 'utf8')
    return JSON.parse(arquivo.toString())
  }
  async cadastrar(heroi) {
    const dados = await this.obterDadosArquivo()
    const id = heroi.id <= 2 ? heroi.id : Date.now();
    const heroiComId = {
      id,
      ...heroi
    }
    //juntando os objetos
    const dadosFinal = [
      ...dados,
      heroiComId
    ]
    const resultado = await this.escreverArquivo(dadosFinal)
    return resultado;
  }
  async escreverArquivo(dados) {
    writeFileAsync(this.NOME_ARQUIVO, JSON.stringify(dados))
    return true
  }
  async listar(id) {
    const dados = await this.obterDadosArquivo()
    const dadosFiltrados = dados.filter(item => (id ? (item.id == id) : true))
    return dadosFiltrados
  }
  async atulizar(id, modicacoes) {
    const dados = await this.obterDadosArquivo()
    const indice = dados.findIndex(item => item.id === parseInt(id))
    if(indice === -1){
      throw Error('O heroi informado não existe')
    }
    const atual = dados[indice]
    const  objetoAtualizar = {
      ...atual,
      ...modicacoes
    }
    dados.splice(indice,1)

    return  await this.escreverArquivo([
      ...dados,
      objetoAtualizar
    ])
    return false
  }
  async remover(id){
    if(!id){
      await this.escreverArquivo([])
    }
    const dados = await this.obterDadosArquivo()
    const indice = dados.findIndex(item => item.id ===  parseInt(id))
    if(indice === -1){
      throw Error('O usuario não existe')
    }
    dados.splice(indice,1)
    return await this.escreverArquivo(dados)
  }
}


module.exports = new Database()

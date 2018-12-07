const service = require('./service')

async function main () {
  try {
    const result = await service.obterPessoas('a')
    const names = []
    console.time('for')
    for (let i = 0; i <= result.results.length - 1; i++) {
      const pessoa = result.results[i]
      names.push(pessoa.name)
    }
    console.timeEnd('for')

    console.time('forin')
    for (let i in result.results) {
      const pessoas = result.results[i]
      names.push(pessoas.name)  
    }
    console.timeEnd('forin')

    console.time('forout')
    for (pessoa of result.results) {
      names.push(pessoa.name)
    }
    console.timeEnd('forout')
    console.log('Nomes', names)
  } catch (e) {
    console.log('Error interno1', e)
  }
}

main()

const {
  obterPessoas
} = require('./service')

async function main() {
  try {
    const {
      results
    } = await obterPessoas(`a`)
    const familiaLars = results.filter(function(item) {
      /*
      Por  padrão precisa retorna um booleano para  informar se  deve manter ou remover da lista
      false -> não inclui da lista
      true -> inclui
      */
      const result = item.name.toLowerCase().indexOf(`lars`) !== -1
      return result
    })
    const names = familiaLars.map((pessoa) => pessoa.name)
    console.log(names)
  } catch (e) {
    console.error("Error", error)
  }
}


main()

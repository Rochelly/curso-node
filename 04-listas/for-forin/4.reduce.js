const {
  obterPessoas
} = require('./service')

async function main() {
  try {
    const {
      results
    } = await obterPessoas('a')
  //  console.log(results)
    const pesos = results.map(item => parseInt(item. height))
  //  console.log(pesos);
    const total = pesos.reduce((anterior, proximo) => {
      return anterior + proximo
    })
    console.log(total);
  } catch (e) {
    console.error(e);
  }
}

main()

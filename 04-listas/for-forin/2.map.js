const service = require('./service');

Array.prototype.meuMap = function (callback){
  const novoArrayMapeado = []
  for (let indice=0; indice <=this.length -1; indice++){
    const resultado = callback(this[indice],indice)
    novoArrayMapeado.push(resultado)
  }
  return novoArrayMapeado
}

async function main() {
  try {
    const results = await service.obterPessoas('a')
    //const names = []
    // results.results.forEach(function(item){
    //     names.push(item.name)
    // })
    // const names = results.results.map(function(pessoa) {
    //   return pessoa.name
    // })

    //const names =  results.results.map(pessoa => pessoa.name)
    //Acima: pessoa é o parametro da função e pessoa . nome é  o retorno
    const names  = results.results.meuMap(function (pessoa,indice){
      return  `[${indice}]${pessoa.name}`
    })


    console.log('names', names);
  } catch (e) {
    console.error("Error", e);
  }
}

main()

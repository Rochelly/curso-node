/*
0 Obter um usuário
1 Obter o número  de telefone de um usuário  a partir de seu Id
2 Obter o endereço do usuario pelo Id
*/
//importação do modulo util

const util = require('util');
const obterEnderecoAsync = util.promisify(obterEndereco);

function obterUsuario() {
  //quando der algum problema ->  reject(erro)
  //quando der certo -> resolve
  return new Promise(function resolvePromise(resolve, reject) {
    setTimeout(function() {
      //    return reject(new Error('Simulação de Erros'))
      return resolve({
        id: 1,
        nome: 'Rochelly Fernandes Andrade',
        dataNascimento: new Date()
      });
    }, 1000);
  })

}

function obterTelefone(idUsuario) {
  return new Promise(function resolvePromise(resolve, reject) {
    setTimeout(function() {
      return resolve({
        numero: "3532-8218",
        dd: '38'
      });
    }, 2000);
  })
}

function obterEndereco(idUsuario, callback) {
  setTimeout(function() {
    return callback(null, {
      rua: "Francisco Lourenço Machado",
      numero: "384"
    })
  }, 2000);
}

main()
// 1º passo, adicionar a palavra  async -> automaticamente ele retornará uma Promise
async function main(){
  try {
    const usuario = await obterUsuario();
    // const telefone = await obterTelefone(usuario.id)
    // const endereco = await obterEnderecoAsync(usuario.id)
    const resultado = await Promise.all([
      obterTelefone(usuario.id),
      obterEnderecoAsync(usuario.id)
    ])

    const endereco = resultado[1]
    const telefone = resultado[0]
    
    console.log(`
     Nome : ${usuario.nome},
     Endereço: ${endereco.rua},${endereco.numero},
     Telefone: ${telefone.dd},${telefone.numero}
   `);

  } catch (e) {
    console.error(e);
  }
}

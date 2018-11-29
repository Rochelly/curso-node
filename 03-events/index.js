const EventEmitter = require('events')
class MeuEmissor extends EventEmitter {

}
const meuEmissor = new MeuEmissor()
const nomeEvento = 'usuario:click'
meuEmissor.on(nomeEvento, function(click) {
  console.log('Um Usuario Clicou', click)
})
//
// meuEmissor.emit(nomeEvento,"Na barra de rolagem")
// meuEmissor.emit(nomeEvento,"No menu")
//
// let count  = 0;
//
// setInterval(function(){
//     meuEmissor.emit(nomeEvento,"Na barra de rolagem" + (count++))
// },1000)

const stdin = process.openStdin()

function main() {
  return new Promise(function(resolve, reject) {
    stdin.addListener('data', function(value) {
      //console.log(`Você  digitou: ${value.toString().trim()}`);
      return resolve(value)
    })
  })
}

main().then(function(resultado){
  console.log('resultado',resultado.toString().trim())
} )

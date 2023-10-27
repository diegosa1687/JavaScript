// const Pessoa = require('./pessoa') // sem usar o sistema de módulos
import Pessoa from './pessoa' // usando o sistema de módulos do ES
// é aqui que fazemos os imports necessários para todos os arquivos (js, php, html, css...)
// porque no webpack.config.js/entry foi definido este arquivo para ser compactado e tratado,
// logo, tudo o que for colocado aqui será compactado e fará parte do código final
// import './modulos/moduloA'

import './assets'

const atendente = new Pessoa
console.log(atendente.cumprimentar())
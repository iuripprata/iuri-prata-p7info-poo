import {Ponto} from './ponto'
import { Quadrilatero } from "./quadrilatero"

let pontoA = new Ponto(0, 8)
let pontoB = new Ponto(10, 0)

let pontoC = new Ponto(5, 0)
let pontoD = new Ponto(12, 10)
let pontoE = new Ponto(10, 6)

let Quad = new Quadrilatero(pontoA,pontoB)

console.log(Quad.pertencerArea(pontoC)? "Ponto C pertence ao Quadrilátero": "Ponto C não pertence ao Quadrilátero")
console.log(Quad.pertencerArea(pontoD)? "Ponto D pertence ao Quadrilátero": "Ponto D não pertence ao Quadrilátero")
console.log(Quad.pertencerArea(pontoE)? "Ponto E pertence ao Quadrilátero": "Ponto E não pertence ao Quadrilátero")


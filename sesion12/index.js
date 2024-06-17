let paises=["peru", "bolivia", "brasil"];

paises[1]="colombia"
paises.push("chile", "ecuador")
paises.unshift("salvador")
paises.pop()
paises.shift()

console.log(paises) //para ver en la consola

let valorEncontrado= paises.indexOf("colombia")
let tamano= paises.length 
console.log(valorEncontrado)
console.log(`la longitud del vector es de ${tamano}`)

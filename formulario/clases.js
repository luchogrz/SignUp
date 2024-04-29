
function saludar (nombre) {
    
    return `Hola, bienvenido ${nombre}`
}

//console.log(saludar("luciano"))

const resultado = saludar("Luciano")
console.log(resultado)

const usuario2 = function(nombre) {
    return `Hola ${nombre}, esto es una funcion anonima`
}

const resultado2 = usuario2('Pablo')
console.log(resultado2)


const multiplicar = numero => numero * 2
 

console.log(multiplicar(5))


const personas = {
    nombre: "Luciano",
    apellido : "Gorostizu",
    edad : 39,
    telefono : 555666
}

console.log(personas)
console.log(personas.apellido)


const iva_general = 1.21
const iva_reducido = 1.10

const item1 = {
    precio : 15,
    cantidad : 2,
    imuesto : iva_general
}

const item2 = {
    precio : 35,
    cantidad : 3,
    impuesto : iva_reducido
}

const factura = {
    item1,
    item2
}

console.log(factura)
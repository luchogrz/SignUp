console.log('hola')

const persona = {
    nombre : "luciano",
    apellido : "grx",
    edad : 30,
    alergico : true
}

console.log(Object.keys(persona))
console.log(Object.keys(persona).length)


console.log(Object.values(persona))


const salarios = {
    enero : 1000,
    febrero : 1200,
    marzo : 1100
}

console.log(Object.values(salarios))
console.log(Object.values(salarios).reduce((a, b) => {
    return a + b
}))


// a mayusculas los valores string ENTRIES

Object.entries(persona).forEach(e => {

    const clave = e[0]; //clave se refiere a nombre, apellido....etc
    const valor = e[1]; //valor de la clave

    if(typeof valor === 'string')
    persona[clave] = valor.toUpperCase()
})

console.log(persona)

//FROM ENTRIES recibe un array de arrays y los convierte en un objeto

const persona1 = [
    ['nombre', 'luciano'],
    ['apellido','grx'],
    ['edad', 29]
]

console.log(Object.fromEntries(persona1))


//ASSING....CLONA OBJECTOS

const personaClonada = {}

const persona3 = {
    nombre : 'Luciano',
    apellido : 'Grz',
    edad : 39,
    direccion : 'lalala 123',
    pais : "Argentina"
}

console.log("Persona3")
console.log( persona3)
console.log("Persona Clonada")
console.log(Object.assign(persona3, personaClonada))

//CLASES

class Curso {
    constructor (titulo, dificultad) {
        
        this.titulos = titulo,
        this.dificultad = dificultad,
        this.lecciones = []
    }

    agregarLecciones (leccion) {
        this.lecciones.push (leccion)
    }

    eliminarLecciones () {
        this.lecciones.pop()
    }

}

const cursoJS = new Curso ("Javascriot", 1)
const cursoTp = new Curso ("TypeScript0", 3)

cursoJS.agregarLecciones("Intro a JS")
cursoJS.agregarLecciones ("variables")
cursoJS.agregarLecciones ("Tipo de datos")

console.log(cursoJS, cursoTp)

//MAS EJEMPLOS

class Usuario {

    constructor (nombre, apellido, edad) {

        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad

    }


    obtenerNombreCompleto () {
        return `${this.nombre} ${this.apellido} ${this.edad}`
    }
}

const usuario = new Usuario ('Luciano', 'Gorostizu', 39)
const usuario2 = new Usuario ('Diego', 'Perez')

console.log(usuario)
console.log(usuario2)
console.log(usuario.obtenerNombreCompleto())

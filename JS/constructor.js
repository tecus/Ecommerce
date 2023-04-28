class Persona{
    constructor (nombre,apellido,edad){
        this.nombre=nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    mostrarNombreCompleto(){
        console.log(`${this.nombre}`);
        console.log(`${this.apellido}`);
    }
}

const pepito = new Persona('Jesid','duarte',10)
const Jose = new Persona('Jose','duran',18)
pepito.mostrarNombreCompleto()
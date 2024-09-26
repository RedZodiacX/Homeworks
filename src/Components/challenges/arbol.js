class Persona {
    constructor(nombre, fechaNacimiento) {
        this.nombre = nombre;
        this.fechaNacimiento = fechaNacimiento;
        this.padre = null;
        this.madre = null;
    }

    agregarPadre(padre) {
        this.padre = padre;
    }
    
    agregarMadre(madre) {
        this.madre = madre;
    }
}

const abuelaPaterna = new Persona("María López", "1947-09-20");
const abueloPaterno = new Persona("José García", "1945-06-12");

const abueloMaterno = new Persona("Juan Pérez", "1948-02-14");
const abuelaMaterna = new Persona("Carmen Díaz", "1950-11-03");

const padre = new Persona("Carlos García", "1970-04-05");
const madre = new Persona("Laura Pérez", "1972-08-17");

padre.agregarPadre(abueloPaterno);
//padre.agregarMadre(abuelaPaterna);

//madre.agregarPadre(abueloMaterno);
//madre.agregarMadre(abuelaMaterna);

const hijo = new Persona("Miguel García Pérez", "2000-01-15");
hijo.agregarPadre(padre);
hijo.agregarMadre(madre);

const hija = new Persona("Clara García Pérez", "2010-08-35");
hija.agregarPadre(padre);
hija.agregarMadre(madre);


function preOrden(persona) {
    if (!persona) return;

    console.log(`${persona.nombre} (${persona.fechaNacimiento})`);
    preOrden(persona.padre);
    preOrden(persona.madre);
}

function postOrden(persona) {
    if (!persona) return;

    postOrden(persona.padre);
    postOrden(persona.madre);
    console.log(`${persona.nombre} (${persona.fechaNacimiento})`);
}

function inOrden(persona) {
    if (!persona) return;

    inOrden(persona.padre);
    console.log(`${persona.nombre} (${persona.fechaNacimiento})`);
    inOrden(persona.madre);
}


console.log("Recorrido en Preorden:");
preOrden(hijo);

console.log("\nRecorrido en Postorden:");
postOrden(hijo);

console.log("\nRecorrido en Inorden:");
inOrden(hijo);

class Pila {
    constructor() {
        this.libros = [];

        this.libro = {
            Nombre: "Cien Años de Soledad",
            ISBN: "1",
            Autor: "Gabriel García Márquez",
            Editorial: "Editorial Sudamericana"
        };
    }

    apilar(libro) {
        this.libros.push(libro);
    }

    desapilar() {
        if (this.vacia()) {
            throw new Error("La pila está vacía");
        }
        return this.libros.pop();
    }

    cima() {
        if (this.vacia()) {
            throw new Error("La pila está vacía");
        }
        return this.libros[this.libros.length - 1];
    }

    vacia() {
        return this.libros.length === 0;
    }

    tamaño() {
        return this.libros.length;
    }

}

export default Pila;

const miPila = new Pila();

const libro1 = {
    Nombre: "El amor en los tiempos del cólera",
    ISBN: "2",
    Autor: "Gabriel García Márquez",
    Editorial: "Editorial Sudamericana"
};

const libro2 = {
    Nombre: "Don Quijote de la Mancha",
    ISBN: "3",
    Autor: "Miguel de Cervantes",
    Editorial: "Francisco de Robles"
};

miPila.apilar(libro1);
miPila.apilar(libro2);

console.log(miPila.cima()); 

console.log(miPila.desapilar()); 

console.log(miPila.tamaño());




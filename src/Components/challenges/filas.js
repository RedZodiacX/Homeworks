class Filas {
    constructor(){
        this.fila = [];
        this.persona = {
            Nombre: "Carlos",
            fecha: "10/08/2024"
        };
    }

    llegada() {
        this.fila.push(this.persona);
    }

    sale() {
        if (this.vacia()) {
            throw new Error("Fila vacia");
        }
        return this.fila.find;
    }

    atiende() {
        if (this.vacia()) {
            throw new Error("Fila vacia");
        }
        return this.fila.shift;
    }

    vacia() {
        return this.fila.length === 0;
    }
}

export default Filas;

const miFilas = new Filas;

const persona1 = {
    Nombre: "Laura",
    fecha: "12/08/2024"
}

const persona2 = {
    Nombre: "Rafel",
    fecha: "13/08/2024"
}

const persona3 = {
    Nombre: "Camila",
    fecha: "14/08/2024"
}

miFilas.llegada(persona1);
miFilas.llegada(persona2);
miFilas.llegada(persona3);

console.log(miFilas.atiende);
console.log(miFilas.sale);
class Graph {
    constructor() {
        this.nodes = [];
        this.adjList = {};
    }
    addNode(node) {
        this.nodes.push(node);
        this.adjList[node] = [];
    }

    addEdge(node1, node2) {
        this.adjList[node1].push(node2);
        this.adjList[node2].push(node1);
    }

    printGraph() {
        console.log(this.adjList)
    }
}

class Graph {
    constructor() {
        this.personas = { Nombre: 'Carlos', edad: 20, referencia: '' };
        this.ciudades = { ciudad: 'Yumbo' };
        this.nodo = [];
        this.adjList = {};
    }

    addNode(node) {
        this.nodes.push(node);
        this.adjList[node] = [];
    }

    addEdge(node1, node2) {
        this.adjList[node1].push(node2);
        this.adjList[node2].push(node1);
    }

    printGraph() {
        console.log(this.adjList)
    }
}

this.addNode(personas);
this.addNode(ciudades);

this.addEdge(personas, ciudades);
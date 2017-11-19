class Node {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}

class Edge {

}

class TopicGraph {
    constructor() {
        this.nodes = []
        this.edges = []
    }

    addNode(id, name) {
        this.nodes.push(new Node(id, name));
    }
}
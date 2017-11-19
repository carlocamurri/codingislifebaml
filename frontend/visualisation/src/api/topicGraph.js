class Node {
    constructor(id, label) {
        this.id = id;
        this.label = label;
    }
}

class Edge {
    constructor(id, source, target) {
        this.id = id;
        this.source = source;
        this.target = target;
    }
}

class TopicGraph {
    constructor() {
        this.nodes = []
        this.edges = []
    }

    addNode(id, label) {
        this.nodes.push(new Node(id, label));
    }

    addEdge(id, source, target) {
        this.edges.push(new Edge(id, source, target));
    }
}
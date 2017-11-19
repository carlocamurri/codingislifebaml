import React, { Component } from 'react';
import TopicGraphRenderer from "./TopicGraphRenderer";

import { getTitlesAndTopics } from "../api/trends";
import { getNews } from "../api/news";

var testNodes = [
    {
        id: "n0",
        label: "Microsoft",
        searchable: true
    },
    {
        id: "n1",
        label: "Apple",
        searchable: true
    },
    {
        id: "n2",
        label: "Google",
        searchable: true
    },
    {
        id: "n3",
        label: "Amazon",
        searchable: true
    }
];

var testEdges = [
    {
        id: "e0",
        source: "n0",
        target: "n1"
    },
    {
        id: "e1",
        source: "n1",
        target: "n2"
    },
    {
        id: "e2",
        source: "n2",
        target: "n3"
    },
];

class TopicGraph extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nodes: testNodes,
            edges: testEdges,
            currentNode: "n0"
        };

        //this.expandNode() = this.expandNode.bind(this);
    }

    render() {
        return (
            <div>
                <TopicGraphRenderer nodes={this.state.nodes} edges={this.state.edges}/>
            </div>
        );
    }
}

export default TopicGraph;
import React, { Component } from 'react';
import TopicGraphRenderer from "./TopicGraphRenderer";

import { getTitlesAndTopics } from "../api/trends";
import { getNews } from "../api/news";

var testNodes = [
    {
        id: "n0",
        label: "Bitcoin",
        size: 20,
        searchable: true
    }
];

var testEdges = [
    
];

var BITCOIN_NODES = [
    "Mining",
    "NVidia Corporation",
    "CryptoCurrency",
    "Ethereum"
];

function getNewId(forNode, name) {
    
    if (forNode) {
        return "n" + name.length;
    } else {
        return "e" + name.length;
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

class TopicGraph extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nodes: testNodes,
            edges: testEdges,
            currentNode: "n0"
        };

        this.expandNode = this.expandNode.bind(this);
    }

    expandNode(event) {
        console.log(event);
        if (event.data.node.label === "Bitcoin") {
            var newNodes = [];
            BITCOIN_NODES.forEach((string) => {
                var newId = getNewId(true, string);
                var posx = Math.random();
                var posy = Math.random();
                newNodes.push({
                    id: newId,
                    label: string,
                    x: posx,
                    y: posy,
                    size: 20
                });
            });
            var finalNodes = this.state.nodes.concat(newNodes);
            this.setState({
                nodes: finalNodes
            });
            console.log("Callback to update graph called");
            console.log(this.state.nodes);
            this.render();
        }
    }

    render() {
        return (
            <div>
                <TopicGraphRenderer nodes={this.state.nodes} edges={this.state.edges} onClickNode={this.expandNode}/>
            </div>
        );
    }
}

export default TopicGraph;
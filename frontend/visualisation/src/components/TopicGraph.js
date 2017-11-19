import React, { Component } from 'react';
import TopicGraphRenderer from "./TopicGraphRenderer";

import { getTitlesAndTopics } from "../api/trends";
import { getNews } from "../api/news";

var testNodes = [
    {
        id: "n0",
        label: "Microsoft",
        myInfo: "Hello"
    },
    {
        id: "n1",
        label: "Apple"
    },
    {
        id: "n2",
        label: "Google"
    },
    {
        id: "n3",
        label: "Amazon"
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
            currentNode: null
        };

        //this.expandNode() = this.expandNode.bind(this);
    }

    onButtonClickOne() { 
        getTitlesAndTopics("Microsoft");
    }

    onButtonClickTwo() {
        getNews("Microsoft");
    }

    onButtonClickThree() {
        getNews("Microsoft");
    }

    render() {
        return (
            <div>
                <button onClick={this.onButtonClickOne}>DATAA</button>
                <button onClick={this.onButtonClickTwo}>NEWS</button>
                <button onClick={this.onButtonClickThree}>FINANCE</button>
                <TopicGraphRenderer nodes={this.state.nodes} edges={this.state.edges}/>
            </div>
        );
    }
}

export default TopicGraph;
import React, { Component } from 'react';
import TopicGraphRenderer from "./TopicGraphRenderer";

class TopicGraph extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nodes: [],
            edges: [],
            currentNode: null
        };
    }

    render() {
        return (
            <TopicGraphRenderer />
        );
    }
}

export default TopicGraph;
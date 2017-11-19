import React, {Component} from "react";

import {Sigma, EdgeShapes, NodeShapes, LoadJSON, LoadGEXF, Filter, ForceAtlas2, RelativeSize, NOverlap, NeoCypher, NeoGraphItemsProducers, RandomizeNodePositions, SigmaEnableWebGL} from 'react-sigma';
import ForceLink from 'react-sigma/lib/ForceLink';
import Dagre from 'react-sigma/lib/Dagre';

var hardNodes = [
    {
        id: "n0",
        label: "Bitcoin",
        x: 0,
        y: 0,
        size: 150,
        color: "red"
    },
    {
        id: "n1",
        label: "CryptoCurrency",
        x: -1,
        y: 1,
        size: 100
    },
    {
        id: "n2",
        label: "Mining",
        x: -1,
        y: -3,
        size: 120
    },
    {
        id: "n3",
        label: "NVidia",
        x: 2,
        y: -1,
        size: 130
    }
];

var hardEdges = [
    {
        id: "e0",
        source: "n0",
        target: "n1"
    },
    {
        id: "e1",
        source: "n0",
        target: "n2"
    },
    {
        id: "e2",
        source: "n2",
        target: "n3"
    }
];

var TopicGraphRenderer = (props) => {
    console.log("Props " + JSON.stringify(props));
    return (
        <Sigma 
            renderer="webgl"
            labelThreshold={0}
            graph={{nodes: hardNodes, edges: hardEdges}} 
            settings={{drawEdges: true, clone: false}}
            onClickNode={props.onClickNode}>
            <RelativeSize initialSize={40} />
        </Sigma>
    );
};

export default TopicGraphRenderer;
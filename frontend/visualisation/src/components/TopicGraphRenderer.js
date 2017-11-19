import React, {Component} from "react";

import {Sigma, EdgeShapes, NodeShapes, LoadJSON, LoadGEXF, Filter, ForceAtlas2, RelativeSize, NOverlap, NeoCypher, NeoGraphItemsProducers, RandomizeNodePositions, SigmaEnableWebGL} from 'react-sigma';
import ForceLink from 'react-sigma/lib/ForceLink';
import Dagre from 'react-sigma/lib/Dagre';

var TopicGraphRenderer = (props) => {
    return (
        <Sigma graph={{nodes: props.nodes, edges: props.edges}} settings={{drawEdges: true, clone: false}}>
            <RelativeSize initialSize={8} />
            <RandomizeNodePositions />
        </Sigma>
    );
};

export default TopicGraphRenderer;
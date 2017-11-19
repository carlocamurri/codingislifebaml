import React, {Component} from "react";

import {Sigma, EdgeShapes, NodeShapes, LoadJSON, LoadGEXF, Filter, ForceAtlas2, RelativeSize, NOverlap, NeoCypher, NeoGraphItemsProducers, RandomizeNodePositions, SigmaEnableWebGL} from 'react-sigma';
import ForceLink from 'react-sigma/lib/ForceLink';
import Dagre from 'react-sigma/lib/Dagre';

var TopicGraphRenderer = () => {
    return (
        <Sigma graph={{nodes:[{id:"n1", label:"Alice"}, {id:"n2", label:"Rabbit"}], edges:[{id:"e1",source:"n1",target:"n2",label:"SEES"}]}} settings={{drawEdges: true, clone: false}}>
            <RelativeSize initialSize={15}/>
            <RandomizeNodePositions/>
        </Sigma>
    );
};

export default TopicGraphRenderer;
import React from 'react';
import posed from 'react-pose';
import { tween } from 'popmotion';

const DrawPath = posed.path({
    idle:{
        pathLength:10,
        transition:(props) => tween({...props, duration:500})
    },
    animate:{
        pathLength:100,
        transition:(props) => tween({...props, duration:500})
    }
})

export default class Underline extends React.Component{
    render(){
        return(
            <svg viewBox="0 0 200 2" width='100px' style={{marginBottom:'1em', position:'relative', bottom:'1em', left:'1.5em'}}>
                <g strokeWidth='4px' stroke='white'>
                    <DrawPath pose={this.props.stage} d='M50,0L0,0'/>
                    <DrawPath pose={this.props.stage} d='M50,0L100,0'/>
                </g>
            </svg>
        )
    }
}
import React from 'react';
import posed from 'react-pose';
import { tween } from 'popmotion';

const DrawRed = posed.path({
    idle:{
        pathLength:5,
        stroke:'#FFFFFF',
        transition:(props) => tween({...props, duration:250})
    },
    animate:{
        pathLength:100,
        stroke:'#FF4081',
        transition:(props) => tween({...props, duration:250})
    }
})

export class RedUnderline extends React.Component{
    render(){
        return(
            <svg viewBox="0 0 200 2" width='100px' style={{marginBottom:'1em', position:'relative', bottom:'1em', left:'1.5em'}}>
                <g strokeWidth='4px'>
                    <DrawRed pose={this.props.stage} d='M50,0L0,0'/>
                    <DrawRed pose={this.props.stage} d='M50,0L100,0'/>
                </g>
            </svg>
        )
    }
}

const DrawGreen = posed.path({
    idle:{
        pathLength:5,
        stroke:'#FFFFFF',
        transition:(props) => tween({...props, duration:250})
    },
    animate:{
        pathLength:100,
        stroke:'#71F79F',
        transition:(props) => tween({...props, duration:250})
    }
})

export class GreenUnderline extends React.Component{
    render(){
        return(
            <svg viewBox="0 0 200 2" width='100px' style={{marginBottom:'1em', position:'relative', bottom:'1em', left:'1.5em'}}>
                <g strokeWidth='4px'>
                    <DrawGreen pose={this.props.stage} d='M50,0L0,0'/>
                    <DrawGreen pose={this.props.stage} d='M50,0L100,0'/>
                </g>
            </svg>
        )
    }
}

const DrawBlue = posed.path({
    idle:{
        pathLength:5,
        stroke:'#FFFFFF',
        transition:(props) => tween({...props, duration:250})
    },
    animate:{
        pathLength:100,
        stroke:'#4D9DE0',
        transition:(props) => tween({...props, duration:250})
    }
})

export class BlueUnderline extends React.Component{
    render(){
        return(
            <svg viewBox="0 0 200 2" width='100px' style={{marginBottom:'1em', position:'relative', bottom:'1em', left:'1.5em'}}>
                <g strokeWidth='4px'>
                    <DrawBlue pose={this.props.stage} d='M50,0L0,0'/>
                    <DrawBlue pose={this.props.stage} d='M50,0L100,0'/>
                </g>
            </svg>
        )
    }
}
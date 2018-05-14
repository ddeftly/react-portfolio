import React from 'react';
import posed from 'react-pose';
import { tween } from 'popmotion';
import '../../styles/components/HubGrid.css'

// Content Animations //

const AnimateContent = posed.div({
    animate:{
        opacity:0,
        transition:(props) => tween({...props, duration:50})
    },
    idle:{
        opacity:1,
        transition:(props) => tween({...props, duration:1000})
    },
    hidden:{
        opacity:0
    }
})

class ContentHide extends React.Component{
    render(){
        return(
            <AnimateContent pose={this.props.stage}>{this.props.children}</AnimateContent>
        )
    }
}

const AnimatedBox = posed.div({
    idle:{
        scaleY:1,
        transition:(props) => tween({...props, duration:500})
    },
    animate:{
        scaleY:.001,
        transition:(props) => tween({...props, duration:500})
    }
});

export default class ContentBox extends React.Component{
    render(){
        return(
            <AnimatedBox pose={this.props.stage} className='contentBox'><ContentHide stage={this.props.stage}>{this.props.children}</ContentHide></AnimatedBox>
        )
    }
}

// Enter Line //

const AnimatedLine = posed.svg({
    idle: {
        opacity:0,
        x:0,
        width:200,
        transition:(props) => tween({...props, duration:700})
    },
    animate:{
        opacity:1,
        x:250,
        width:0,
        transition:(props) => tween({...props, duration:700})
    },
})

export class EnterLine extends React.Component{
    render() {
        return(
            <AnimatedLine className='animatedLine' pose={this.props.stage} stroke='#FF206E' strokeWidth='2px' height='5' viewBox='0 0 100 1'>
                <path d='M 0,0 H 100'/>>
            </AnimatedLine>
        )
    }
}
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
        scaleY:.1,
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
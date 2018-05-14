import React from 'react';
import posed from 'react-pose';
import { tween } from 'popmotion';
import '../../styles/animations/Headings.css'

const FadeContentRight = posed.div({
    hidden:{
        x:-10,
        opacity:0,
        transition:(props) => tween({...props, duration:1500})
    },
    shown:{
        x:0,
        opacity:1,
        transition:(props) => tween({...props, duration:1500})
    }
})

// First Heading // 

export class FadeRight extends React.Component{
    state = { stage:'hidden' }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({ stage:'shown' })
        },this.props.timeout)
    }

    render(){
        return(
            <FadeContentRight pose={this.state.stage}>{this.props.children}</FadeContentRight>
        )
    }
}

const FadeContentLeft = posed.div({
    hidden:{
        x:10,
        opacity:0,
        transition:(props) => tween({...props, duration:2000})
    },
    shown:{
        x:0,
        opacity:1,
        transition:(props) => tween({...props, duration:2000})
    }
})

export class FadeLeft extends React.Component{
    state = { stage:'hidden' }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({ stage:'shown' })
        },this.props.timeout)
    }

    render(){
        return(
            <FadeContentLeft pose={this.state.stage}>{this.props.children}</FadeContentLeft>
        )
    }
}
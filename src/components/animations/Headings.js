import React from 'react';
import posed from 'react-pose';
import { tween } from 'popmotion';
import '../../styles/animations/Headings.css'

const FadeContent = posed.div({
    hidden:{
        opacity:0,
        transition:(props) => tween({...props, duration:2000})
    },
    shown:{
        opacity:1,
        transition:(props) => tween({...props, duration:2000})
    }
})

// First Heading // 

export class Fade extends React.Component{
    state = { stage:'hidden' }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({ stage:'shown' })
        },this.props.timeout)
    }

    render(){
        return(
            <FadeContent pose={this.state.stage}>{this.props.children}</FadeContent>
        )
    }
}


// Second Heading //

const DrawPath = posed.path({
    notDrawn:{
        pathLength:0,
        transition:(props) => tween({...props, duration:2000})
    },
    drawn:{
        pathLength:100,
        transition:(props) => tween({...props, duration:1000})
    },
})

export class QuestionLine extends React.Component{
    state = { drawStage:'notDrawn', fadeStage:'shown' }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({ drawStage:'drawn' })
        },4500)
        setTimeout(()=>{
            this.setState({ fadeStage:'hidden' })
        },5500)
    }

    render(){
        return(
            <FadeContent pose={this.state.fadeStage}>   
                <svg viewBox="0 0 100 1" width='100px' className='youBottom'>
                    <g strokeWidth='2px' stroke='white'>
                        <DrawPath pose={this.state.drawStage} d='M0,0L40,0'/>
                    </g>
                </svg>
            </FadeContent>
    )
    }
}
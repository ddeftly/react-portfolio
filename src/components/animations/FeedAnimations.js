import React from 'react';
import posed from 'react-pose';
import { tween } from 'popmotion';

const Fade = posed.div({
    hidden: {
        opacity:0,
        x:-5,
    },
    shown: {
        opacity:1,
        x:0,
        transition:(props) => tween({...props, duration:3500})
    }
})

export default class FeedFade extends React.Component {
    state = { stage:'hidden' }
    
    componentDidMount() {
        setTimeout(() => {
            this.setState({ stage:'shown' })
        },1000)
    }

    render() {
        return(
            <Fade pose={this.state.stage}>{this.props.children}</Fade>
        )
    }
}
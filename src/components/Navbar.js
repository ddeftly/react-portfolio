import React from 'react';
import { RedUnderline, GreenUnderline, BlueUnderline } from './animations/Underline'

const divStyle = {
    div:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
    },
    h3:{
        marginTop:'0em'
    }
}


export class Posts extends React.Component{
    state={ stage:'idle' }

    handleMouseEnter = () => {
        this.setState({ stage:'animate' })
    }
    handleMouseLeave = () => {
        this.setState({ stage:'idle' })
    }

    render(){
        return(
            <div style={divStyle.div}>
                <a href={this.props.to}><h3 onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                    Posts
                </h3></a>
                <GreenUnderline stage={this.state.stage}/>
            </div>
        )
    }
}

export class Projects extends React.Component{
    state={ stage:'idle' }

    handleMouseEnter = () => {
        this.setState({ stage:'animate' })
    }
    handleMouseLeave = () => {
        this.setState({ stage:'idle' })
    }

    render(){
        return(
            <div style={divStyle.div}>
                <a href={this.props.to}><h3 onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                    Projects
                </h3></a>
                <RedUnderline stage={this.state.stage}/>
            </div>
        )
    }
}

export class Connect extends React.Component{
    state={ stage:'idle' }

    handleMouseEnter = () => {
        this.setState({ stage:'animate' })
    }
    handleMouseLeave = () => {
        this.setState({ stage:'idle' })
    }

    render(){
        return(
            <div style={divStyle.div}>
                <a href={this.props.to}><h3 onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                    Connect
                </h3></a>
                <BlueUnderline stage={this.state.stage}/>
            </div>
        )
    }
}
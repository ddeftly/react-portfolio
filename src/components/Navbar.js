import React from 'react';
import Underline from './animations/Underline'

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


export default class NavItem extends React.Component{
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
                    {this.props.title}
                </h3></a>
                <Underline stage={this.state.stage}/>
            </div>
        )
    }
}
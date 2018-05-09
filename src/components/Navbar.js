import React from 'react';
import posed from 'react-pose';
import MUI from 'material-ui/styles/MuiThemeProvider';
import Drawer from 'react-drag-drawer';
import Button from 'material-ui/FloatingActionButton';
import DownArrow from 'material-ui/svg-icons/navigation/expand-more';
import { RedUnderline, GreenUnderline, BlueUnderline } from './animations/Underline'
import '../styles/components/Navbar.css';

// Drawer //

const RotateDiv = posed.div({
    closed: {
        rotate:0,
        y:7
    },
    open:{
        rotate:180,
        y:-7
    }
});

export default class NavDrawer extends React.Component{
    state = { open:false }

    handleClick = () => {
        this.setState({ open:!this.state.open })
    }

    render(){
        return(
            <div>
                <MUI>
                        <Button onClick={this.handleClick} mini={true} backgroundColor='#78909C' className='iconButton'>
                        <RotateDiv pose={this.state.open ? 'open' : 'closed'}>
                            <DownArrow style={{fill:'white'}}/>
                        </RotateDiv>
                    </Button>
                </MUI>
                <Drawer 
                modalElementClass='navContainer'
                containerElementClass='navDrawer'
                open={this.state.open} 
                onRequestClose={this.handleClick}>
                    <div className='navpanel'>
                        <Posts to='https://medium.com/@dfiggy92' title='Posts'/>
                        <Projects to='https://github.com/dfigue92' title='Projects'/>
                        <Connect to='https://www.linkedin.com/in/dfigue92' title='Connect'/>
                    </div>
                </Drawer>
            </div>
        )
    }
}

// NavBar Items //

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


class Posts extends React.Component{
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

class Projects extends React.Component{
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
class Connect extends React.Component{
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
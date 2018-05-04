import React, { Component } from 'react';
import Button from 'material-ui/FlatButton'
import MUI from 'material-ui/styles/MuiThemeProvider';
import { HubGrid } from './AnimateHub'
import './Hub.css'

class Hub extends Component {
    render() {
        return(
            <div className='hub'>
                <div className='layout'>

                    <div className='greetings'>
                        <h1>Hi, I'm David Figueroa.</h1>
                        <h2>But who are <span style={{borderBottom:'white 1px solid'}}>you</span> looking for?</h2>
                        <h2>Someone who can...</h2>
                    </div>
                    
                    <div>
                        <HubGrid id='hubgrid'/>
                    </div>

                    <div className='navpanel'>
                        <h3>About</h3>
                        <h3>Posts</h3>
                        <h3>Projects</h3>
                        <h3>Connect</h3>
                    </div>

                </div>
            </div>
        )    
    }
};

export default Hub;


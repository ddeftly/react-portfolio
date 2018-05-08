import React from 'react';
import HubGrid from '../components/HubGrid'
import '../styles/pages/Hub.css'

export default class Hub extends React.Component {
    render() {
        return(
            <div className='hub'>

                <div className='layout'>

                    <div className='greetings'>
                        <h1>Hi, I'm David Figueroa.</h1>
                        <h2>But who are <span style={{borderBottom:'white 1px solid'}}>you</span> looking for?</h2>
                    </div>
                    
                    <div id='textinp'>
                        <HubGrid />
                    </div>

                    <div className='navpanel'>
                        <a href='https://medium.com/@dfiggy92'><h3>Posts</h3></a>
                        <a href='https://github.com/dfigue92'><h3>Projects</h3></a>
                        <a href='https://www.linkedin.com/in/dfigue92'><h3>Connect</h3></a>
                    </div>

                </div>

            </div>
        )    
    }
};
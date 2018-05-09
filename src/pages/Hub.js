import React from 'react';
import { Helmet } from 'react-helmet';
import { Fade, QuestionLine } from '../components/animations/Headings';
import HubGrid from '../components/HubGrid';
import NavItem from '../components/Navbar';
import '../styles/pages/Hub.css';

export default class Hub extends React.Component {
    render() {
        return(
            <div className='hub'>
                <Helmet>
                    <style>{'body {background-color:#0e0d0d;}'}</style>
                </Helmet>
                <div className='layout'>

                    <div className='greetings'>
                        <Fade timeout={1500}><h1>Hi, I'm David Figueroa.</h1></Fade>
                        <Fade timeout={4000}><h2 style={{fontFamily:'Raleway', fontWeight:500}}>But who are you looking for?</h2><QuestionLine/></Fade>
                    </div>
                    <Fade timeout={6000}>
                        <div id='textinp'>
                            <HubGrid />
                        </div>

                        <div className='navpanel'>
                            <NavItem to='https://medium.com/@dfiggy92' title='Posts'/>
                            <NavItem to='https://github.com/dfigue92' title='Projects'/>
                            <NavItem to='https://www.linkedin.com/in/dfigue92' title='Connect'/>
                        </div>
                    </Fade>
                </div>

            </div>
        )    
    }
};
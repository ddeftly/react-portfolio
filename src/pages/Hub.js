import React from 'react';
import {Helmet} from 'react-helmet';
import {Fade} from '../components/animations/Headings';
import HubGrid from '../components/HubGrid';
import NavDrawer from '../components/Navbar';
import '../styles/pages/Hub.css';

export default class Hub extends React.Component {
    render() {
        return (
            <div className='hub'>
                <Helmet>
                    <style>
                        {
                            'body {background-color:#0e0d0d;}'
                        }</style>
                </Helmet>
                <div className='layout'>

                    <div className='greetings'>
                        <Fade timeout={1500}>
                            <h1 id='titleName'>Hi.<br/>
                                I'm David Figueroa.</h1>
                        </Fade>
                        <Fade timeout={4000}>
                            <h2 id='titleQuestion'>But who are you looking for?</h2>
                        </Fade>
                    </div>
                    <Fade timeout={6000}>
                        <div className='hubgrid'>
                            <HubGrid/>
                            <NavDrawer/>
                        </div>
                    </Fade>
                </div>

            </div>
        )
    }
};
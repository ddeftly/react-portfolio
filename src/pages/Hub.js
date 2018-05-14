import React from 'react';
import Feed from './Feed'
import { Helmet } from 'react-helmet';
import { FadeRight, FadeLeft } from '../components/animations/Headings';
import HubGrid from '../components/HubGrid';
import MediaQuery from 'react-responsive';
import MobileDialog from '../components/Misc/MobileDialog';
import { DrawDownArrow } from '../components/animations/HomeAnimations'
import { Route, Link } from "react-router-dom";
import '../styles/pages/Hub.css';

export default class Hub extends React.Component {
    render() {
        return (
            <div className='hub'>
                <Helmet>
                    <style>{'body {background-color:#0e0d0d;}'}</style>
                </Helmet>
                <div className='hubLayout'>

                    <div className='greetings'>
                        
                            <h1 id='titleName'><FadeRight timeout={animationTimings.greet}>Hi.</FadeRight>
                            <FadeRight timeout={animationTimings.name}>I'm David Figueroa.</FadeRight></h1>
                        
                        <FadeLeft timeout={animationTimings.question}>
                            <h2 id='titleQuestion'>But who are you looking for?</h2>
                        </FadeLeft>
                    </div>
                    <FadeRight timeout={animationTimings.hubgrid}>
                        <MediaQuery query='(max-device-width:480px)'>
                            <div id='dialog'><MobileDialog/></div>
                        </MediaQuery>
                        <div className='hubgrid'>
                            <HubGrid/>
                        </div>
                        <div className="downarrow">
                            <Link to="/feed">
                                <DrawDownArrow interval={animationTimings.arrow}/>           
                            </Link>
                            <Route path="/feed" component={Feed} />
                        </div>
                    </FadeRight>
                </div>

            </div>
        )
    }
};

const animationTimings = {
    greet:1500,
    name:3000,
    question:5500,
    hubgrid:8000,
    arrow:15000
}
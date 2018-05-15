import React from 'react';
import {Helmet} from 'react-helmet';
import MediumFeed from '../components/MediumFeed';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import MUI from 'material-ui/styles/MuiThemeProvider';
import FeedFade from '../components/animations/FeedAnimations';
import { LinkedIn, GitHub, Medium, } from '../components/Icons';
import '../styles/pages/Feed.css';

const tabStyle = {
    inkBarStyle: {
        backgroundColor:'#FF206E'
    },
    tabTemplate: {
        background:'#0e0d0d',
        border: '1px solid white'
    }
}

export default class Feed extends React.Component {
    state = { slideIndex:0 }

    handleChange = (value) => {
        this.setState({ slideIndex:value, })
    }

    render() {
        return(
            <div className='Feed'>
                <Helmet>
                    <style>{'body {background-color:#0e0d0d;}'}</style>
                </Helmet>
         <div className='feedLayout'>
                    <MUI>
                        <Tabs onChange={this.handleChange} 
                            value={this.state.slideIndex}
                            inkBarStyle={tabStyle.inkBarStyle}
                            tabItemContainerStyle={tabStyle.tabTemplate}
                            >
                            <Tab label="Portfolio" value={0}/>                                                
                            <Tab label="Posts" value={1}/>
                            <Tab label="Me" value={2}/>                            
                            
                        </Tabs>
                        <SwipeableViews index={this.state.slideIndex} onChangeIndex={this.handleChange}>
                            <div>
                                <Portfolio/>
                            </div>
                            <div>
                                <MediumFeed/>
                            </div>
                            <div>
                                <AboutMe/>
                            </div>
                        </SwipeableViews>
                    </MUI>
                    <div className='iconContainer'>
                        <LinkedIn/>
                        <GitHub/>
                        <Medium/>
                    </div>
                </div>
            </div>
        )
    }
}

const Portfolio = () => (
    <div  id='portfolioContainer'>
        <h2>Coming soon.</h2>
    </div>
)

const AboutMe = () => (
    <div id='aboutContainer'>
        <h2>Coming soon.</h2>
    </div>
)
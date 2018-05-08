import React, { Component } from 'react';
import { DrawSimple, DrawClean, DrawIntrig, DrawCode, DrawLine, DrawBlackLines, DrawDownArrow } from './DrawHome';
import posed from 'react-pose';
import { tween } from 'popmotion';
import './Home.css';

class Home extends Component {
    render() {
      return (
        <div className='homepage'>
            <div className='headlines'>
                <DrawSimple/>
                <DrawClean/>
                <DrawIntrig/>
            </div>
            <div className='codeheadline'>
                <DrawCode/>
            </div>
            <div className='drawlines'>
                <DrawLine/>
            </div>
            <div className='drawlines'>
                <DrawBlackLines/>
            </div>
            <div className='downarrow'>
                <RotateDiv><DrawDownArrow/></RotateDiv>
            </div>
        </div>
      );
    }
  }
  
export default Home;

// Rotate DrawDownArrow //

const rotateProps = {
    still: {
        rotateY:0,
        transition: (props) => tween({...props, duration:1000})
    },
    spin: {
        rotateY:180,
        transition: (props) => tween({...props, duration:1000})
    }
}

const Rotate = posed.div(rotateProps);

class RotateDiv extends React.Component{
    state = { motion:false }

    componentDidMount(){
        setInterval(()=>{
            this.setState({ motion:!this.state.motion })
        },5000)
    }

    render() {
        return(
            <Rotate pose={this.state.motion ? 'spin':'still'}>
                {this.props.children}
            </Rotate>
        )
    }
}
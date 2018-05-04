import React from 'react';
import posed from 'react-pose';
import { tween } from 'popmotion';
import './FLIP.css'

const flipProps = {
    fullscreen: {
        top:'100%',
        width:'100vw',
        height:'100vh',
        transition:tween,
    },
    
    thumbnail: {
        top:0,
        width:150,
        height:100,
        transition:tween,
    }
}

const DivFlip = posed.div(flipProps);

export class FLIP extends React.Component {
    state = { active:false }
    
    render(){
        return(
            <div>
                <DivFlip className='flipdiv' style={{textAlign:'center', background:'red'}}
                pose={this.state.active ? 'fullscreen' : 'thumbnail'} 
                onClick={() => this.setState({ active:!this.state.active })} 
                >
                    {this.props.children}
                </DivFlip>
            </div>
        )
    }
}
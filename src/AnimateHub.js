import React from 'react';
import Button from 'material-ui/FlatButton'
import MUI from 'material-ui/styles/MuiThemeProvider';
import posed, {PoseGroup} from 'react-pose';
import { tween } from 'popmotion';
import './AnimateHub.css'

// Component Grid //

export class HubGrid extends React.Component{
    state = { topStage:'hidden', botStage:'hidden' };

    openTop = () => {
        setTimeout(()=>this.setState({ stage:'idle' }),2000)
        setTimeout(()=>this.setState({ stage:'moveX' }),3000)
        setTimeout(()=>this.setState({ stage:'openUp' }),4000)
    }

    closeTop = () => {
        setTimeout(()=>this.setState({ stage:'moveX' }),2000)
        setTimeout(()=>this.setState({ stage:'idle' }),3000)
        setTimeout(()=>this.setState({ stage:'hidden' }),4000)
    }
    
    openBot = () => {
        setTimeout(()=>this.setState({ stage:'idle' }),2000)
        setTimeout(()=>this.setState({ stage:'moveX' }),3000)
        setTimeout(()=>this.setState({ stage:'openDown' }),4000)
    }

    closeBot = () => {
        setTimeout(()=>this.setState({ stage:'moveX' }),2000)
        setTimeout(()=>this.setState({ stage:'idle' }),3000)
        setTimeout(()=>this.setState({ stage:'hidden' }),4000)
    }

    render(){
        return (
            <div id='hubGrid'>
                <div id='tLines'>
                    <TransitionLineTop stage={this.state.topStage}/>
                    <TransitionLineBot stage={this.state.botStage}/>
                </div>
                <ButtonList id='buttonGrid' 
                animateOpen={()=>{this.props.openTop;this.props.openBot}} 
                animateClose={()=>{this.props.closeTop;this.props.closeBot}} />
            </div>
        )
    }
}

// Button Animations //

const buttonStyle = {
    color:'white',
    rippleColor:'white',
    fontFamily:'Raleway',
    fontSize:'1.25em',
    fontWeight:'600',
    letterSpacing:'1px',
    height:'3.5em',
    width:'17em',
    textAlign:'left',
    marginLeft:'5em',
    padding:0,};

const Item = posed.div({
    enter:{
        opacity:1,
        transition:(props) => tween({...props, duration:1000})
    },
    exit: {
        opacity:0,
        transition:(props) => tween({...props, duration:500})
    }
})

class ButtonList extends React.Component{
    state = {
        items: [
            {id:1, text:'create responsive websites'},
            {id:2, text:'make multiplatform mobile apps'},
            {id:3, text:'write compelling posts'},
            {id:4, text:'analyze & visualize data'},
        ],
        fullItems: [
            {id:1, text:'create responsive websites'},
            {id:2, text:'make multiplatform mobile apps'},
            {id:3, text:'write compelling posts'},
            {id:4, text:'analyze & visualize data'},
        ],
     }

    render() {
        return(
            <div id='flexButtons' style={{justifyContent:(this.state.items.length === 4 ? 'space-evenly':'center' )}}>
                <PoseGroup>
                    {this.state.items.map(item => (
                        <Item key={item.id}>
                            <MUI>
                                <Button 
                                onClick={
                                    this.state.items.length === 4 ? 
                                        (() => this.setState({ items:[{id:item.id, text:item.text}]})) :
                                        (() => this.setState({ items:this.state.fullItems }))
                                    }
                                style={{...buttonStyle}}
                                >
                                    {item.text}
                                </Button>
                            </MUI>
                        </Item>
                    ))}
                </PoseGroup>
            </div>
        )
    }
}

// Transition Lines //

const shiftLines = {
    x:450,
    y:208.5
}

const Lines = posed.svg({
    hidden:{
        opacity:0,
        x:0,
        y:0,
        transition:(props) => tween({...props,duration:500})
    },
    idle: {
        opacity:1,
        x:0,
        y:0,
        transition:(props) => tween({...props,duration:500})
    },
    moveX: {
        x: shiftLines.x,
        y:0,
        transition:(props) => tween({...props,duration:1000})
    },
    openUp: {
        x: shiftLines.x,
        y:-(shiftLines.y),
        transition:(props) => tween({...props,duration:1000})
    },
    openDown: {
        x: shiftLines.x,
        y:shiftLines.y,
        transition:(props) => tween({...props,duration:1000})
    }
})

class TransitionLineTop extends React.Component{
    state = { stage:'hidden' }
    componentDidMount(){
        setTimeout(()=>this.setState({ stage:'idle' }),2000)
        setTimeout(()=>this.setState({ stage:'moveX' }),3000)
        setTimeout(()=>this.setState({ stage:'openUp' }),4000)
    }    
    
    render(){
        const lineDimen = 350;
        return(
                <Lines pose={this.state.stage} width={`${lineDimen}px`} height='1px' viewBox={`0 0 ${lineDimen} 1`}>
                    <path stroke='white' strokeWidth='.75px' d={`M0,0.5h${lineDimen}`}/>
                </Lines>
        )
    }
}

class TransitionLineBot extends React.Component{
    state = { stage:'hidden' }
    componentDidMount(){
        setTimeout(()=>this.setState({ stage:'idle' }),2000)
        setTimeout(()=>this.setState({ stage:'moveX' }),3000)
        setTimeout(()=>this.setState({ stage:'openDown' }),4000)
    }   
    render(){
        const lineDimen = 350;
        return(
                <Lines pose={this.state.stage} width={`${lineDimen}px`} height='1px' viewBox={`0 0 ${lineDimen} 1`}>
                    <path stroke='white' strokeWidth='.75px' d={`M0,0.5h${lineDimen}`}/>
                </Lines>
        )
    }
}

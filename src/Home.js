import React, { Component } from 'react';
import posed from 'react-pose';
import { tween } from 'popmotion';
import './Home.css'

class Home extends Component {
    render() {
      return (
        <div className='homepage'>
          <OverlayFade><div className='blackoverlay'/></OverlayFade>
          <HeaderFade><div className='headbar'/></HeaderFade>
          <DrawRect/>
          <MainHeader/>
        </div>
      );
    }
  }
  
export default Home;

// MAINHEADER //

const mainheaderInterval = 4500;

class MainHeader extends React.Component{
    constructor(props){
        super(props);
        this.state = {i:0, titles:['David Figueroa','Developer','Data Scientist','Author'], pronouns:['am','am a','am a','am an']}
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState((prevState,props)=>{return{
                    i:prevState.i+1
            }})
        },mainheaderInterval)
        setTimeout(()=>{
            this.setState((prevState,props)=>{return{
                    i:prevState.i+1
            }})
        },mainheaderInterval*2)
        setTimeout(()=>{
            this.setState((prevState,props)=>{return{
                    i:prevState.i+1
            }})
        },mainheaderInterval*3)
        setTimeout(()=>{
            this.setState((prevState,props)=>{return{
                    i:0
            }})
        },mainheaderInterval*4)
    }
    
    render(){
        return(
            <div className='outergrid'>
                <div className='innergrid'> 
                    <MainFade>
                        <h1 id='g1'>I {this.state.pronouns[this.state.i]}</h1>
                        <h1 id='g2'>{this.state.titles[this.state.i]}</h1>
                    </MainFade>
                </div>
            </div>         
        )
    }
}

/// DRAWRECT ///

const boxLProps = {
    start:{
        opacity:0
    },

    done:{
        opacity:1, 
        pathLength:100, 
        transition:(props) => tween({...props, duration:5100})
    }
};

const boxWProps = {
    start:{
        opacity:0
    },

    done:{
        opacity:1, 
        pathLength:100, 
        transition:(props) => tween({...props, duration:5100})
    }
};

const BoxLength = posed.path(boxLProps)
const BoxWidth = posed.path(boxWProps)

class DrawRect extends React.Component{
    state = { stage:'start' }

    componentDidMount(){
        setTimeout(() => {
            this.setState({ stage:'done' })
        }, 500);
        setTimeout(() => {
            this.setState({ stage:'start' })
        }, 2000);
    }

    render(){
        return(
            <div className='drawcontainer'>
                <svg className='rect' fill='none' xmlns="http://www.w3.org/2000/svg"  
                 viewBox="0 5.4 261.7 50"
                >
                    <g stroke='white' strokeWidth='1px'>
                        <BoxLength pose={this.state.stage} d="M0,55.2L261.7,55zM261.7,5.7L0,5.7"/>
                        <BoxWidth pose={this.state.stage} d="M0,55.2L0,5.4zM261.7,5.4L261.7,55.2"/>
                    </g>
                </svg>
            </div>
        )
    }
}

/// FADE ANIMATIONS ///

/// HEADER ANIMATIONS ///

// Fade animation for self-titles //

const mainProps = {
    visible: { 
        opacity: 1,
        transition: (props) => tween({...props, duration:1000})
     },
    hidden: { 
        opacity: 0,
        transition: (props) => tween({...props, duration:300})
     }
}
const GenFade = posed.div(mainProps);
const genInterval = 2100; 

class MainFade extends React.Component {
    state = { isVisible: false }
  
    componentDidMount() {
      setTimeout(() => {
        this.setState({ isVisible: !this.state.isVisible });
      }, genInterval);
      setTimeout(() => {
        this.setState({ isVisible: !this.state.isVisible });
      }, genInterval*2);
      setTimeout(() => {
        this.setState({ isVisible: !this.state.isVisible });
      }, genInterval*3);
      setTimeout(() => {
        this.setState({ isVisible: !this.state.isVisible });
      }, genInterval*4);
      setTimeout(() => {
        this.setState({ isVisible: !this.state.isVisible });
      }, genInterval*5);
      setTimeout(() => {
        this.setState({ isVisible: !this.state.isVisible });
      }, genInterval*6);
      setTimeout(() => {
        this.setState({ isVisible: !this.state.isVisible });
      }, genInterval*7);
      setTimeout(() => {
        this.setState({ isVisible: !this.state.isVisible });
      }, genInterval*8);
      setTimeout(() => {
        this.setState({ isVisible: !this.state.isVisible });
      }, genInterval*9);

    }
  
    render() {
      return (
        <GenFade pose={this.state.isVisible ? 'visible':'hidden'}>
            {this.props.children}
        </GenFade>
        )
    }
  };
  
  // Fade-out animation for black overlay //
  const backgroundProps={
    visible: { 
        opacity: .9,
     },

    hidden: { 
        opacity: 0,
        transition: (props) => tween({...props, duration:500})
     }
}

const BackFade = posed.div(backgroundProps);
const overlayInterval = 2100*10;

class OverlayFade extends React.Component{
    state = { isVisible:true}

    componentDidMount(){
        setTimeout(() => {
            this.setState({ isVisible:!this.state.isVisible })
        },overlayInterval)
    }

    render(){
        return(
            <BackFade pose={this.state.isVisible ? 'visible':'hidden'}>
                {this.props.children}
            </BackFade>
        )
    }
}

// Fade-in animation for upper div //

const headProps = {
  visible: { 
      opacity: .7,
      transition: (props) => tween({...props, duration:250})
    },
  hidden: { 
      opacity: 0,
    }
}
const Headers = posed.div(headProps);
const intervalHead = 2100*10; 

class HeaderFade extends React.Component {
  state = { isVisible: false }
  
    componentDidMount() {
      setTimeout(() => {
        this.setState({ isVisible: !this.state.isVisible });
      }, intervalHead);
    }

  render(){
    return(
      <Headers pose={this.state.isVisible ? 'visible':'hidden'}>
        {this.props.children}
      </Headers>
    )
  }
}

/// NAVBAR FADES ///

// Fade-in animation for navbar //

const navProps = {
  visible: { 
      opacity: 1,
      transition: (props) => tween({...props, duration:250})
    },

  hidden: { 
      opacity: 0,
    }
}

const NavFade = posed.div(navProps);

// eslint-disable-next-line
class NavBarFade extends React.Component {
  state = { isVisible: false }
  
    componentDidMount() {
      setTimeout(() => {
        this.setState({ isVisible: !this.state.isVisible });
      }, intervalHead);
    }

  render(){
    return(
      <NavFade pose={this.state.isVisible ? 'visible':'hidden'}>
        {this.props.children}
      </NavFade>
    )
  }
}

// Fade-in animation for navigation titles //

const wordProps={
  visible: { 
      opacity: 1,
      transition: (props) => tween({...props, duration:1000})
   },

  hidden: { 
      opacity: 0,
      transition: (props) => tween({...props, duration:300})
   }
}

const DivFade = posed.div(wordProps);
const wordInterval = 2100*10;

// eslint-disable-next-line
class WordFade extends React.Component{
  state = { isVisible:false }

  componentDidMount(){
      setTimeout(() => {
          this.setState({ isVisible:!this.state.isVisible })
      },wordInterval)
  }

  render(){
      return(
          <DivFade pose={this.state.isVisible ? 'visible':'hidden'}>
              {this.props.children}
          </DivFade>
      )
  }
}
import React from 'react';
import MediaQuery from 'react-responsive';
import MUI from 'material-ui/styles/MuiThemeProvider';
import TextField  from 'material-ui/TextField';
import { QuestionIcon } from './Icons'
import ContentBox, { EnterLine } from './animations/ContentBox';
import  Content  from './Content'
import '../styles/components/HubGrid.css';

// Component Grid with Text Field //

export default class HubGrid extends React.Component{
    state = { stage:'animate', lineStage:'idle', value:'', submit:'' };
    
    handleEnter = (e) => {
        if (e.key === 'Enter') {
            this.setState({ lineStage:'animate' })
            this.setState({ stage:'animate' });
            setTimeout(() => {
                this.setState({ submit:this.state.value })
            },500) ;
            setTimeout(() => {
                this.setState({ stage:'idle' })
            },1000) ;
        }
    }

    handleBack = (e) => {
        if (e.key ==='Backspace') {
            this.setState({ stage:'animate', lineStage:'idle' });
            setTimeout(() => {
                this.setState({ submit:'' })
            },500)
        }
    }
    
    handleChange = (event) => {
        this.setState({ value:event.target.value })
    };

    render(){
        return (
            <div id='hubGrid'>
                <div id='textGrid'>
                    <div>
                        <MUI>
                            <TextField
                            className='textField'
                            inputStyle={textfieldStyle.input}
                            floatingLabelText="Someone who can..."
                            floatingLabelStyle={textfieldStyle.floatingLabelStyle}
                            floatingLabelFocusStyle={textfieldStyle.floatingLabelFocusStyle} 
                            underlineFocusStyle={textfieldStyle.underlineFocusStyle}
                            value={this.state.value}
                            onChange={this.handleChange}
                            onKeyPress={this.handleEnter}
                            onKeyDown={this.handleBack}
                            />
                        </MUI>
                        <MediaQuery query='(min-device-width:480px)'>
                            <EnterLine stage={this.state.lineStage}/>
                        </MediaQuery>
                    </div>
                    <MediaQuery query='(min-device-width:480px)'>
                        <div><QuestionIcon/></div>
                    </MediaQuery>

                </div>
                <ContentBox stage={this.state.stage}>
                    <div className='outerflex'>
                        {this.state.submit === '' ? null : <Content entry={this.state.submit}/>}
                    </div>
                </ContentBox>
            </div>
        )
    }
}

const textfieldStyle = {
    input:{
        color:'#ffffff'
    },
    floatingLabelStyle: {
        color: '#ffffff',
      },
      floatingLabelFocusStyle: {
        color: '#FF206E',
      },
      underlineFocusStyle: {
        borderColor:'#FF206E'
      },
}

import React from 'react';
import MUI from 'material-ui/styles/MuiThemeProvider';
import TextField  from 'material-ui/TextField';
import { QuestionIcon } from './Icons'
import ContentBox from './animations/ContentBox';
import  Content  from './Content'
import '../styles/components/HubGrid.css';

// Component Grid with Text Field //

const textfieldStyle = {
    input:{
        color:'#ffffff'
    },
    floatingLabelStyle: {
        color: '#FAFAFA',
      },
      floatingLabelFocusStyle: {
        color: '#00E5FF',
      },
      underlineFocusStyle:{
          color:'#FF1744'
      }
}

export default class HubGrid extends React.Component{
    state = { stage:'idle', value:'', submit:'' };
    
    handleEnter = (e) => {
        if (e.key === 'Enter') {
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
            this.setState({ stage:'animate' });
            setTimeout(() => {
                this.setState({ submit:'' })
            },500) ;
            setTimeout(() => {
                this.setState({ stage:'idle' })
            },1000)
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
                    </div>
                    <div><QuestionIcon/></div>
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


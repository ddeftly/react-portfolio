import React from 'react';
import MUI from 'material-ui/styles/MuiThemeProvider';
import Button from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import '../../styles/pages/Hub.css';

export default class MobileDialog extends React.Component {
    state = { open:false }

    handleTap = () => {
        this.setState({ open:!this.state.open })
    }

    render() {
        const actions = <Button label='OK' onClick={this.handleTap}/>
        return(
            <div className='mobileDialog'>
                <MUI>
                    <Button label='Tap me' onClick={this.handleTap} style={buttonStyle} backgroundColor='#0e0d0d' labelColor='white'/>
                    <Dialog title='Welcome!' actions={actions} open={this.state.open}>
                        Who are you looking for? Submit your answer below.
                        <p>If you're not sure where to start, you might be looking for someone who can:</p>
                        <ul>
                            <li>develop beautiful websites</li>
                            <li>create multiplatform apps</li>
                            <li>analyze {'&'} visualize data</li>
                            <li>write compelling blog posts</li>
                        </ul>
                    </Dialog>
                </MUI>
            </div>
        )
    }
}

const buttonStyle = {
    border:'1px solid white',
}
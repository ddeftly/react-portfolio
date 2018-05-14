import React from 'react';
import { WebIcons, AppIcons, DataIcons, BlogIcons, StartupIcons, HobbyIcons } from './Icons';
import '../styles/components/Content.css';

// Regex Lists //

const inputLists = {

    // Professional  // 
    webDeveloper: ['web', 'develop', 'front', 'back', 'end','react','javascript','html','css','code','hack','design'],
    appDeveloper: ['app','mobile','ios','iphone','apple','android','native'],
    author: ['write','blog','publish','share','Medium'],
    dataAnalyst: ['analyze','data','science','set','machine','learning','statistic'],
    startup: ['plan','deadlines','ideas','learn new','learn','collaborate','hustle','adapt','contribute','professional','get things done','manage','lead', 'work','hard'],

    // Misc //
    hobbies: ['fun','relax','friend','hobbies','chill','balance','laugh','bud', 'friend','good']
}

// No regex match return quotes //

const nullQuotes = {
    quotes: [
        'Your princess is in another castle',
        'Yeah...try again...',
        'That\'s not the magic word',
        'These are not the words you\'re looking for'
    ],
    emojis: [
        '¯\\_(ツ)_/¯',
        '( ͡° ͜ʖ ͡°)',
        'ಠ_ಠ'
    ]
}

// Test Input for Regex Match //

const testVal = (value, inputList) => {
    let trueList = [];
    for (let i=0; i < inputList.length; i++) {
        let exp = new RegExp(inputList[i],'i');
        trueList.push(exp.test(value))
    }
    return(trueList.includes(true))
}

const testInput = (value) => {
    if (testVal(value, inputLists.webDeveloper) === true) {
        return('WebDev')
    }
    else if (testVal(value, inputLists.appDeveloper) === true) {
        return('AppDev')
    }
    else if (testVal(value, inputLists.author) === true) {
        return('Author')
    }
    else if(testVal(value, inputLists.dataAnalyst) === true) {
        return('Data Analyst')
    }
    else if(testVal(value, inputLists.startup) === true) {
        return('Startup')
    }
    else if(testVal(value, inputLists.hobbies) === true) {
        return('Hobbies')
    }
    else {
        return('Idk')
        
    }
}

// Final Content Component //

export default class Content extends React.Component{
    render() {
        if (testInput(this.props.entry) === 'WebDev') {
        return (
            <div className='contentContainer'>
                <h2 id='line1'>Full-stack, at your service.</h2>
                <p id='line2'>I write clean, readable code for pixel-perfect design.</p>
                <WebIcons/>
            </div>);
        }
        else if (testInput(this.props.entry) === 'AppDev') {
            return (
                <div className='contentContainer'>
                    <h2 id='line1'>Your app, every device.</h2>
                    <p id='line2'>I use React Native to write beautiful, responsive mobile apps.</p>
                    <AppIcons/>
                </div>)
        }
        else if (testInput(this.props.entry) === 'Author') {
            return (
                <div className='contentContainer'>
                    <h2 id='line1'>(Code) => return(English)</h2>
                    <p id='line2'>I publish tech articles for coders and normal folk alike.</p>
                    <BlogIcons/>
                </div>)
        }
        else if (testInput(this.props.entry) === 'Data Analyst') {
            return (
                <div className='contentContainer'>
                    <h2 id='line1'>Powered by data.</h2>
                    <p id='line2'>I can teach your machines to think for themselves.</p>
                    <DataIcons/>
                </div>)
        }
        else if (testInput(this.props.entry) === 'Startup') {
            return (
                <div className='contentContainer'>
                    <h2 id='line1'>Start-up ready.</h2>
                    <p id='line2'>My #1 priority is to make your life easier.</p>
                    <StartupIcons/>
                </div>)
        }
        else if (testInput(this.props.entry) === 'Hobbies') {
            return (
                <div className='contentContainer'>
                    <h2 id='line1'>50% coder, 50% gamer, 100% chill</h2>
                    <p>Don't let your memes be dreams.</p>
                    <HobbyIcons/>
                </div>)
        }
        else if (testInput(this.props.entry) === 'Idk') {
            let quote = nullQuotes.quotes[Math.floor(Math.random()*nullQuotes.quotes.length)];
            let emoji = nullQuotes.emojis[Math.floor(Math.random()*nullQuotes.emojis.length)];
            return (
                <div>
                    <div className='textContainer'>
                        <p style={{fontFamily:'Roboto'}} id='textLine1'>{quote}</p>
                    </div>
                    <div className='textContainer'>
                        <p id='textLine2'>{emoji}</p>
                    </div>
                </div>
            )
        }
    }
}
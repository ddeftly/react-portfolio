import React from 'react';
import Link from 'next/link';
import Head from 'next/head'
import { PencilIcon,TrendingIcon,CodeIcon,PhoneIcon,ContactIcon } from '../components/animation/drawicon'
import posed from 'react-pose';
import { tween } from 'popmotion';
import WordFade from '../components/animation/wordfade'

const interval = 2100*10;
const scale = 2.5;
const iconStyle = {
    height:`${scale}em`,
    width:`${scale}em`,
    color:'white',
    hovColor: '#00838F',
}

export default class NavBar extends React.Component{

    render(){
        const names = ['Posts','Data','Web Development','App Development','Contact']
        const sec = ['posts','data','webdev','appdev','contact']
        return(
            <div className='container'>

                <Head>
                    <link href="https://fonts.googleapis.com/css?family=Libre+Baskerville" rel="stylesheet"/>                        
                </Head>

                <div className='bar'>
                    {names.map(p=>(
                        <WordFade><h3>{p}</h3></WordFade>
                    ))}
                    <Link href='posts'><a><PencilIcon height={iconStyle.height} width={iconStyle.width} strokeColor={iconStyle.color}/></a></Link>
                    <Link href='data'><a><TrendingIcon height={iconStyle.height} width={iconStyle.width} strokeColor={iconStyle.color}/></a></Link>
                    <Link href='webdev'><a><CodeIcon height={iconStyle.height} width={iconStyle.width} strokeColor={iconStyle.color}/></a></Link>
                    <Link href='appdev'><a><PhoneIcon height={iconStyle.height} width={iconStyle.width} strokeColor={iconStyle.color}/></a></Link>
                    <Link href='contact'><a><ContactIcon height={iconStyle.height} width={iconStyle.width} strokeColor={iconStyle.color}/></a></Link>                </div>

                <style jsx global>{`
                    .container {
                        background:black;
                        opacity:.7;
                        z-index:-1;
                    }

                    .bar {
                        height:2in;
                        display:grid;
                        grid-template:1fr 1fr/ repeat(5, 1fr);
                        justify-items:center;
                        color:white;
                    }

                    h3 {
                        font-size:1em;
                        font-family: 'Libre Baskerville', serif;
                        align-self:end;
                        letter-spacing:1px;
                        font-weight:lighter;
                        padding-top:20px;
                    }
                    .icons {
                        align-self:start;
                    }
                    
                `}</style>

            </div>
        )
    }
}

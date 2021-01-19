import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'
import HeroImg from '../../imgs/hero.png';

export const HeroC = styled.div`
    background: url(${HeroImg});
    height: 630px;
    bbackground-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    top: 0;
    z-index: 10; 
`
export const Padding = styled.div`
    padding-top: 140px;
    @media screen and (max-width: 900px){
        padding-top: 260px;
    }
   
`

export const Heading = styled.h1`
    color: #fff;
    font-size: 6rem;
    display: flex;
    align-items: start;
    padding-left: 150px;
    text-decoration: none;

    @media screen and (max-width: 900px){
        font-size: 2.8rem;
        padding-left: 20px;
    }
`
export const Subheading = styled.h2`
    color: #fff;
    font-size: 3.2rem;
    display: flex;
    align-items: start;
    padding-left: 150px;
    text-decoration: none;
    padding-top: 60px;

    @media screen and (max-width: 900px){
        font-size: 1.8rem;
        padding-left: 20px;
    }
`
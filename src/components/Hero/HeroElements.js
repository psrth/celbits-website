import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'
import HeroImg from '../../imgs/hero.png';

export const HeroC = styled.div`
    background: url(${HeroImg});
    height: 750px;
    background-repeat: no-repeat; 
    top: 0;
    z-index: 10;
    
`

export const Heading = styled.h1`
    color: #000;
    display: flex;
    align-items: center;
    text-decoration: none;
    height: 100%;
`
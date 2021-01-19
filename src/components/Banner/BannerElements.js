import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'

export const BannerContainer = styled.div`
    background: ${({blueBg}) => (blueBg ? '#1155EB' : '#FF5345')};       
    height: 125px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 1000px){
        height: 175px;
    }
`
export const BannerGrid = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    z-index: 1;
    width: 100%;
    max-width: 1100px;

    @media screen and (max-width: 1000px){
        flex-direction: column;
    }
`
export const BannerText = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
`
export const BannerH = styled.h1`
    color: #fff;
    font-size: 30px;

    @media screen and (max-width: 1100px){
        font-size: 24px;
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 0px;
        padding-bottom: 5px;
        text-align: center;

    }
`
export const BannerSH = styled.h1`
    color: #fff;
    font-size: 20px;
    padding-top: 6px;
    @media screen and (max-width: 1100px){
        font-size: 18px;
        padding-left: 20px;
        padding-right: 20px;
        text-align: center;
        padding-top: 5px;
        padding-bottom: 5px;

    }
`
export const BannerBtnWrap = styled.div`
    display: flex;
    
    @media screen and (min-width: 1100px){
        align-items: center;
        padding-top: 10px;
    }
`

export const BannerBtn = styled(LinkR)`
    border-radius: 50px;
    background: #fff;
    white-space: nowrap;
    padding: 12px 20px;
    color: ${({blueBg}) => (blueBg ? '#1155EB' : '#FF5345')}; 
    font-size: 24px;
    font-weight: 600;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({blueBg}) => (blueBg ? '#1155EB' : '#FF5345')}; 
        color: #fff;
    }

    @media screen and (max-width: 1100px){
        font-size: 18px;
        padding: 8px 12px;
    }
`

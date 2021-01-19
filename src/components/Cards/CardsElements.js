import styled from 'styled-components'

export const CardsContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    padding-bottom: 100px;
    padding-top: 100px;

    @media screen and (max-width: 768px){
        height: 100%;
        padding-top: 40px;
    }

    @media screen and (max-width: 480px){
        height: 100%;
        padding-top: 40px;
    }

`   

export const CardsWrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 20px;
    padding: 0;
    height: 100%;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const Card = styled.div`
    background: ${props => props.inputColor || "#000"};
    display: flex;
    flex-direction: column;
    justify-content: between;
    align-items: center;
    border-radius: 10px;
    height: 400px;
    width: 300px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const CardIcon = styled.div`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`
export const CardsH1 = styled.h1`
    font-size: 2.5rem;
    color: #000;
    text-align: center;
    margin-bottom: 50px;

    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
`

export const CardH2 = styled.h2`
    font-size: 2rem;
    color: #fff;
    margin-bottom: 10px;
    text-align: center;
    padding: 0 15px;
`
export const CardsH5 = styled.h2`
    font-size: 1rem;
    color: #000;
    margin-bottom: 10px;
`
export const CardP = styled.p`
    font-size: 1rem;
    color: #fff;
    text-align: center;
    padding: 0 15px;
`
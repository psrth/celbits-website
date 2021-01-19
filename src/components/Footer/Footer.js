import React from 'react'
import styled from 'styled-components'

export const FooterC = styled.div`
    height: 100px;
    background: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
`

export const FooterH1 = styled.div`
    font-size: 1.2rem;
    text-align: center;
    font-weight: bold;
`

const Footer = () => {
    return (
        <div>
            <FooterC>
                <FooterH1>designed and developed by @psrth, 2021</FooterH1>
            </FooterC>
        </div>
    )
}

export default Footer;

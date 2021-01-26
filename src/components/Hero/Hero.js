import React from 'react'
import {HeroC, Heading, Padding, Subheading} from '../Hero/HeroElements.js'

const Hero = () => {
    return(
        <div>
            <HeroC id="home">
                <Padding></Padding>
                <Heading>center for</Heading>
                <Heading>entrepreneurial</Heading>
                <Heading>leadership</Heading>
                <Subheading>BITS Pilani, Pilani Campus</Subheading>
            </HeroC>
        </div>
    )
}

export default Hero;
import React from 'react'
import {AboutC, AboutText, AboutHeading, AboutDescription, AboutImgCarousel} from '../About/AboutElements.js'

const About = () => {
    return(
        <AboutC>
            <AboutText>
                <AboutHeading>About Us</AboutHeading>
                <AboutDescription>Center for Entrepreneurial Leadership (CEL) is a Center for Excellence at BITS Pilani, Pilani Campus. {"\n"}{"\n"}As the Entrepreneurship Cell of one of the premier institutes of the country, the prime focus of the organization is to provide an environment conducive to promoting the entrepreneurial spirit and related skills among not only the students of the college but all across the nation. {"\n"}{"\n"}Through an amalgamation of various projects, we aspire to cater to the interests of a wide variety of people - ranging from students with an entrepreneurial bent to economically weaker sections in the nearby rural areas, as well as established startups in need of funding or mentorship.</AboutDescription>
            </AboutText>
            <AboutImgCarousel></AboutImgCarousel>
        </AboutC>
    )
}

export default About;
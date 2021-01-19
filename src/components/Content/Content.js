import React from 'react'
import {ContentContainer, ContentWrapper, ContentRow, Column1, Column2, TextWrapper, Topline, Heading, Subheading, ImgWrap, Img} from './ContentElements'

const Content = ({lightBg, id, imgStart, topline, heading, description, lightText, darkText, img}) => {
    return (
        <div>
            <ContentContainer lightBg={lightBg} id={id}>
                <ContentWrapper>
                    <ContentRow imgStsrt={imgStart}>
                        <Column1>
                        <TextWrapper>
                            <Topline darkText={darkText}>{topline}</Topline>
                            <Heading lightText={lightText}>{heading}</Heading>
                            <Subheading darkText={darkText}>{description}</Subheading>
                        </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img}/>
                            </ImgWrap>
                        </Column2>
                    </ContentRow>
                </ContentWrapper>
            </ContentContainer>
        </div>
    )
}

export default Content;

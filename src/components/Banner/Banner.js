import React from 'react'
import {BannerContainer, BannerGrid, BannerText, BannerH, BannerSH, BannerBtnWrap, BannerBtn} from './BannerElements'

const Banner = ({blueBg, bannerHeading, bannersubHeading, bannerBtnText}) => {
    return (
        <div>
            <BannerContainer blueBg={blueBg}>
                <BannerGrid>
                    <BannerText>
                        <BannerH>{bannerHeading}</BannerH>
                        <BannerSH>{bannersubHeading}</BannerSH>
                    </BannerText>
                    <BannerBtnWrap>
                        <BannerBtn blueBg={blueBg} to="/">{bannerBtnText}</BannerBtn>
                    </BannerBtnWrap>
                </BannerGrid>
            </BannerContainer>
        </div>
    )
}

export default Banner;

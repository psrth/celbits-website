import React from 'react'
import {BannerContainer, BannerGrid, BannerText, BannerH, BannerSH, BannerBtnWrap, BannerBtn} from './BannerElements'

const Banner = ({blueBg, bannerHeading, bannersubHeading, bannerBtnText, id}) => {
    return (
        <div>
            <BannerContainer blueBg={blueBg} id={id}>
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

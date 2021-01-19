import React from 'react'
import {CardsContainer, CardsH1, CardsWrapper, Card, CardIcon, CardH2, CardP, CardsH5} from './CardsElements'
import Icon1 from '../../imgs/logo1.png'
import Icon2 from '../../imgs/logo2.jpg'
import Icon3 from '../../imgs/logo3.jpg'
import Icon4 from '../../imgs/logo4.png'

const Startups = () => {
    return (
        <div>
            <CardsContainer id="startups">
                <CardsH1>Hottest Startups on Campus</CardsH1>
                <CardsWrapper>
                    <Card inputColor="#1155EB">
                        <CardIcon src="../../imgs/logo1.png"/>
                        <CardH2>Pepper Content</CardH2>
                        <CardP>We host India's largest student-run startup conclave.</CardP>
                    </Card>
                    <Card inputColor="#FF5345">
                        <CardIcon src={Icon2}/>
                        <CardH2>Summer at a Startup</CardH2>
                        <CardP>Provide summer internships to BITSIANS.</CardP>
                    </Card>
                    <Card inputColor="#0ED1AA">
                        <CardIcon src={Icon3}/>
                        <CardH2>Startup Sphere</CardH2>
                        <CardP>Promotes the spirit of entrepreneurship on campus.</CardP>
                    </Card>
                    <Card inputColor="#752F8D">
                        <CardIcon src={Icon4}/>
                        <CardH2>Rural Entrepreneurship Division</CardH2>
                        <CardP>Promotes rural entrepreneurship.</CardP>
                    </Card>

                    <Card inputColor="#1155EB">
                        <CardIcon src="../../imgs/logo1.png"/>
                        <CardH2>Pepper Content</CardH2>
                        <CardP>We host India's largest student-run startup conclave.</CardP>
                    </Card>
                    <Card inputColor="#FF5345">
                        <CardIcon src={Icon2}/>
                        <CardH2>Summer at a Startup</CardH2>
                        <CardP>Provide summer internships to BITSIANS.</CardP>
                    </Card>
                    <Card inputColor="#0ED1AA">
                        <CardIcon src={Icon3}/>
                        <CardH2>Startup Sphere</CardH2>
                        <CardP>Promotes the spirit of entrepreneurship on campus.</CardP>
                    </Card>
                    <Card inputColor="#752F8D">
                        <CardIcon src={Icon4}/>
                        <CardH2>Rural Entrepreneurship Division</CardH2>
                        <CardP>Promotes rural entrepreneurship.</CardP>
                    </Card>

                </CardsWrapper>
                
            </CardsContainer>
        </div>
    )
}

export default Startups;

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
                        <CardIcon />
                        <CardH2>Pepper Content</CardH2>
                        <CardP>Pepper is a content creation platform across text, graphic and video.</CardP>
                    </Card>
                    <Card inputColor="#FF5345">
                        <CardIcon src={Icon2}/>
                        <CardH2>Swiggy</CardH2>
                        <CardP>Order food online from restaurants and get it delivered. </CardP>
                    </Card>
                    <Card inputColor="#0ED1AA">
                        <CardIcon src={Icon3}/>
                        <CardH2>Zomato</CardH2>
                        <CardP>Discover over a million restaurants across United States, India, ...</CardP>
                    </Card>
                    <Card inputColor="#752F8D">
                        <CardIcon src={Icon4}/>
                        <CardH2>Folks</CardH2>
                        <CardP>Meet the right people with the same interests in your vicinity.</CardP>
                    </Card>

                    <Card inputColor="#0ED1AA">
                        <CardIcon src={Icon4}/>
                        <CardH2>Tesla Motors</CardH2>
                        <CardP>Tesla is accelerating the world's transition to sustainable energy.</CardP>
                    </Card>
                    <Card inputColor="#752F8D">
                        <CardIcon src="../../imgs/logo1.png"/>
                        <CardH2>Zerodha</CardH2>
                        <CardP>Online platform to invest in stocks, derivatives, mutual funds, and more.</CardP>
                    </Card>
                    <Card inputColor="#1155EB">
                        <CardIcon src={Icon2}/>
                        <CardH2>Cure.fit</CardH2>
                        <CardP>Get Trained In Yoga, Dance Fitness and Sports Workouts At Cult.Fit </CardP>
                    </Card>
                    <Card inputColor="#FF5345">
                        <CardIcon src={Icon3}/>
                        <CardH2>Mercedes Motorsport</CardH2>
                        <CardP>Mercedes AMG Petronas F1 Team official merch.</CardP>
                    </Card>
                    

                </CardsWrapper>
                
            </CardsContainer>
        </div>
    )
}

export default Startups;

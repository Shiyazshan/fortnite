import React from 'react'
import styled from 'styled-components'
import WidgetImage from '../assets/images/1.png'
import WidgetImage1 from '../assets/images/2.png'
import WidgetImage2 from '../assets/images/3.png'
import { Fade } from 'react-reveal'

const SlickSect = () => {
    const Data = [
        {
            id:1,
            image:WidgetImage,
            description:"Explore large, destructible environments where no two games are ever the same."
        },
        {
            id:2,
            image:WidgetImage1,
            description:"Team up with friends by sprinting, climbing and smashing your way to earn your Victory Royale"
        },
        {
            id:3,
            image:WidgetImage2,
            description:"Discover even more ways to play across thousands of creator-made game genres"
        },
    ]
  return (
    <Cover>
      <Container >
        {
            Data.map(item=>(
                <Widget>
                    <Fade bottom>

                    <img src={item.image}/>
                    <h6>{item.description}</h6>
                    </Fade>
                </Widget>
            ))
        }
      </Container>
    </Cover>
  )
}

export default SlickSect

const Cover = styled.div`
    padding:150px 0px;
`;
const Container = styled.div`
    display:flex;
    justify-content:space-between;
`;
const Widget = styled.div`
    width:30%;
    img{
        width:100%;
    }
    h6{
        text-align:center;
        font-size:16px;
        font-weight: unset;
        font-family:"roboto-light";
        margin-top:10px
    }
`;
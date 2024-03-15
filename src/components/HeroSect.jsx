import React from "react";
import styled from "styled-components";
import HeroImag from "../assets/images/hero.png";
import { Fade } from "react-reveal";

const HeroSect = () => {
  return (
    <Cover>
      <Top>
        <Fade left>
          <h5>
            Epic Games : An American video game and software developer and
            publisher based in Cary, North Carolina.
          </h5>
        </Fade>
        <Fade>
          <ImageCover>
            <img
              src={HeroImag}
              style={{ width: "100%", objectFit: "contain" }}
            />
          </ImageCover>
        </Fade>
        <Fade bottom>
          <p>
            Create, play, and battle with friends for free in Fortnite. Be the
            last player standing in Battle Royale and Zero Build, experience a
            concert or live event, or discover over a million creator made
            games, including racing, parkour, zombie survival, and more. Each
            Fortnite island has an individual age rating so you can find the one
            that's right for you and your friends. Find it all in Fortnite ...
            Drop In.
          </p>
        </Fade>
        <ButtonSect>
          <Button>Visit Website</Button>
        </ButtonSect>
      </Top>
    </Cover>
  );
};

export default HeroSect;

const Cover = styled.div``;
const Top = styled.div`
  h5 {
    text-align: center;
    font-size: 30px;
    text-align: center;
    color: #ffffff;
    font-weight: unset;
    margin-bottom: 20px;
    letter-spacing: 1px;
    font-family: "roboto-thin";
  }
  p {
    text-align: center;
    margin-top: 15px;
    font-weight: unset;
    line-height: 24px;
    font-family: "roboto-regular";
  }
`;
const ImageCover = styled.div``;
const Button = styled.button`
  width: 300px;
  height: 40px;
  background: #fff;
  border: none;
  cursor: pointer;
  outline: none;
  margin: 0 auto;
`;
const ButtonSect = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

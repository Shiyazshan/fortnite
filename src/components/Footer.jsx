import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Cover>
      <Top>
        <h3>Interested in delving deeper into the project?</h3>
        <h5>
          If you'd like to explore further details about our initiatives or any of our affiliated brands, don't hesitate
          to connect. You can reach out to us via email at
          
          <a href="mailto:hello@abc.com">hello@abc.com</a>
            or give us a call at
            <a href="tel:+91 480 20802730">

             +91 480 20802730.
            </a>
        </h5>
      </Top>
      <Bottom>
        <Button>Ring us on Skype</Button>
        <Button2>Contact Us</Button2>
      </Bottom>
      <Banner>
      © 2019-2023 abcTechnology Solutions Pvt. Ltd. All Rights Reserved
      </Banner>
    </Cover>
  );
};

export default Footer;

const Cover = styled.div`
  padding: 200px 0px;
  position: relative;
`;
const Top = styled.div`
    text-align:center;
    h3{
        font-size: 35px;
    }
    h5{
        font-size:22px;
        font-family: "roboto-thin";
        font-weight: unset;
        margin-top:30px
    }
    a{
      font-family: "roboto-light";
        font-weight: unset;
        color: #fff;
        text-decoration: none;
        padding: 0 10px;
    }
`;
const Bottom = styled.div`
    display:flex;
    justify-content:space-between;
    padding-top:30px;
`;
const Button = styled.button`
    width:46%;
    border: 1px solid #fff;
    height:40px;
    background:none;
    color:#fff;

`;
const Button2 = styled.button`
    width:46%;
    border: 1px solid #fff;
    height:40px;

`
const Banner = styled.div`
text-align: center;
position: absolute;
bottom: 20px;
font-family: "roboto-thin";
font-size: 14px;
letter-spacing: 1px;
transform: translate(-50%, -50%);
left: 50%;
`;
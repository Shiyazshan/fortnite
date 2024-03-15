import React from "react";
import styled from "styled-components";
import CountUp from "react-countup";

const Contributers = () => {
  return (
    <Cover>
      <Top>
        <h4>Our Contribution</h4>
        <h6>
          Our core offering extends beyond mere profit generation; we emphasize the growth and active involvement of our
          user community. Collaborating with us represents an investment, rather than a mere expenditure. Our dedication
          to providing distinctive digital interactions guarantees unparalleled benefits for our clientele.
        </h6>
      </Top>
      <Bottom>
        <Card>
       

            <h5> $<CountUp end={100}></CountUp></h5>
            <h6>Daily User Engagements</h6>
        </Card>
        <Card>
            <h5>$ <CountUp end={500}></CountUp>K</h5>
            <h6>Revenue Surge for an Platform</h6>
        </Card>
        <Card>
            <h5> <CountUp end={5}></CountUp>X</h5>
            <h6>ROAS on all our marketing campaigns</h6>
        </Card>
      </Bottom>
    </Cover>
  );
};

export default Contributers;

const Cover = styled.div``;
const Top = styled.div`
  text-align: center;
  h4 {
    font-size: 35px;
    font-family: "roboto-light";
    font-weight: unset;
  }
  h6{
    font-size:16px;
     font-family: "roboto-light";
    font-weight: unset;
    margin-top:10px;
  }
`;
const Bottom = styled.div`
    padding-top:40px;
    display:flex;
    justify-content:space-between;
`;
const Card = styled.div`
width:25%;
font-weight:100;
text-align:center;
h5{
    font-weight:100;
  margin: 0;
    font-size:70px
}
h6{
    font-weight:100;
    font-size:20px;
}
`;
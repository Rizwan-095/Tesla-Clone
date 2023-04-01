import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Section({ title, description, image, time }) {
  return (
    <Wrap background={image}>
      <ItemText>
        <h1>{title}</h1>
        <p>{description}</p>
      </ItemText>
      <span>
        <BtnWrap>
          <LeftBtn>
            <Link to={title.toLowerCase().replace(" ", "-")}>Custom Order</Link>
          </LeftBtn>
          {time && <RightBtn>Existing Inventory</RightBtn>}
        </BtnWrap>
        <DownArr src="down-arrow.svg" />
      </span>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  /* width: 100vw; */
  height: 100vh;
  background-image: url(${(props) => props.background});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const ItemText = styled.div`
  padding: 2rem;
  text-align: center;
  color: #383838;
`;

const BtnWrap = styled.div`
  display: flex;
  margin-bottom: 2rem;

  @media only screen and (max-width: 768px) {
    /* For mobile phones: */
    flex-direction: column;
  }
`;
const LeftBtn = styled.div`
  margin-left: 1rem;
  padding: 1.2rem;
  width: 18rem;
  text-align: center;
  color: white;
  border-radius: 30rem;
  background-color: #686868;
  opacity: 0.7;
  @media only screen and (max-width: 768px) {
    /* For mobile phones: */
    margin-top: 0.8rem;
    padding: 0.7rem;
    width: 13rem;
  }
`;
const RightBtn = styled(LeftBtn)`
  background-color: white;
  color: #686868;
`;
const DownArr = styled.img`
  width: 2rem;
  margin-left: 50%;
  /* transform: translateX(-1rem); */
  animation: animateDown infinite 1.5s;
`;

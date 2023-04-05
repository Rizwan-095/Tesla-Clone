import { Link, useParams } from "react-router-dom";
import data from "./../../../json/carInfo.json";
import styled from "styled-components";

function Model() {
  const { id } = useParams();
  const car = data.find((d) =>
    d.title.toLowerCase().replace(" ", "-").includes(id)
  );

  return (
    <Wrap background={car.image}>
      <h1>{car.title}</h1>
      <LeftBtn>
        <Link to="/">Cancel order</Link>
      </LeftBtn>
      <p>{car.description}</p>
    </Wrap>
  );
}

export default Model;

const Wrap = styled.div`
  /* width: 100vw; */
  height: 100vh;
  background-image: url(/${(props) => props.background});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 0;
  trasnition: all 3s ease-in-out;
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

  &:hover {
    opacity: 1;
    transition: all 0.3s ease-in-out;

    a {
      transition: all 0.3s ease-in-out;
      color: white;
    }
  }

  @media only screen and (max-width: 768px) {
    /* For mobile phones: */
    margin-top: 0.8rem;
    padding: 0.7rem;
    width: 13rem;
  }
`;

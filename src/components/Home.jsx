import React from "react";
import Section from "./Section";
import data from "./../../json/carInfo.json";
import styled from "styled-components";

function Home() {
  const Sections = () => (
    <>
      {data.map((d) => (
        <Section
          key={d.id}
          title={d.title}
          description={d.description}
          image={d.image}
          time={d.time}
        ></Section>
      ))}
    </>
  );

  return <Sections />;
}

export default Home;

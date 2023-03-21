import React from "react";
import Section from "./Section";
import data from "./../../json/carInfo.json";

function Home() {
  const Test = () => (
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

  return (
    <div>
      <Test />
    </div>
  );
}

export default Home;

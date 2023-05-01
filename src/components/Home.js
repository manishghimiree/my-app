import axios from "axios";
import { useEffect, useState } from "react";
import * as React from "react";

import ServiceCard from "./ServiceCard";

const Home = () => {
  const [admin, setDetails] = useState([]);

  const getDetails = () => {
    axios.get("https://admin.naxa.com.np/api/services").then((res) => {
      const admin = res.data;
      console.log("Details from api", admin);
      setDetails(admin);
    });
  };
  //  https://admin.naxa.com.np/api/services
  useEffect(() => {
    getDetails();
  }, []);

  return (
    <div style={{ paddingLeft: 50, paddingRight: 50 }}>
      {/* <h1>
        At NAXA, we work on ideas; ideas that can provide simple solutions to
        complex problems
      </h1>
      <p>
        We work as a team to generate, explore, build and validate ideas. We
        also contextualize innovations around the world to find the best fitting
        solutions to local problems.
      </p> */}
      {admin.map((row, index) => (
        <ServiceCard service={row} key={index} index={index} />
      ))}
    </div>
  );
};

export default Home;

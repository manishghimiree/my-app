import React, { useState } from "react";
import ServiceCard from "./ServiceCard";

function MyServicesPage() {
  const [services, setServices] = useState([
    {
      id: 1,
      title: "Software & Apps Development",
      description:
        "We build digital applications to provide digital solutions that contribute to efficient data collection and visualization focusing mainly on geodata collection and visualization..",
      price: "$500",
    },
    {
      id: 2,
      title: "GIS Mapping & Analysis",
      description:
        "The core domain of the company is digital mapping. We work in desktop, web, and mobile mapping and produce accurate and visually appealing digital maps..",
      price: "$1000",
    },
    {
      id: 3,
      title: "Data Collection & Visualization",
      description:
        "We focus on the use of location datasets and visualizing them through interactive and customized map-based applications and portals.",
      price: "$1500",
    },
    {
      id: 4,
      title: "ICT & Digital Development Research",
      description:
        "The core domain of the company is digital mapping. We work in desktop, web and mobile mapping and produce accurate and visually appealing digital maps.",
    },
    {
      id: 4,
      title: "Frontier Technologies (Drones, VR..)",
      description:
        "We experiment with the use of frontier technologies (Drones and Virtual Reality), explore pathways to contextualize and scale up these technologies in the local context of Nepal.",
    },
  ]);

  return (
    <div>
      <h1>My Services</h1>
      <div>
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
}

export default MyServicesPage;

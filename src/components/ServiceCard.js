import React from "react";

function ServiceCard({ service, index }) {
  return (
    <div>
      {index % 2 === 0 ? (
        <div style={{ flexDirection: "row", display: "flex", gap: 4 }}>
          <img style={{ width: 400, height: 400 }} src={service.photo} />

          <div>
            <h2>{service.title}</h2>
            <span dangerouslySetInnerHTML={{ __html: service.description1 }} />
            <span dangerouslySetInnerHTML={{ __html: service.description2 }} />
            <p>{service.price}</p>
          </div>
        </div>
      ) : (
        <div style={{ flexDirection: "row", display: "flex", gap: 4 }}>
          <div>
            <h2>{service.title}</h2>
            <span dangerouslySetInnerHTML={{ __html: service.description1 }} />
            <span dangerouslySetInnerHTML={{ __html: service.description2 }} />
            <p>{service.price}</p>
          </div>
          <img style={{ width: 400, height: 400 }} src={service.photo} />
        </div>
      )}
    </div>
  );
}

export default ServiceCard;

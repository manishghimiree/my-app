import React from "react";

const Events = () => {
  const [events, setEvents] = React.useState([
    {
      id: 1,
      name: "Web Development Meetup",
      location: "New York City",
      date: "May 5, 2023",
      time: "6:00 PM",
    },
    {
      id: 2,
      name: "React Workshop",
      location: "San Francisco",
      date: "June 10, 2023",
      time: "2:00 PM",
    },
    {
      id: 3,
      name: "JavaScript Conference",
      location: "Boston",
      date: "July 20, 2023",
      time: "9:00 AM",
    },
  ]);

  return (
    <div>
      <h1>Events</h1>
      {events.map((event) => (
        <div key={event.id}>
          <h2>{event.name}</h2>
          <p>Location: {event.location}</p>
          <p>Date: {event.date}</p>
          <p>Time: {event.time}</p>
        </div>
      ))}
    </div>
  );
};

export default Events;

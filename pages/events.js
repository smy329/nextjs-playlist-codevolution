import { useRouter } from 'next/router';
import React, { useState } from 'react';

const Events = ({ eventList }) => {
  const [events, setEvents] = useState(eventList);
  const router = useRouter();
  const fetchSportsEvents = async () => {
    const response = await fetch(
      'http://localhost:3000/events?category=sports'
    );
    const data = await response.json();
    setEvents(data);
    router.push('/events?category=sports', undefined, { shallow: true });
  };
  return (
    <>
      <button onClick={fetchSportsEvents}>Sports Events</button>
      <h1>List Of Events</h1>
      {events.map((event) => {
        return (
          <div key={event.id}>
            <h2>
              {event.id}
              {event.category}
              {event.description}
              {event.date}
            </h2>
          </div>
        );
      })}
    </>
  );
};

export default Events;

export async function getServerSideProps(context) {
  //extract query object
  const { query } = context;
  //from query object extract category
  const { category } = query;
  //build the query string
  const queryString = category ? 'category=sports' : '';
  const response = await fetch(`http://localhost:3000/events?${queryString}`);
  const data = await response.json();

  return {
    props: {
      eventList: data,
    },
  };
}

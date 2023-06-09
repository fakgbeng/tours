// import React from 'react';
import Tour from "./Tour";
const Tours = (props) => {
  return (
    <main>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="underline"></div>
      </div>
      <div className="tours-container">
        {props.tours.map((tour) => (
          <Tour
            deleteTour={props.deleteTour}
            key={tour.id}
            id={tour.id}
            image={tour.image}
            info={tour.info}
            name={tour.name}
            price={tour.price}
          />
        ))}
      </div>
    </main>
  );
};

export default Tours;

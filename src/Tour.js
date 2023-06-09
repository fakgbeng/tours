import { useState } from "react";

const Tour = (props) => {
  const [readMore, setReadMore] = useState(false);
  const allText = props.info;
  const halftext = props.info.slice(0, 305);
  const readHandler = () => {
    return setReadMore((prevState) => !prevState);
  };
  const deleteHandler = () => {
    props.deleteTour(props.id);
  };

  return (
    <div className="single-tour">
      <div className="tour-price">${props.price}</div>
      <img src={props.image} alt={props.name} />
      <div className="tour-info">
        <h4>{props.name}</h4>
        <p>
          {readMore ? allText : halftext}
          {" ... "}
          {
            <span className="read-more" onClick={readHandler}>
              {!readMore ? "Read more" : "Read less"}
            </span>
          }
        </p>

        <footer>
          <button className="delete-btn" onClick={deleteHandler}>
            Not Interested
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Tour;

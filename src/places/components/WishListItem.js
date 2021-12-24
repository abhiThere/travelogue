import React from "react";
import "./WishListForm.css";
import placeImage from "../../images/default.png";
import Card from "../../shared/components/UIElements/Card";

const WishListItem = (props) => {
  const removePlaceHandler = (id) => {
    const newPlaces = props.places.filter((place) => {
      return place.id !== id;
    });
    console.log(newPlaces);
    props.updatePlaces(newPlaces);
  };

  return (
    <div id="destinations_container">
      {props.places.length !== 0 ? (
        props.places.map((place) => {
          return (
            <Card>
            <div className="dest-card">
              <img
                src={place.photo === "" ? placeImage : place.photo}
                alt="placephoto"
                className="card-image"
              />
              <div className="card-body">
                <h3 className="card-body__name">{place.name}</h3>
                <h4 className="card-body__location">{place.location}</h4>
                <p className="card-body__description">{place.description}</p>
              </div>
              <button
                type="button"
                className="remove-button"
                onClick={() => removePlaceHandler(place.id)}
              >
                Remove from Wishlist
              </button>
              
            </div>
            </Card>
          );
        })
      ) : (
        <h2 className="no-places">
          <b>No Places Added Yet!</b>
        </h2>
      )}
    </div>
  );
};
export default WishListItem;

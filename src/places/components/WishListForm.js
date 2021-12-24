import React, { useState } from "react";

import "./WishListForm.css";

const WishListForm = (props) => {
  const [inputName, setName] = useState("");
  const [inputLocation, setLocation] = useState("");
  const [inputPhoto, setPhoto] = useState("");
  const [inputDescription, setDescription] = useState("");

  const nameHandler = (evt) => {
    setName(evt.target.value);
  };
  const locationHandler = (evt) => {
    setLocation(evt.target.value);
  };
  const photoHandler = (evt) => {
    setPhoto(evt.target.value);
  };
  const descriptionHandler = (evt) => {
    setDescription(evt.target.value);
  };

  const submitHandler = (evt) => {
    evt.preventDefault();

    const placeData = {
      id: Math.random().toString(),
      name: inputName,
      location: inputLocation,
      photo: inputPhoto,
      description: inputDescription,
    };

    props.saveData(placeData);
    setName("");
    setLocation("");
    setDescription("");
    setPhoto("");
  };
  return (
    <React.Fragment>
  
      <div className="backDrop">
      <form
        method="get"
        onSubmit={submitHandler}
        className="destination_details_form"
      >
        <label for="name" className="dest-fields">
          Destination Name
        </label>
        <input
          value={inputName}
          onChange={nameHandler}
          type="text"
          id="name"
          className="dest-input"
          placeholder="Provide a name for the destination"
          required
        />
        <label for="location" className="dest-fields">
          Destination Location
        </label>
        <input
          value={inputLocation}
          onChange={locationHandler}
          type="text"
          id="location"
          className="dest-input"
          placeholder="Where is this destination located"
          required
        />

        <label for="photo" className="dest-fields">
          Photo
        </label>
        <input
          value={inputPhoto}
          onChange={photoHandler}
          type="url"
          id="photo"
          className="dest-input"
          placeholder="Provide a URL for a photo"
        />

        <label for="description" className="dest-fields">
          Destination Description
        </label>
        <textarea
          value={inputDescription}
          onChange={descriptionHandler}
          id="description"
          className="dest-input"
          placeholder="Describe the destination"
        ></textarea>

        <button type="submit" id="add-button">
          Add to Wish List
        </button>
      </form>
      </div>
     
      
    </React.Fragment>
  );
};
export default WishListForm;

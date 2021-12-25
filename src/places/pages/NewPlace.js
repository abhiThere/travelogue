import React from "react";
import './NewPlace.css';
const NewPlace = () => {
  return (
    <div className="new-place__container">
      <form className="NewPlace">
        <label for="title">
          <b>Title:</b>
          <br />
          <br />
          <input
            type="text"
            name="title"
            className="title"
            placeholder="Provide name of the place"
            required
          />
          <br /> <br />
        </label>
        <label for="description">
          <b >Description:</b>
          <br />
          <br />
          <textarea
            name="description"
            className="description"
            placeholder="Describe the place"
            required
          />
          <br /> <br />
        </label>
        <label for="address"><b>Address:</b></label> <br />
        <br />
        <textarea
          name="address"
          className="address"
          placeholder="Provide address of the place"
          required
        />
        <br /> <br />
        <label htmlFor="photo">
          <b>Upload Image:</b> <br />
          <br />
          <input 
            className="upload-image"
            type="file"
            align="center"
            id="image"
            name="image"
            accept="image/*"
          />
        </label>
        <br />
        <br />
        <button className="add-new-place" type="submit">Add Place</button>
      </form>
    </div>
  );
};

export default NewPlace;

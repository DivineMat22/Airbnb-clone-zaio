import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "./UpdateListingPage.css";

const UpdateListingPage = () => {
  const { id } = useParams(); // Get the listing ID from the URL
  const navigate = useNavigate();
  const [listingData, setListingData] = useState({
    title: "",
    location: "",
    price: "",
    image: "",
    description: "",
    amenities: [],
  });

  // Fetch the listing data from the backend
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/listings/${id}`)
      .then((response) => {
        setListingData(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the listing data:", error);
      });
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setListingData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/api/listings/${id}`, listingData)
      .then((response) => {
        console.log("Updated listing:", response.data);
        navigate("/view-listings"); // Redirect after update
      })
      .catch((error) => {
        console.error("There was an error updating the listing:", error);
      });
  };

  return (
    <div className="update-listing-page">
      <h2>Update Listing</h2>
      <form onSubmit={handleSubmit} className="update-listing-form">
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={listingData.title}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={listingData.location}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            value={listingData.price}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={listingData.description}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="image">Image URL</label>
          <input
            type="text"
            id="image"
            name="image"
            value={listingData.image}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="amenities">Amenities</label>
          <input
            type="text"
            id="amenities"
            name="amenities"
            value={listingData.amenities.join(", ")}
            onChange={handleInputChange}
            placeholder="Enter amenities separated by commas"
          />
        </div>
        <button type="submit">Update Listing</button>
      </form>
    </div>
  );
};

export default UpdateListingPage;

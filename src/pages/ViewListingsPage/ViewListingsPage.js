import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./ViewListingsPage.css";

const ViewListingsPage = () => {
  const [listings, setListings] = useState([]);
  const navigate = useNavigate();

  // Fetch listings data from the backend
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/listings")
      .then((response) => {
        setListings(response.data);
      })
      .catch((error) => {
        console.error("Error fetching listings", error);
      });
  }, []);

  // Handle delete functionality
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this listing?")) {
      axios
        .delete(`http://localhost:5000/api/listings/${id}`)
        .then((response) => {
          setListings((prevListings) =>
            prevListings.filter((listing) => listing.id !== id)
          );
          alert(response.data.message);
        })
        .catch((error) => {
          console.error("Error deleting listing", error);
        });
    }
  };

  return (
    <div className="view-listings-page">
      <h2>Your Listings</h2>
      <div className="listings-container">
        {listings.length === 0 ? (
          <p>No listings available.</p>
        ) : (
          listings.map((listing) => (
            <div key={listing.id} className="listing-card">
              <img
                src={listing.image}
                alt={listing.title}
                className="listing-image"
              />
              <div className="listing-details">
                <h3>{listing.title}</h3>
                <p>{listing.location}</p>
                <p>${listing.price} per night</p>
                <div className="listing-actions">
                  <button onClick={() => navigate(`/update-listing/${listing.id}`)}>Update</button>
                  <button onClick={() => handleDelete(listing.id)}>Delete</button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ViewListingsPage;

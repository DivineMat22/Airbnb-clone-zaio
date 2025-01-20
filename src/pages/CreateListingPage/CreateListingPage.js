import React, { useState } from 'react';
import axios from 'axios';

const CreateListingPage = () => {
  const [listingData, setListingData] = useState({
    title: '',
    location: '',
    price: '',
    amenities: [],
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setListingData({
      ...listingData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/listings', listingData, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}` // Use token or user data for authorization
        }
      });
      console.log('Listing created:', response.data);
      // Redirect or show success message
    } catch (error) {
      console.error('Error creating listing:', error);
    }
  };

  return (
    <div>
      <h2>Create a New Listing</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={listingData.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={listingData.location}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={listingData.price}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Amenities:</label>
          <input
            type="text"
            name="amenities"
            value={listingData.amenities}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={listingData.description}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Create Listing</button>
      </form>
    </div>
  );
};

export default CreateListingPage;

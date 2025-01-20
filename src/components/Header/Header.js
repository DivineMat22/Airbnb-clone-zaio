import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [location, setLocation] = useState("Where");
  const [date, setDate] = useState("Date");
  const [guests, setGuests] = useState("Who");

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo Section */}
        <div className="logo-section">
          <Link to="/">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXznR7lQ12041Mu_H6Tq_rc_NKpvDiPyUxDWUjWSIGVZKOyZqOGQi6Zo1gX19aD2QrhNY&usqp=CAU"
              alt="Airbnb Logo"
              className="logo"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="nav-links">
          <Link to="/stays" className="nav-item">
            Stays
          </Link>
          <Link to="/experiences" className="nav-item">
            Experiences
          </Link>
        </div>

        {/* Search Buttons (Where, Date, Who) */}
        <div className="search-buttons">
          <button className="search-button" onClick={() => setLocation("New York")}>
            {location}
          </button>
          <button className="search-button" onClick={() => setDate("Select Date")}>
            {date}
          </button>
          <button className="search-button" onClick={() => setGuests("Guests")}>
            {guests}
          </button>
        </div>

        {/* Header Actions */}
        <div className="header-actions">
          <Link to="/create-listing" className="nav-button">
            Become a Host
          </Link>
          <Link to="/profile" className="profile-icon">
            <img
              src="https://www.shutterstock.com/image-vector/grey-person-icon-profile-vector-260nw-2178946223.jpg"
              alt="Profile"
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

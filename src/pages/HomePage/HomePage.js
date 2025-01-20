import React from "react";
import "./HomePage.css";

const HomePage = () => {
  // Listings with real image URLs
  const listings = [
    {
      id: 1,
      title: "Modern Apartment in New York",
      description: "A cozy apartment located in the heart of New York.",
      price: "$150/night",
      image: "https://media.architecturaldigest.com/photos/60dcd7c7ad0f764050985a0a/master/w_1600%2Cc_limit/NHD-50WEST-F.OUDEMAN%25C2%25A9-08.jpg",
    },
    {
      id: 2,
      title: "Beachfront Villa in Bali",
      description: "Relax in a luxurious villa with stunning ocean views.",
      price: "$250/night",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsaTWaGx_v0kyX56vAT3buUZOHKtmw4Trv3w&s",
    },
    {
      id: 3,
      title: "Rustic Cabin in the Woods",
      description: "Escape to a peaceful cabin surrounded by nature.",
      price: "$100/night",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeBterGMaRTOrw1V58AQuSxY6OzWitMIJyWg&s",
    },
    {
      id: 4,
      title: "Luxury Penthouse in Paris",
      description: "Experience the beauty of Paris from a stunning penthouse.",
      price: "$300/night",
      image: "https://robbreport.com/wp-content/uploads/2022/02/Paris_Penthouse3.jpg?w=1000",
    },
    {
      id: 5,
      title: "Cozy Cottage in the Countryside",
      description: "Enjoy a quiet getaway in a charming countryside cottage.",
      price: "$120/night",
      image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/497439395.jpg?k=014b0973580a4b41c57c09e72c3d04caf59534620d1c78c6e7ac237711f634dc&o=&hp=1",
    },
    {
      id: 6,
      title: "Modern Loft in Tokyo",
      description: "Stay in a trendy loft in the bustling city of Tokyo.",
      price: "$200/night",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    },
    {
      id: 7,
      title: "Historic Home in Charleston",
      description: "Experience Southern charm in this beautiful historic home.",
      price: "$180/night",
      image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    },
    {
      id: 8,
      title: "Mountain Chalet in Switzerland",
      description: "A luxurious chalet with breathtaking mountain views.",
      price: "$400/night",
      image: "https://www.skiinluxury.com/blog/wp-content/uploads/2021/03/exterior-1.jpg",
    },
  ];

  return (
    <div className="home-page">
      <h1>Featured Listings</h1>
      <div className="listings-container">
        {listings.map((listing) => (
          <div key={listing.id} className="listing-card">
            <img src={listing.image} alt={listing.title} className="listing-image" />
            <h2>{listing.title}</h2>
            <p>{listing.description}</p>
            <p className="price">{listing.price}</p>
          </div>
        ))}
      </div>
    </div>
    
  );
};

export default HomePage;

const express = require('express');
const cors = require('cors');
const app = express();

// Use CORS and JSON middleware
app.use(cors());
app.use(express.json());

// Mock database (replace with a real database in production)
let listings = [
  {
    id: 1,
    title: 'Modern Apartment in New York',
    location: 'New York',
    price: 320,
    image: '/images/sample1.jpg',
    description: 'A modern apartment in the heart of New York.',
    amenities: ['Wifi', 'Kitchen', 'Air Conditioning'],
  },
  {
    id: 2,
    title: 'Cozy Cottage in the Woods',
    location: 'Vermont',
    price: 150,
    image: '/images/sample2.jpg',
    description: 'A quiet cottage surrounded by nature.',
    amenities: ['Wifi', 'Fireplace'],
  },
];

// Endpoint to get a listing by ID
app.get('/api/listings/:id', (req, res) => {
  const listingId = parseInt(req.params.id);
  const listing = listings.find((l) => l.id === listingId);
  if (listing) {
    res.json(listing);
  } else {
    res.status(404).send('Listing not found');
  }
});

// Endpoint to update a listing
app.put('/api/listings/:id', (req, res) => {
  const listingId = parseInt(req.params.id);
  const updatedData = req.body;
  let listing = listings.find((l) => l.id === listingId);

  if (listing) {
    // Update the listing with new data
    listing = { ...listing, ...updatedData };
    listings = listings.map((l) =>
      l.id === listingId ? listing : l
    );
    res.json(listing);
  } else {
    res.status(404).send('Listing not found');
  }
});
// Endpoint to delete a listing
app.delete('/api/listings/:id', (req, res) => {
    const listingId = parseInt(req.params.id);
    listings = listings.filter((listing) => listing.id !== listingId);
  
    res.status(200).send({ message: 'Listing deleted successfully' });
  });
  app.post('/api/listings', (req, res) => {
    const newListing = req.body;
    newListing.id = listings.length + 1; // Simulate auto-increment ID
    listings.push(newListing);
    res.status(201).json(newListing);
  });
  

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
});

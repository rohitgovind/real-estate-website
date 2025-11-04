const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Sample data - this would normally come from a database
const properties = [
    {
        id: 1,
        title: 'Luxurious Penthouse Suite',
        price: 850000,
        location: 'Downtown Manhattan',
        type: 'Penthouse',
        bedrooms: 3,
        bathrooms: 3.5,
        area: 2200,
        image: '/src/assets/images/Property-1.jpg',
        description: 'Stunning penthouse with panoramic city views',
    },
    {
        id: 2,
        title: 'Modern Suburban Estate',
        price: 750000,
        location: 'Beverly Hills',
        type: 'House',
        bedrooms: 5,
        bathrooms: 4,
        area: 3500,
        image: '/src/assets/images/Property-2.jpg',
        description: 'Spacious family home with modern amenities',
    },
    {
        id: 3,
        title: 'Cozy Beach House',
        price: 650000,
        location: 'Malibu Coast',
        type: 'House',
        bedrooms: 3,
        bathrooms: 2,
        area: 1800,
        image:
            'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        description: 'Beautiful beachfront property with ocean views',
    },
    {
        id: 4,
        title: 'Urban Loft Apartment',
        price: 420000,
        location: 'Art District',
        type: 'Loft',
        bedrooms: 1,
        bathrooms: 1.5,
        area: 1100,
        image:
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        description: 'Contemporary loft in the heart of the arts district',
    },
    {
        id: 5,
        title: 'Modern Downtown Apartment',
        price: 320000,
        location: 'Downtown',
        type: 'Apartment',
        bedrooms: 2,
        bathrooms: 2,
        area: 950,
        image:
            'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        description: 'Modern apartment close to amenities',
    },
    {
        id: 6,
        title: 'Luxury Family Villa',
        price: 1250000,
        location: 'Pacific Heights',
        type: 'Villa',
        bedrooms: 6,
        bathrooms: 6,
        area: 5200,
        image:
            'https://images.unsplash.com/photo-1600585153901-2c2b9f9b8a2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        description: 'High-end villa with pool and garden',
    },
    {
        id: 7,
        title: 'Downtown Office Space',
        price: 450000,
        location: 'Business District',
        type: 'Office',
        bedrooms: 0,
        bathrooms: 2,
        area: 3000,
        image:
            'https://images.unsplash.com/photo-1557800636-894a64c1696f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        description: 'Commercial office space in prime location',
    },
    {
        id: 8,
        title: 'Retail Shop Front',
        price: 220000,
        location: 'Market Street',
        type: 'Shop',
        bedrooms: 0,
        bathrooms: 1,
        area: 800,
        image:
            'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        description: 'High foot-traffic retail space',
    },
    {
        id: 9,
        title: 'Suburban Townhouse',
        price: 430000,
        location: 'Suburbs',
        type: 'Townhouse',
        bedrooms: 3,
        bathrooms: 2,
        area: 1600,
        image:
            'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        description: 'Comfortable townhouse ideal for families',
    },
    {
        id: 10,
        title: 'Secure Garage Parking',
        price: 45000,
        location: 'Parking Complex',
        type: 'Garage',
        bedrooms: 0,
        bathrooms: 0,
        area: 250,
        image:
            'https://images.unsplash.com/photo-1536164436696-9f91f3b1b3de?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        description: 'Secure garage in central location',
    },
];

// Helper to filter properties by query params
function filterProperties(query) {
    let result = properties;
    if (query.type) {
        result = result.filter((p) => p.type.toLowerCase() === query.type.toLowerCase());
    }
    if (query.location) {
        result = result.filter((p) => p.location.toLowerCase().includes(query.location.toLowerCase()));
    }
    return result;
}

// Routes
app.get('/api/properties', (req, res) => {
    // Support filtering via query params: ?type=Apartment&location=Downtown
    const filtered = filterProperties(req.query);
    res.json(filtered);
});

app.get('/api/properties/:id', (req, res) => {
    const property = properties.find((p) => p.id === parseInt(req.params.id));
    if (!property) return res.status(404).json({ message: 'Property not found' });
    res.json(property);
});

// Create a new property (in-memory). No DB for now.
app.post('/api/properties', (req, res) => {
    const { title, price, location, type, bedrooms, bathrooms, area, image, description } = req.body;
    if (!title || !price) {
        return res.status(400).json({ message: 'Title and price are required' });
    }
    const nextId = properties.length ? Math.max(...properties.map((p) => p.id)) + 1 : 1;
    const newProp = {
        id: nextId,
        title,
        price: Number(price),
        location: location || 'Unknown',
        type: type || 'Other',
        bedrooms: Number(bedrooms) || 0,
        bathrooms: Number(bathrooms) || 0,
        area: Number(area) || 0,
        image: image || 'https://placehold.co/1200x800',
        description: description || '',
    };
    properties.push(newProp);
    res.status(201).json(newProp);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
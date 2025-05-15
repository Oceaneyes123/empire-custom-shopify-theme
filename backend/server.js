// Simple Node.js Express proxy for Google Places API reviews
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

// const apiKey = process.env.GOOGLE_PLACES_API_KEY; // No longer used for this GMB API endpoint

app.use(cors());

app.get('/api/google-reviews', async (req, res) => {
  // These would need to be passed from your frontend,
  // or you'd need a mapping from your current placeId to these GMB IDs.
  const { gmbAccountId, gmbLocationId } = req.query; 

  if (!gmbAccountId || !gmbLocationId) {
    return res.status(400).json({ error: 'Missing Google My Business accountId or locationId' });
  }

  // IMPORTANT: You MUST obtain this token via OAuth 2.0 flow or service account.
  // This is a placeholder and should be securely managed.
  const OAUTH_ACCESS_TOKEN = process.env.GOOGLE_OAUTH_ACCESS_TOKEN; 

  if (!OAUTH_ACCESS_TOKEN) {
    console.error('OAuth Access Token is not configured on the server.');
    return res.status(500).json({ error: 'Server configuration error: OAuth token missing' });
  }

  try {
    const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
    const url = `https://mybusiness.googleapis.com/v4/accounts/${gmbAccountId}/locations/${gmbLocationId}/reviews`;
    
    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${OAUTH_ACCESS_TOKEN}`,
        'Accept': 'application/json',
      },
    });

    const data = await response.json(); // Try to parse JSON regardless of status for error details

    if (!response.ok) {
      console.error('Google My Business API error response:', data);
      return res.status(response.status).json({ 
        error: 'Failed to fetch reviews from Google My Business API', 
        details: data.error || data // GMB API often returns error details in data.error
      });
    }
    
    // Successfully fetched reviews
    // The data structure is { reviews: [], averageRating: X, totalReviewCount: Y, nextPageToken: Z }
    console.log('Successfully fetched GMB reviews:', data);
    res.json(data);

  } catch (err) {
    console.error('Error fetching from Google My Business API:', err);
    res.status(500).json({ error: 'Server error while fetching Google My Business reviews', details: err.message });
  }
});

// New route to get place details using Google Places API and placeId
app.get('/api/place-details', async (req, res) => {
  const { placeId } = req.query;
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!placeId) return res.status(400).json({ error: 'Missing placeId' });
  if (!apiKey) return res.status(500).json({ error: 'Missing Google Places API key' });
  try {
    const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${encodeURIComponent(placeId)}&fields=place_id,name,formatted_address,geometry,icon,photos,types,url,website,formatted_phone_number,user_ratings_total,rating,reviews&key=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch from Google Places API', details: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
// For nodemon: run `npx nodemon server.js` in backend folder

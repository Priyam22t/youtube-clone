# 📺 YouTube Clone (React + YouTube Data API)

## Overview
This project is a fully functional YouTube Clone built using React.js and the YouTube Data API v3. It replicates core YouTube features with a modern, responsive UI, including real-time video data, search functionality, video playback, comments, channel details, recommendations, and dark mode support. The application is designed to closely mimic the YouTube experience while maintaining clean and modular code.

## Live Features
- 🔥 Trending videos feed
- 🔍 Search videos
- ▶️ Video playback page
- 📊 Real-time views, likes, and comments
- 🗂️ Category-based filtering
- 📺 Recommended videos
- 👤 Channel details (subscribers & info)
- 💬 Live comments section
- 🌙 Dark mode support
- 📱 Fully responsive design

## Tech Stack
- Frontend: React.js (Vite)
- Routing: React Router DOM
- API: YouTube Data API v3
- Styling: Custom CSS (Responsive)
- Date Handling: Moment.js
- State Management: React Hooks

## Project Structure
src/
├── assets/
├── Components/
│   ├── Navbar
│   ├── Sidebar
│   ├── Feed
│   ├── PlayVideo
│   └── Recommended
├── pages/
│   ├── Home
│   ├── Video
│   └── Search
├── data.js
├── App.jsx
└── main.jsx

## Installation & Setup
⚠️ The node_modules folder is not included in this repository.

After cloning the project, run:
npm install
npm run dev

## YouTube API Setup
1. Go to Google Cloud Console
2. Enable YouTube Data API v3
3. Generate an API Key
4. Add the API key inside src/data.js

Example:
export const API_KEY = "YOUR_API_KEY_HERE";

export const value_converter = (value) => {
  if (value >= 1000000) return Math.floor(value / 1000000) + "M";
  if (value >= 1000) return Math.floor(value / 1000) + "K";
  return value;
};

## Extra Features (Optional)
- User authentication
- Video upload simulation
- Watch history & liked videos
- Playlist creation
- Infinite scroll optimization

## Conclusion
This YouTube Clone project is ideal for learning React, API integration, routing, and responsive UI design. It demonstrates how real-world applications consume external APIs and manage complex UI states effectively.

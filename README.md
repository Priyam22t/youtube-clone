📺 YouTube Clone (React + YouTube Data API)

A fully functional YouTube Clone built using React.js and YouTube Data API v3, featuring real-time videos, search, video playback, comments, channel details, recommendations, and dark mode support.

This project was developed step-by-step to closely replicate core YouTube features with a modern UI and responsive design.

🚀 Live Features

🎥 Trending Videos Feed

🔍 Search Videos

▶️ Watch Video Player

📊 Real-time Views, Likes & Comments

🗂️ Category-based Filtering

📺 Recommended Videos

🧑‍💻 Channel Details (Subscribers, Channel Info)

💬 Live Comments Section

🌗 Dark Mode Support

📱 Fully Responsive (Mobile + Desktop)

⚡ Fast Routing with React Router

🛠️ Tech Stack

Frontend: React.js (Vite)

Routing: React Router DOM

API: YouTube Data API v3

Styling: CSS (Custom, Responsive)

Date Handling: Moment.js

State Management: React Hooks (useState, useEffect)

Icons & Assets: Custom icons & images

📂 Project Structure
youtube-clone/
│
├── src/
│   ├── assets/          # Images, icons
│   ├── Components/
│   │   ├── Navbar/
│   │   ├── Sidebar/
│   │   ├── Feed/
│   │   ├── PlayVideo/
│   │   └── Recommended/
│   │
│   ├── pages/
│   │   ├── Home/
│   │   ├── Video/
│   │   └── Search/
│   │
│   ├── data.js          # API key & utility functions
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── public/
├── package.json
└── README.md

🔑 Environment Setup (IMPORTANT)
⚠️ node_modules folder is NOT INCLUDED

Before running the project, you must install dependencies.

Steps to run locally:
npm install
npm start


or (if using Vite):

npm install
npm run dev

🔐 YouTube API Setup

Go to Google Cloud Console

Enable YouTube Data API v3

Create an API Key

Add your API key inside src/data.js

export const API_KEY = "YOUR_YOUTUBE_API_KEY";

🔢 Utility Functions

Includes a value converter for views, likes & subscribers:

export const value_converter = (value) => {
  if (value >= 1000000) return Math.floor(value / 1000000) + "M";
  if (value >= 1000) return Math.floor(value / 1000) + "K";
  return value;
};

🌙 Dark Mode

Toggle between Light / Dark Mode

Dark mode applies globally

CSS variables used for smooth transitions

📱 Responsive Design

Desktop ✔️

Tablet ✔️

Mobile ✔️

Sidebar collapses automatically on smaller screens

⚠️ API Limit Note

YouTube API has daily quota limits

Excessive refresh/search may cause temporary API blocks

Recommended to use your own API key

🧠 Learning Outcomes

Working with real-world APIs

React routing & dynamic params

Handling async data & errors

Component-based architecture

UI/UX best practices

Responsive layouts

State & effect management

🏆 Future Improvements

🔐 User authentication

👍 Like / Dislike persistence

💬 Add reply to comments

📂 Playlists

🔔 Notification system

📈 Watch history

🙌 Acknowledgements

YouTube Data API

React.js Community

Moment.js

Inspiration from YouTube UI

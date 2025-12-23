📺 YouTube Clone (React + YouTube Data API)

A fully functional YouTube Clone built using React.js and YouTube Data API v3, featuring real-time videos, search, video playback, comments, channel details, recommendations, and dark mode support. This project was developed step-by-step to closely replicate core YouTube features with a modern UI and responsive design.

🚀 Live Features
🔥 Trending Videos Feed
🔍 Search Videos
▶️ Watch Video Player
📊 Real-time Views, Likes & Comments
🗂️ Category-based Filtering
📺 Recommended Videos
👤 Channel Details (Subscribers & Info)
💬 Live Comments Section
🌙 Dark Mode Support
📱 Fully Responsive Design

🛠️ Tech Stack
Frontend: React.js (Vite)
Routing: React Router DOM
API: YouTube Data API v3
Styling: CSS (Custom + Responsive)
Date Handling: Moment.js
State Management: React Hooks

📂 Project Structure
src/
 ├── assets/
 ├── Components/
 │    ├── Navbar
 │    ├── Sidebar
 │    ├── Feed
 │    ├── PlayVideo
 │    └── Recommended
 ├── pages/
 │    ├── Home
 │    ├── Video
 │    └── Search
 ├── data.js
 ├── App.jsx
 └── main.jsx

⚠️ Important Note (node_modules Missing)
The node_modules folder is NOT included in this repository. After cloning the project, run the following commands:
npm install
npm run dev

🔑 YouTube API Setup
Go to Google Cloud Console
Enable YouTube Data API v3
Generate an API Key
Add it inside src/data.js

export const API_KEY = "YOUR_API_KEY_HERE";

export const value_converter = (value) => {
  if (value >= 1000000) return Math.floor(value / 1000000) + "M";
  if (value >= 1000) return Math.floor(value / 1000) + "K";
  return value;
};

🌙 Dark Mode
Toggle between Light & Dark themes
Applies globally
Smooth UI transitions

📱 Responsive Design
Desktop ✔️
Tablet ✔️
Mobile ✔️
Collapsible sidebar

🧠 What I Learned
Working with real-world APIs
React Router dynamic routing
Async data handling
Component-based architecture
Responsive UI design
State & effect management

🔮 Future Improvements
User Authentication
Like / Dislike persistence
Comment replies
Playlists
Watch history
Notifications

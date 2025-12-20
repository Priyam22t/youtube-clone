import React, { useState, useEffect } from "react";
import "./Feed.css";

import { Link } from "react-router-dom";
import { API_KEY, value_converter } from "../../data.js";
import moment from "moment";

const Feed = ({ category }) => {


  const [data, setData] = useState([]);

  const fetchData = async () => {
    const videoList_url =
      `https://youtube.googleapis.com/youtube/v3/videos?` +
      `part=snippet,contentDetails,statistics` +
      `&chart=mostPopular` +
      `&maxResults=50` +
      `&regionCode=IN` +
      `&videoCategoryId=${category}` +
      `&key=${API_KEY}`;

    const response = await fetch(videoList_url);
    const json = await response.json();

    console.log("API RESPONSE:", json); // Check what you get

    setData(json.items || []);
  };

  useEffect(() => {
    fetchData();
  }, [category]);


  return (
    <div className="feed">
      {data.map((item, index) => (
        <Link
          to={`/video/${item.snippet?.categoryId}/${item.id}`}
          className="card"
          key={index}
        >
          <img
            src={item.snippet?.thumbnails?.medium?.url}
            alt=""
          />

          <h2>{item.snippet?.title}</h2>
          <h3>{item.snippet?.channelTitle}</h3>

       <p>
  {value_converter(item.statistics?.viewCount)} views •
  {" "}{moment(item.snippet?.publishedAt).fromNow()}
</p>

        </Link>
      ))}
    </div>
  );
};

export default Feed;

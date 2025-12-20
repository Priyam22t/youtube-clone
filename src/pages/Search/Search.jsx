import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { API_KEY, value_converter } from '../../data';
import moment from "moment";
import './Search.css';

const Search = () => {
  const { query } = useParams();
  const [results, setResults] = useState([]);

  const fetchSearchResults = async () => {
    const searchUrl = 
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=30&q=${query}&key=${API_KEY}`;

    await fetch(searchUrl)
      .then(res => res.json())
      .then(data => setResults(data.items));
  };

  useEffect(() => {
    fetchSearchResults();
  }, [query]);

  return (
    <div className="search-results">
      {results.map((video, i) => {
        const videoId = video.id.videoId;
        const categoryId = video.snippet.categoryId || "0";

        return (
          <Link 
            to={`/video/${categoryId}/${videoId}`}
            className="search-card"
            key={i}
          >
            <img 
              src={video.snippet.thumbnails.medium.url} 
              alt=""
            />

            <div>
              <h3>{video.snippet.title}</h3>
              <p>{video.snippet.channelTitle}</p>
              <span>{moment(video.snippet.publishedAt).fromNow()}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Search;

import React, { useState, useEffect } from "react";
import "./PlayVideo.css";

import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";

import moment from "moment";
import { API_KEY, value_converter } from "../../data";

const PlayVideo = ({ videoId }) => {
  const [apiData, setApiData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [comments, setComments] = useState([]);
  const [sortType, setSortType] = useState("top"); // NEW → sorting state

  /* --------------------------------------------------
      FETCH VIDEO DETAILS
  --------------------------------------------------- */
  const fetchVideoData = async () => {
    const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${API_KEY}`;

    await fetch(url)
      .then((res) => res.json())
      .then((data) => setApiData(data.items[0]));
  };

  /* --------------------------------------------------
      FETCH CHANNEL DETAILS
  --------------------------------------------------- */
  const fetchChannelData = async () => {
    if (!apiData) return;

    const channelId = apiData.snippet.channelId;

    const url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${channelId}&key=${API_KEY}`;

    await fetch(url)
      .then((res) => res.json())
      .then((data) => setChannelData(data.items[0]));
  };

  /* --------------------------------------------------
      FETCH COMMENTS
  --------------------------------------------------- */
  const fetchComments = async () => {
    const url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&maxResults=100&videoId=${videoId}&key=${API_KEY}`;

    await fetch(url)
      .then((res) => res.json())
      .then((data) => setComments(data.items || []));
  };

  /* --------------------------------------------------
      SORTED COMMENTS
  --------------------------------------------------- */
  const sortedComments = [...comments].sort((a, b) => {
    const c1 = a.snippet.topLevelComment.snippet;
    const c2 = b.snippet.topLevelComment.snippet;

    if (sortType === "top") {
      return c2.likeCount - c1.likeCount; // highest likes first
    } else {
      return new Date(c2.publishedAt) - new Date(c1.publishedAt); // newest first
    }
  });

  /* --------------------------------------------------
      RUN EFFECTS
  --------------------------------------------------- */
  useEffect(() => {
    fetchVideoData();
    fetchComments();
  }, [videoId]);

  useEffect(() => {
    fetchChannelData();
  }, [apiData]);

  /* ==================================================
      RENDER JSX
  ================================================== */
  return (
    <div className="play-video">

      {/* -------------- VIDEO PLAYER -------------- */}
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>

      {/* -------------- VIDEO TITLE -------------- */}
      <h3>{apiData ? apiData.snippet.title : "Loading..."}</h3>

      {/* -------------- VIDEO STATS -------------- */}
      <div className="play-video-info">
        <p>
          {apiData ? value_converter(apiData.statistics.viewCount) : "0"} views •{" "}
          {apiData ? moment(apiData.snippet.publishedAt).fromNow() : ""}
        </p>

        <div>
          <span><img src={like} alt="" /> {apiData ? value_converter(apiData.statistics.likeCount) : "0"}</span>
          <span><img src={dislike} alt="" /> 2</span>
          <span><img src={share} alt="" /> Share</span>
          <span><img src={save} alt="" /> Save</span>
        </div>
      </div>

      <hr />

      {/* -------------- CHANNEL DETAILS -------------- */}
      {channelData && (
        <div className="publisher">
          <img src={channelData.snippet.thumbnails.default.url} alt="" />

          <div>
            <p>{channelData.snippet.title}</p>
            <span>{value_converter(channelData.statistics.subscriberCount)} Subscribers</span>
          </div>

          <button>Subscribe</button>
        </div>
      )}

      {/* -------------- DESCRIPTION -------------- */}
      <div className="vid-description">
        <p>{apiData ? apiData.snippet.description.slice(0, 250) : "Loading..."}</p>
        <hr />

        {/* COMMENTS + SORTING DROPDOWN */}
        <div className="comment-sort">
          <h4>
            {apiData ? value_converter(apiData.statistics.commentCount) : "0"} Comments
          </h4>

          <select value={sortType} onChange={(e) => setSortType(e.target.value)}>
            <option value="top">Top comments</option>
            <option value="new">Newest first</option>
          </select>
        </div>
      </div>

      {/* -------------- COMMENTS -------------- */}
      <div className="comments-section">
        {sortedComments.map((comment, index) => {
          const c = comment.snippet.topLevelComment.snippet;

          return (
            <div className="comment" key={index}>
              <img src={c.authorProfileImageUrl} alt="" />

              <div>
                <h3>
                  {c.authorDisplayName}
                  <span> • {moment(c.publishedAt).fromNow()}</span>
                </h3>

                <p dangerouslySetInnerHTML={{ __html: c.textDisplay }} />

                <div className="comment-actions">
                  <img src={like} alt="" />
                  <span>{value_converter(c.likeCount)}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default PlayVideo;

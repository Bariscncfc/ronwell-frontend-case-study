import React from "react";
import { Link, useParams } from "react-router-dom";
import "./LaunchDetails.css";

import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";
import Loading from "../../components/Loader/Loading";

const LaunchDetails = () => {
  const { id } = useParams();
  const LAUNCH_QUERY = gql`
  {
    launch(id: ${id}) {
      mission_name
      links {
        flickr_images
        video_link
      }
      id
      launch_date_utc
    }
  }
`;
  const { error, loading, data } = useQuery(LAUNCH_QUERY);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error</div>;
  }
  console.log(data);

  function extractVideoID(url) {
    var regExp =
      // eslint-disable-next-line
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(regExp);
    if (match && match[7].length === 11) {
      return match[7];
    }
  }

  return (
    <div className="details">
      <Link to="/" className="back-btn">
        <i className="fas fa-arrow-left">{data.launch.mission_name}</i>
      </Link>
      <div className="detail-section">
        <div>
          <img
            src={data.launch.links.flickr_images[0]}
            alt="launch"
            className="left-image"
          ></img>
        </div>
        <div className="launch-info">
          <h1>{data.launch.mission_name}</h1>
          <p>Date:{data.launch.launch_date_utc}</p>
          <br />
          <a href={data.launch.links.video_link} className="btn">
            Watch Here
          </a>
        </div>
      </div>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${extractVideoID(
          data.launch.links.video_link
        )}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="youtube-video"
      ></iframe>

      <h2>LAUNCH DETAILS</h2>
      {data.launch.links.flickr_images.map((launch) => (
        <img
          src={launch}
          alt="launchs"
          key={launch}
          className="launch-image"
        ></img>
      ))}
    </div>
  );
};

export default LaunchDetails;

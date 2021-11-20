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

      <h2>LAUNCH DETAİLS</h2>
      {data.launch.links.flickr_images.map((launch) => (
        <img src={launch} alt="launchs" className="launch-image"></img>
      ))}
    </div>
  );
};

export default LaunchDetails;

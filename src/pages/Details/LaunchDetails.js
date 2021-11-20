import React from "react";
import { Link, useParams } from "react-router-dom";

import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";

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
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }
  console.log(data);
  return (
    <div className="details">
      <h1>LaunchDetails Page</h1>
      <Link to="/">
        <i className="fas fa-arrow-left">{data.launch.mission_name}</i>
      </Link>
      <p>Date:{data.launch.launch_date_utc}</p>
      <a href={data.launch.links.video_link} className="btn">
        Watch Here
      </a>
      <h2>LAUNCH DETAİLS</h2>
      {data.launch.links.flickr_images.map((launch) => (
        <img src={launch} alt="launchs"></img>
      ))}
    </div>
  );
};

export default LaunchDetails;

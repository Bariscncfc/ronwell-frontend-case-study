import React from "react";
import Title from "../components/Title";

import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";

const LAUNCHES_QUERY = gql`
  {
    launchesPast(limit: 10) {
      links {
        flickr_images
      }
      id
    }
  }
`;

const HomePage = () => {
  const { error, loading, data } = useQuery(LAUNCHES_QUERY);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  console.log(data);
  return (
    <div className="Home">
      <Title />
    </div>
  );
};

export default HomePage;

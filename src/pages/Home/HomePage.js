import React from "react";
import Title from "../../components/Title";
import { Link } from "react-router-dom";

import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";

const LAUNCHES_QUERY = gql`
  {
    launchesPast(limit: 20) {
      links {
        flickr_images
      }
      id
      ships {
        name
        image
      }
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
      <div className="container">
        {data.launchesPast.map(
          (launch) =>
            launch.links.flickr_images[0] && (
              <div className>
                <h3>{launch.id}</h3>
                <Link
                  to={`/launch/${launch.id}`}
                  className="button"
                  onClick={() => this.props.launch.id.push("/launch")}
                >
                  <img
                    style={{ width: 200, height: 200, margin: 0, padding: 0 }}
                    src={launch.links.flickr_images[0]}
                    alt="launches"
                  ></img>
                </Link>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default HomePage;

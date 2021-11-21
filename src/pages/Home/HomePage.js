import React from "react";
import Title from "../../components/Title";
import "./Home.css";
import { Link } from "react-router-dom";

import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";
import Loading from "../../components/Loader/Loading";

const LAUNCHES_QUERY = gql`
  {
    launchesPast(limit: 20) {
      mission_name
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
    return <Loading />;
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
              <div className="card" key={launch.id}>
                <Link
                  to={`/launch/${launch.id}`}
                  className="button"
                  onClick={() => this.props.launch.id.push("/launch")}
                >
                  <img
                    className="card-image"
                    src={launch.links.flickr_images[0]}
                    alt="launches"
                  ></img>
                  <p className="launches-name">{launch.mission_name}</p>
                </Link>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default HomePage;

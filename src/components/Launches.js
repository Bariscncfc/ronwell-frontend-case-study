import React from "react";

const Launches = ({ data }) => {
  return (
    <div>
      <h1>{data.LaunchesPast.ships.name}</h1>
    </div>
  );
};

export default Launches;

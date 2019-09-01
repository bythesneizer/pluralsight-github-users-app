import React from "react";
import Card from "../Card/Card.js";

const CardList = props => {
  return (
    <div>
      {props.profiles.map(profile => (
        <Card {...profile} key={profile.id} />
      ))}
    </div>
  );
};

export default CardList;

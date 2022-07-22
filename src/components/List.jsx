import React from "react";
import ListCard from "./ListCard";

function List(props) {
  let lists = props.events.map((event) => {
    return (
      <ListCard
        title={event.title}
        images={event.image}
        summary={event.description}
        share={event.share}
        learn={event.learn}
      ></ListCard>
    );
  });
  return <div>{lists}</div>;
}

export default List;

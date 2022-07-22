import React from "react";

function SearchBox(props) {
  return (
    <div
      classNameName="container"
      style={{
        marginRight: 25,
        paddingRight: 10,
      }}
      display="flex"
    >
      <input
        onChange={props.handleInput}
        type="text"
        placeholder="Search"
        classNameName="form-control"
        style={{
          marginTop: 10,
          marginBottom: 10,
          marginRight: 15,
          width: "100%",
          height: "50%",
          paddingRight: 5,
        }}
      />
    </div>
  );
}

export default SearchBox;

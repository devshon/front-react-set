import React from "react";
import { useDispatch } from "react-redux";

function List() {
  const dispatch = useDispatch();
  const handleBookmark = () => {
    dispatch({ type: "BOOKMARK" });
  };
  return (
    <div
      onClick={() => {
        handleBookmark();
      }}
    >
      List
    </div>
  );
}

export default List;

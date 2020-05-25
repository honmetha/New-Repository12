import React from "react";
import BlogList from "./components/BlogLIst";

const data = [
  {
    id: 1,
    name: "Blog01",
    createdAt: new Date(),
  },
  {
    id: 2,
    name: "Blog02",
    createdAt: new Date(),
  },
  {
    id: 3,
    name: "Blog03",
    createdAt: new Date(),
  },
];

const List = () => {
  return (
    <div>
      <BlogList data={data} />
    </div>
  );
};

export default List;

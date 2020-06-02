import React from "react";

const BlogList = ({ data }) => {
  return (
    <table>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Created date</th>
      </tr>
      {data.map((row) => {
        return (
          <tr>
            <td>{row.id}</td>
            <td>{row.name}</td>
            <td>{row.createdAt.toString()}</td>
          </tr>
        );
      })}
    </table>
  );
};

export default BlogList;

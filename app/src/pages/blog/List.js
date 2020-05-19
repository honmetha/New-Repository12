import React from "react";

const data = [
  {
    id: 1,
    name: "Blog 01",
    createdDate: new Date(),
  },
  {
    id: 2,
    name: "Blog 02",
    createdDate: new Date(),
  },
  {
    id: 3,
    name: "Blog 03",
    createdDate: new Date(),
  },
];

const List = () => {
  return (
    <div>
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
              <td>{row.createdDate.toString()}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default List;

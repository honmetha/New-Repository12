import React from 'react'

const BlogLIst = ({data}) => {
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
              <td>{row.createdAt.toString()}</td>
            </tr>
          );
        })}
      </table>
    </div>
  )
}

export default BlogLIst

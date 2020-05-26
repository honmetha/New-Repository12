import React from 'react'

const BlogList = ({data = []}) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Created date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => {
            return (
              <tr>
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td>{row.createdAt.toString()}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  )
}

export default BlogList

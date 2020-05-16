import React from 'react'
import BlogList from './components/BlogList'

const data = [
  {
    id: 1,
    name: 'Blog 01',
    createdDate: new Date()
  },
  {
    id: 2,
    name: 'Blog 02',
    createdDate: new Date()
  },
  {
    id: 3,
    name: 'Blog 03',
    createdDate: new Date()
  }
]

const List = () => {
  return (
    <div>
      <BlogList data={data} />
    </div>
  )
}

export default List

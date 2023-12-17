import React from 'react'
import { CategoryList } from '../../models'

const Category = () => {
  return (
    <div>
      {
        [ "All", ...CategoryList()]?.map(el=><div>{el}</div>)
      }

    </div>
  )
}

export default Category
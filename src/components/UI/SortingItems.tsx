import React, { FC } from 'react'
import { SortingType } from '../../models/index';

interface ISortItems {
    setSorter: (sortBy: SortingType )=>void;
    statusTypeList: (status: string)=>void;
}

const SortingItems:FC<ISortItems> = ({setSorter, statusTypeList}) => {

const SortingValues: SortingType[] = [ 'price' , 'rating' , 'title' ];

const updSorter = (sortBy: SortingType ) => {
    setSorter(sortBy);
    statusTypeList('hide');
}

  return (
    <div className='sorting__values'>
        <ul>
        {SortingValues.map((item, index)=><li key={index} onClick={()=>updSorter(item)}>{item}</li>)}
        </ul>
    </div>
  )
}

export default SortingItems
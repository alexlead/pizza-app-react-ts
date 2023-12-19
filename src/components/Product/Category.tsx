import React, { useEffect, useState } from 'react'
import { CategoryList } from '../../models'
import InputTagRadio from '../UI/InputTagRadio'

import CategoriesLib from "../../data/DB/categories.json"

const Category = () => {

  const [selectedCat, setSelectedCat] = useState<number>(0);


  const changeAction = (value:number):void => {
    setSelectedCat(value);
  }

  useEffect(()=>{
    console.log(selectedCat);
  }, [selectedCat]);


  return (
    <div className='categoriesTags'>
      {        
        CategoryList()?.map(el=><InputTagRadio name="category" label={el.title} value={el.id} selected={ selectedCat===el.id? true:false } changeAction={changeAction}  />)
      }

    </div>
  )
}

export default Category
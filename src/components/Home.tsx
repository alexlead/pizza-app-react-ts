import React, { useEffect, useState } from 'react'
import Category from './Product/Category';
import Search from './UI/Search';
import SortingList from './UI/SortingList';
import { ProductsPageList } from '../models';
import { ProductType } from '../models/index';
import ProductCategoryItem from './Product/ProductCategoryItem';

const Home = () => {

const [ productsList, setProductsList ] = useState<ProductType[]>([]);

useEffect(()=>{
  // ( async() => {
  //   await fetch("https://658028cf6ae0629a3f548137.mockapi.io/items")
  //       .then(res=>res.json())
  //       .then(json=>setProductsList(json))
  // })()

  ProductsPageList().then(data=>setProductsList(data));

}, [])

  return (
<>
        <div className="filters row">

          <div className="col-7">
          <Category/>
          </div>
          <div className="col-5">
            <Search/>
            <SortingList/>
          </div>

        </div>

        <div className="row catalog">

        {

            productsList?.map((item, index)=><div className='col-4' key={index}><ProductCategoryItem item={item} /></div>)

        }


        </div>
</>
  )
}

export default Home
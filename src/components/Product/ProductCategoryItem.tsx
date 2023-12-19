import React, { FC } from 'react'
import { ProductType } from '../../models/index';
import { Link } from 'react-router-dom';
import ProductOptionInputItem from './ProductOptionInputItem';
import AddToCart from '../Cart/AddToCart';

interface IProductItem {
  item: ProductType
}

const ProductCategoryItem: FC<IProductItem> = ({ item }) => {



  return (
    <div className='card'>
      <div className="card__rating">{item.rating}</div>
      <div className="card__img">
        <img
          src={item.images[0]}
          alt={item.title}
        />
      </div>
      <div className="card__title">
        <Link to={"/product/" + item.id}><h3>{item.title}</h3></Link>
      </div>
      <div className="card__options">

        <div className="card__options__thick">
          {
            item.types?.map((el, index)=><ProductOptionInputItem key={index} name="thick" label={""+el} value={""+el} selected={ false } changeAction={()=>{}}  />)

          }
        </div>
        <div className="card__options__sizes">
          {
            item.sizes?.map((el, index)=><ProductOptionInputItem key={index} name="thick" label={""+el+" cm"} value={""+el} selected={ false } changeAction={()=>{}}  />)

          }

        </div>
      </div>
      <div className="row">
        <div className="col-6">Price: {  new Intl.NumberFormat('ru-RU', {style: 'currency', currency: 'RUB' } ).format(item.price)  }</div>
        <div className="col-6"><AddToCart/></div>
      </div>
    </div>
  )
}

export default ProductCategoryItem
import React, { FC } from 'react'

interface IProductOptionInputItem {
    name: string;    // group 
    label: string;
    value: string;
    selected: boolean;
    changeAction: (value: string)=>void;
  }
  

const ProductOptionInputItem:FC<IProductOptionInputItem> = ({name, label, value, selected, changeAction}) => {
  return (
    <div className='ProductInputOption'>
    <input type="radio" name={name} id={name+value} value={value} checked={selected} onChange={()=>changeAction(value)} />
      <label htmlFor={name+value}>
      {label}
      </label>

    </div>
  )
}

export default ProductOptionInputItem
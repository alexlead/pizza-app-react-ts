import React, { FC } from 'react'

interface InputTagSsettings {
  name: string;    // group 
  label: string;
  value: number;
  selected: boolean;
  changeAction: (value: number)=>void;
}


const InputTagRadio:FC<InputTagSsettings> = ({name, label, value, selected, changeAction}) => {
  return (
    <div className='tagInputRadio'>
      
      <input type="radio" name={name} id={name+value} value={value} checked={selected} onChange={()=>changeAction(value)} />
      <label htmlFor={name+value}>
      {label}
      </label>
    </div>
  )
}

export default InputTagRadio
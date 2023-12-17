import React, { FC } from 'react'


interface TagButtonOptions {
  buttonText: string;
  buttonFunction: ()=>void;
}


const TagButton:FC<TagButtonOptions> = ( {buttonText, buttonFunction} ) => {
  return (
    <div className='tagButton' onClick={buttonFunction}>{buttonText}</div>
  )
}

export default TagButton
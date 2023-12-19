import { faArrowDownWideShort, faArrowUpWideShort } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { SortingType } from '../../models';
import SortingItems from './SortingItems';



const SortingList = () => {

  const [sortType, setSortType] = useState<SortingType>('rating');
  const [sortDirection, setSortDirection] = useState<string>('ASC');
  const [sortTypesListShow, setSortTypesListShow] = useState<string>('hide')

  const changeSortDirection = (): void => {
    sortDirection === "ASC" ? setSortDirection("DESC") : setSortDirection("ASC");
  }

  const changeSortType = (sortBy: SortingType): void => {
    setSortType(sortBy);
  }

  const statusTypeList = (status: string): void => {

    setSortTypesListShow(status);
  }

  return (
    <div className={['sorting', sortTypesListShow].join(" ")}>
      <span onClick={changeSortDirection}>

        {

          sortDirection === "ASC" ?
            (
              <FontAwesomeIcon icon={faArrowDownWideShort} />
            ) : (
              <FontAwesomeIcon icon={faArrowUpWideShort} />
            )
        }
        &nbsp;Sort by:&nbsp;&nbsp;&nbsp;
      </span>
      <span className='sorting__selected-type' onClick={() => sortTypesListShow === 'hide' ? statusTypeList('show') : statusTypeList('hide')}>{sortType}</span>
      <SortingItems setSorter={changeSortType} statusTypeList={statusTypeList} />
    </div>
  )
}

export default SortingList
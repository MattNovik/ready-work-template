import React from 'react'
import { CTableRow, CTableDataCell, CFormCheck, CCloseButton } from '@coreui/react'
import { Link } from 'react-router-dom'

const TypesListItem = (item, handleRemoveItem) => {
  return (
    <CTableRow>
      <CTableDataCell scope="row" className="align-middle">
        {item.item.id}
      </CTableDataCell>
      <CTableDataCell className="align-middle">{item.item.name}</CTableDataCell>
      <CTableDataCell className="align-middle text-start">{item.item.link}</CTableDataCell>
      <CTableDataCell className="align-middle text-center">
        <CFormCheck id={'activity' + item.item.id} disabled checked={item.item.activity} />
      </CTableDataCell>
      <CTableDataCell className="align-middle text-center">
        <CCloseButton data-id={item.item.id} onClick={item.handleRemoveItem} />
      </CTableDataCell>
      <CTableDataCell>
        <Link to={'/types-list/edit/' + item.item.id}>Изменить </Link>
      </CTableDataCell>
    </CTableRow>
  )
}

export default TypesListItem

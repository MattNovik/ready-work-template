import React from 'react'
import { CTableRow, CTableDataCell, CFormCheck, CCloseButton, CButton } from '@coreui/react'
import { Link } from 'react-router-dom'

const TypesListItem = (item, handleRemoveItem) => {
  return (
    <CTableRow>
      <CTableDataCell scope="row" className="align-middle">
        {item.item.id}
      </CTableDataCell>
      <CTableDataCell className="align-middle">{item.item.h1}</CTableDataCell>
      <CTableDataCell className="align-middle text-start">{item.item.url}</CTableDataCell>
      <CTableDataCell className="align-middle text-center">
        <CFormCheck id={'activity' + item.item.id} disabled checked={!!item.item.activity} />
      </CTableDataCell>
      <CTableDataCell className="align-middle text-center">
        <CCloseButton data-id={item.item.id} onClick={item.handleRemoveItem} />
      </CTableDataCell>
      <CTableDataCell>
        <CButton type="button">
          <Link to={'/types-list/edit/' + item.item.id} className="text-light text-decoration-none">
            Изменить
          </Link>
        </CButton>
      </CTableDataCell>
    </CTableRow>
  )
}

export default TypesListItem

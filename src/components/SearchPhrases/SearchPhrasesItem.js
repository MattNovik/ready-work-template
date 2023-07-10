import React, { useState } from 'react'
import {
  CTableHeaderCell,
  CTableRow,
  CTableDataCell,
  CCloseButton,
  CFormInput,
  CButton,
} from '@coreui/react'

const SearchPhrasesItem = (item, handleRemoveItem) => {
  const [nameValue, setNameValue] = useState(item.item.name)
  const [linkValue, setLinkValue] = useState(item.item.link)

  const handleSubmit = () => {
    let datasToSend = {
      id: item.item.id,
      name: nameValue,
      link: linkValue,
    }
    alert(JSON.stringify(datasToSend))
  }

  return (
    <CTableRow>
      <CTableHeaderCell scope="row" className="align-middle">
        {item.item.id}
      </CTableHeaderCell>

      <CTableDataCell className="align-middle">
        <CFormInput
          type="text"
          placeholder="Название услуги"
          value={nameValue}
          onChange={(e) => setNameValue(e.target.value)}
        />
      </CTableDataCell>
      <CTableDataCell className="align-middle text-center">
        <CFormInput
          type="text"
          placeholder="Ссылка"
          value={linkValue}
          onChange={(e) => setLinkValue(e.target.value)}
        />
      </CTableDataCell>
      <CTableHeaderCell className="align-middle text-center">
        <CButton type="button" onClick={() => handleSubmit()}>
          Сохранить
        </CButton>
      </CTableHeaderCell>
      <CTableHeaderCell className="align-middle text-center">
        <CCloseButton data-id={item.item.id} onClick={(e) => item.handleRemoveItem(e)} />
      </CTableHeaderCell>
    </CTableRow>
  )
}

export default SearchPhrasesItem

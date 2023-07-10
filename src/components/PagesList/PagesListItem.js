import React, { useState } from 'react'
import {
  CTableHeaderCell,
  CTableRow,
  CTableDataCell,
  CCloseButton,
  CFormCheck,
  CButton,
  CFormInput,
} from '@coreui/react'

const PagesListItem = (item, removeItem) => {
  const [nameValue, setNameValue] = useState(item.item.name)
  const [textValue, setTextValue] = useState(item.item.text)
  const [metaTitleValue, setMetaTitleValue] = useState(item.item.metaTitle)
  const [metaDescriptionValue, setMetaDescriptionValue] = useState(item.item.metaDescription)
  const [h1Value, setH1Value] = useState(item.item.h1)
  const [activityValue, setActivityValue] = useState(item.item.activity)

  const handleActivtyChange = () => {
    setActivityValue(!activityValue)
  }

  const handleSubmit = () => {
    let dataToSend = {
      id: item.item.id,
      name: nameValue,
      text: textValue,
      meta_title: metaTitleValue,
      meta_description: metaDescriptionValue,
      h1: h1Value,
      activity: activityValue,
    }
    alert(JSON.stringify(dataToSend))
  }

  return (
    <CTableRow>
      <CTableHeaderCell scope="row" className="align-middle">
        {item.item.id}
      </CTableHeaderCell>
      <CTableDataCell className="align-middle">
        <CFormInput
          type="text"
          placeholder="Название"
          value={nameValue}
          onChange={(e) => setNameValue(e.target.value)}
        />
      </CTableDataCell>
      <CTableDataCell className="align-middle text-center">
        <CFormInput
          type="text"
          placeholder="Текст"
          value={textValue}
          onChange={(e) => setTextValue(e.target.value)}
        />
      </CTableDataCell>
      <CTableDataCell className="align-middle text-center">
        <CFormInput
          type="text"
          placeholder="Мета название"
          value={metaTitleValue}
          onChange={(e) => setMetaTitleValue(e.target.value)}
        />
      </CTableDataCell>
      <CTableDataCell className="align-middle text-center">
        <CFormInput
          type="text"
          placeholder="Мета описание"
          value={metaDescriptionValue}
          onChange={(e) => setMetaDescriptionValue(e.target.value)}
        />
      </CTableDataCell>
      <CTableDataCell className="align-middle text-center">
        <CFormInput
          type="text"
          placeholder="Заголовок"
          value={h1Value}
          onChange={(e) => setH1Value(e.target.value)}
        />
      </CTableDataCell>
      <CTableDataCell className="align-middle text-center">
        <CFormCheck defaultChecked={activityValue} onChange={handleActivtyChange} />
      </CTableDataCell>
      <CTableHeaderCell className="align-middle text-center">
        <CButton data-id={item.item.id} onClick={(e) => handleSubmit(e)}>
          Сохранить
        </CButton>
      </CTableHeaderCell>
      <CTableHeaderCell className="align-middle text-center">
        <CCloseButton data-id={item.item.id} onClick={(e) => item.removeItem(e)} />
      </CTableHeaderCell>
    </CTableRow>
  )
}

export default PagesListItem

import React, { useState } from 'react'
import {
  CTableHeaderCell,
  CTableRow,
  CTableDataCell,
  CCloseButton,
  CFormInput,
  CButton,
} from '@coreui/react'

const PriceListItem = (item, removeItem) => {
  const [imageFile, setImageFile] = useState(item.item.image)
  const [nameValue, setNameValue] = useState(item.item.name)
  const [priceValue, setPriceValue] = useState(item.item.price)
  const [priceSnippetValue, setPriceSnippetValue] = useState(item.item.priceSnipept)
  const [imageSrc, setImageSrc] = useState(item.item.image)

  const handleSubmit = () => {
    let datasToSend = {
      id: item.item.id,
      name: nameValue,
      price: priceValue,
      price_snipper: priceSnippetValue,
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
          placeholder="Цена"
          value={priceValue}
          onChange={(e) => setPriceValue(e.target.value)}
        />
      </CTableDataCell>
      <CTableDataCell className="align-middle text-center">
        <CFormInput
          type="text"
          placeholder="Цена в сниппете"
          value={priceSnippetValue}
          onChange={(e) => setPriceSnippetValue(e.target.value)}
        />
      </CTableDataCell>
      <CTableDataCell className="align-middle text-center">
        <img
          src={'https://placebear.com/200/300'}
          width="60"
          height="60"
          alt=""
          className="price-list__image"
        />
      </CTableDataCell>
      <CTableHeaderCell className="align-middle text-center">
        <CButton type="button" onClick={() => handleSubmit()}>
          Сохранить
        </CButton>
      </CTableHeaderCell>
      <CTableHeaderCell className="align-middle text-center">
        <CCloseButton data-id={item.id} onClick={(e) => item.removeItem(e)} />
      </CTableHeaderCell>
    </CTableRow>
  )
}

export default PriceListItem

import React, { useState } from 'react'
import {
  CTableHeaderCell,
  CTableRow,
  CTableDataCell,
  CCloseButton,
  CFormInput,
  CButton,
} from '@coreui/react'
import Api from 'src/Api/Api'

const PriceListItem = (item, removeItem) => {
  const [imageFile, setImageFile] = useState(item.item.image)
  const [nameValue, setNameValue] = useState(item.item.name)
  const [priceValue, setPriceValue] = useState(item.item.price)
  const [priceSnippetValue, setPriceSnippetValue] = useState(item.item['snippet_price'])
  const [imageSrc, setImageSrc] = useState(item.item.image)

  const handleSubmit = () => {
    let formData = new FormData()

    formData.append('name', nameValue)
    formData.append('price', priceValue)
    formData.append('snippet_price', priceSnippetValue)

    Api.updateItemService(item.item.id, formData)
      .then((response) => console.log(response))
      .catch((error) => console.log(error))
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
        <img src={imageSrc} width="60" height="60" alt="" className="price-list__image" />
      </CTableDataCell>
      <CTableHeaderCell className="align-middle text-center">
        <CButton type="button" onClick={() => handleSubmit()}>
          Сохранить
        </CButton>
      </CTableHeaderCell>
      <CTableHeaderCell className="align-middle text-center">
        <CCloseButton data-id={item.item.id} onClick={(e) => item.removeItem(e)} />
      </CTableHeaderCell>
    </CTableRow>
  )
}

export default PriceListItem

import React, { useState, useRef, useEffect } from 'react'
import {
  CRow,
  CCol,
  CCard,
  CCardHeader,
  CCardBody,
  CTableHeaderCell,
  CTableRow,
  CTableDataCell,
  CTableBody,
  CTable,
  CTableHead,
  CForm,
  CFormLabel,
  CFormInput,
  CButton,
} from '@coreui/react'
import { SERVICES_LIST } from 'src/mockData'
import PriceListItem from './PriceListItem'
import Api from 'src/Api/Api'

const PriceList = () => {
  const [imageFile, setImageFile] = useState(null)
  const [nameValue, setNameValue] = useState(null)
  const [priceValue, setPriceValue] = useState(null)
  const [h1Value, setH1Value] = useState(null)
  const [metaTitleValue, setMetaTitleValue] = useState(null)
  const [metaDescriptioValue, setMetaDescriptionValue] = useState(null)
  const [deadLineValue, setDeadLineValue] = useState(null)
  const [priceSnippetValue, setPriceSnippetValue] = useState(null)
  const [listServices, setListServices] = useState(null)
  const [imageSrc, setImageSrc] = useState(null)
  const [validated, setValidated] = useState(false)
  const refForm = useRef(null)
  const [inputTypeFileValid, setInputTypeFileValid] = useState(null)

  const preloadImage = (e) => {
    const [file] = e.target.files
    setImageFile(file)
    setImageSrc(URL.createObjectURL(file))
  }

  const removeItem = (e) => {
    const id = e.target.closest('button').dataset.id
    Api.deleteItemService(id)
      .then((response) => {
        console.log(response)
        let copyList = [...listServices]
        copyList.splice(
          copyList.findIndex((item) => item.id === id),
          1,
        )
        setListServices(copyList)
      })
      .catch((error) => console.log(error))
  }

  const handleSubmit = (e) => {
    const form = e.currentTarget
    if (form.checkValidity() === true && imageFile && imageFile.size <= 2097152) {
      let formData = new FormData()

      formData.append('name', nameValue)
      formData.append('price', priceValue)
      formData.append('h1', h1Value)
      formData.append('meta_description', metaDescriptioValue)
      formData.append('meta_title', metaTitleValue)
      formData.append('snippet_price', priceSnippetValue)
      formData.append('deadline', deadLineValue)
      formData.append('image', imageFile)

      Api.sendNewService(formData)
        .then((response) => {
          console.log(response)
          let copyList = [...listServices]
          let newItem = {
            id: response.data.data.id,
            deadline: response.data.data.deadline,
            name: response.data.data.name,
            price: response.data.data.price,
            snippet_price: response.data.data.snippet_price,
            meta_description: response.data.data.meta_description,
            meta_title: response.data.data.meta_title,
            h1: response.data.data.h1,
            image: response.data.data.image,
          }
          copyList.push(newItem)
          setListServices(copyList)
          setImageFile(null)
          setNameValue(null)
          setPriceValue(null)
          setMetaDescriptionValue(null)
          setMetaTitleValue(null)
          setH1Value(null)
          setPriceSnippetValue(null)
          setImageSrc(null)

          setValidated(false)
          form.reset()
          alert('Удачно')
        })
        .catch((error) => {
          alert('Ошибка')
          console.log(error)
        })
    } else {
      setValidated(true)
    }
    e.preventDefault()
    e.stopPropagation()
  }

  useEffect(() => {
    Api.getListServices()
      .then((response) => {
        console.log(response)
        setListServices(response.data.data)
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Список цен и услуг</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Здесь вы можете создать новые типы услуг или изменить уже существующие
            </p>
            <CForm noValidate validated={validated} onSubmit={handleSubmit} ref={refForm}>
              <CRow className="gap-3">
                <CCol sm="auto" className="d-flex flex-column justify-content-end">
                  <CFormLabel htmlFor="imageLoad">Загрузить изображение</CFormLabel>
                  <CFormInput
                    type="file"
                    id="imageLoad"
                    accept="image/png, image/gif, image/jpeg, image/svg+xml, image/jpg"
                    aria-describedby="imageLoad"
                    feedbackValid="Загружено"
                    feedbackInvalid="Необходимо загрузить"
                    aria-label="Upload"
                    valid={inputTypeFileValid ? true : false}
                    onChange={(e) => preloadImage(e)}
                    required
                  />
                </CCol>
                <CCol sm="auto" className="d-flex flex-column justify-content-end">
                  {imageSrc ? (
                    <img
                      src={imageSrc}
                      width="60"
                      height="60"
                      alt=""
                      className="price-list__image"
                    />
                  ) : null}
                </CCol>
                <CCol sm="auto" className="d-flex flex-column justify-content-end">
                  <CFormLabel htmlFor="nameInput">Название</CFormLabel>
                  <CFormInput
                    type="text"
                    id="nameInput"
                    placeholder="Название услуги"
                    required
                    feedbackValid="Заполнено"
                    feedbackInvalid="Необходимо заполнить"
                    onChange={(e) => setNameValue(e.target.value)}
                  />
                </CCol>
                <CCol sm="auto" className="d-flex flex-column justify-content-end">
                  <CFormLabel htmlFor="deadLineInput">Deadline(цена и срок)</CFormLabel>
                  <CFormInput
                    type="text"
                    id="deadLineInput"
                    placeholder="Deadline(цена и срок)"
                    feedbackValid="Заполнено"
                    feedbackInvalid="Необходимо заполнить"
                    required
                    onChange={(e) => setDeadLineValue(e.target.value)}
                  />
                </CCol>
                <CCol sm="auto" className="d-flex flex-column justify-content-end">
                  <CFormLabel htmlFor="h1Input">h1</CFormLabel>
                  <CFormInput
                    type="text"
                    id="h1Input"
                    placeholder="h1"
                    required
                    feedbackValid="Заполнено"
                    feedbackInvalid="Необходимо заполнить"
                    onChange={(e) => setH1Value(e.target.value)}
                  />
                </CCol>
                <CCol sm="auto" className="d-flex flex-column justify-content-end">
                  <CFormLabel htmlFor="metaTitleInput">meatTitle</CFormLabel>
                  <CFormInput
                    type="text"
                    id="metaTitleInput"
                    placeholder="meatTitle"
                    feedbackValid="Заполнено"
                    feedbackInvalid="Необходимо заполнить"
                    onChange={(e) => setMetaTitleValue(e.target.value)}
                  />
                </CCol>
                <CCol sm="auto" className="d-flex flex-column justify-content-end">
                  <CFormLabel htmlFor="metaDescriptionInput">metaDescription</CFormLabel>
                  <CFormInput
                    type="text"
                    id="metaDescriptionInput"
                    placeholder="metaDescription"
                    feedbackValid="Заполнено"
                    feedbackInvalid="Необходимо заполнить"
                    onChange={(e) => setMetaDescriptionValue(e.target.value)}
                  />
                </CCol>
                <CCol sm="auto" className="d-flex flex-column justify-content-end">
                  <CFormLabel htmlFor="priceInput">Цена</CFormLabel>
                  <CFormInput
                    type="text"
                    id="priceInput"
                    placeholder="Цена"
                    required
                    feedbackValid="Заполнено"
                    feedbackInvalid="Необходимо заполнить"
                    onChange={(e) => setPriceValue(e.target.value)}
                  />
                </CCol>
                <CCol sm="auto" className="d-flex flex-column justify-content-end">
                  <CFormLabel htmlFor="priceSnippetInput">Цена в сниппете(калькулятор)</CFormLabel>
                  <CFormInput
                    type="text"
                    id="priceSnippetInput"
                    placeholder="Цена в сниппете(калькулятор)"
                    required
                    feedbackValid="Заполнено"
                    feedbackInvalid="Необходимо заполнить"
                    onChange={(e) => setPriceSnippetValue(e.target.value)}
                  />
                </CCol>
                <CCol sm="auto" className="d-flex align-items-center">
                  <CButton type="submit">Отправить</CButton>
                </CCol>
              </CRow>
            </CForm>
            <CTable>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">#</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Название</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Deadline (цена и срок)</CTableHeaderCell>
                  <CTableHeaderCell scope="col" className="text-end">
                    Цена в сниппете(калькулятор)
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col" className="text-start">
                    Заголовок
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col" className="text-end">
                    Цена
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col" className="text-start">
                    Изображение
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col" className="text-center"></CTableHeaderCell>
                  <CTableHeaderCell scope="col" className="text-center"></CTableHeaderCell>
                  <CTableHeaderCell scope="col" className="text-center"></CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {listServices && listServices.length ? (
                  listServices.map((item, index) => (
                    <PriceListItem key={index} item={item} removeItem={removeItem} />
                  ))
                ) : (
                  <CTableRow>
                    <CTableHeaderCell scope="row" className="align-middle"></CTableHeaderCell>
                    <CTableDataCell colSpan={5} className="text-center">
                      Пустой список
                    </CTableDataCell>
                  </CTableRow>
                )}
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default PriceList

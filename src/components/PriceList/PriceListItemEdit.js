import React, { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import {
  CRow,
  CCol,
  CCard,
  CCardHeader,
  CCardBody,
  CForm,
  CFormInput,
  CFormLabel,
  CButton,
} from '@coreui/react'
import Api from 'src/Api/Api'

const PriceListEditItem = (item) => {
  let { id } = useParams()
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

  const preloadImage = (e) => {
    const [file] = e.target.files
    setImageFile(file)
    setImageSrc(URL.createObjectURL(file))
  }

  useEffect(() => {
    Api.getItemServices(id)
      .then((response) => {
        console.log(response)
        setNameValue(response.data.data.h1)
        setMetaTitleValue(response.data.data.meta_title)
        setMetaDescriptionValue(response.data.data.meta_description)
        setH1Value(response.data.data.h1)
        setPriceSnippetValue(response.data.data.snippet_price)
        setPriceValue(response.data.data.price)
        setDeadLineValue(response.data.data.deadline)
        setImageSrc(response.data.data.image)
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>{'Редактирование - ' + nameValue}</strong>
          </CCardHeader>
          <CCardBody>
            <CForm noValidate validated={validated} onSubmit={handleSubmit} ref={refForm}>
              <CRow className="gap-3">
                <CCol sm="auto" className="d-flex flex-column justify-content-end">
                  <CFormLabel htmlFor="imageLoad">Загрузить изображение</CFormLabel>
                  <CFormInput
                    type="file"
                    id="imageLoad"
                    accept="image/png, image/gif, image/jpeg, image/svg, image/jpg"
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
                    value={nameValue}
                    onChange={(e) => setNameValue(e.target.value)}
                  />
                </CCol>
                <CCol sm="auto" className="d-flex flex-column justify-content-end">
                  <CFormLabel htmlFor="deadLineInput">Deadline</CFormLabel>
                  <CFormInput
                    type="text"
                    id="deadLineInput"
                    placeholder="Deadline"
                    required
                    feedbackValid="Заполнено"
                    feedbackInvalid="Необходимо заполнить"
                    value={deadLineValue}
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
                    value={h1Value}
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
                    value={metaTitleValue}
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
                    value={metaDescriptioValue}
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
                    value={priceValue}
                    onChange={(e) => setPriceValue(e.target.value)}
                  />
                </CCol>
                <CCol sm="auto" className="d-flex flex-column justify-content-end">
                  <CFormLabel htmlFor="priceSnippetInput">Цена в сниппет</CFormLabel>
                  <CFormInput
                    type="text"
                    id="priceSnippetInput"
                    placeholder="Цена в сниппет"
                    required
                    feedbackValid="Заполнено"
                    feedbackInvalid="Необходимо заполнить"
                    value={priceSnippetValue}
                    onChange={(e) => setPriceSnippetValue(e.target.value)}
                  />
                </CCol>
                <CCol sm="auto" className="d-flex align-items-center">
                  <CButton type="submit">Отправить</CButton>
                </CCol>
              </CRow>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default PriceListEditItem

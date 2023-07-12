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
  CFormSelect,
  CButton,
} from '@coreui/react'
import { TYPES_LIST, GENDER_LIST } from 'src/mockData'
import Api from 'src/Api/Api'

const TypesListEditItem = () => {
  let { id } = useParams()
  const [nameValue, setNameValue] = useState(null)
  const [linkValue, setLinkValue] = useState(null)
  const [validated, setValidated] = useState(false)
  const [filterValue, setFilterValue] = useState(null)
  const [metaTitleValue, setMetaTitleValue] = useState(null)
  const [metaDescriptionValue, setMetaDescriptionValue] = useState(null)
  const [h1Value, setH1Value] = useState(null)
  const [genderValue, setGenderValue] = useState(null)
  const [externalLinkValue, setExternalLinkValue] = useState(null)
  const [genitiveNameValue, setGenitiveNameValue] = useState(null)
  const [genitiveNameXValue, setGenitiveNameXValue] = useState(null)

  const refForm = useRef(null)

  const handleSubmit = (e) => {
    const form = e.currentTarget
    if (form.checkValidity() === true) {
      let dataToSend = {
        url: linkValue,
        activity: false,
        filter: filterValue,
        meta_title: metaTitleValue,
        h1: h1Value,
        meta_description: metaDescriptionValue,
        gender: genderValue,
        external_link: externalLinkValue,
        genitive_name: genitiveNameValue,
        genitive_name_x: genitiveNameXValue,
      }
      Api.updateCategoriesItem(id, dataToSend)
        .then((response) => {
          console.log(response)
          alert('sended')
        })
        .catch((error) => console.log(error))
    } else {
      setValidated(true)
    }
    e.preventDefault()
    e.stopPropagation()
  }

  useEffect(() => {
    Api.getCategoriesItem(id)
      .then((response) => {
        console.log(response)
        setNameValue(response.data.data.h1)
        setLinkValue(response.data.data.url)
        setFilterValue(response.data.data.filter)
        setMetaTitleValue(response.data.data.meta_title)
        setMetaDescriptionValue(response.data.data.meta_description)
        setH1Value(response.data.data.h1)
        setGenderValue(response.data.data.gender)
        setExternalLinkValue(response.data.data.external_link)
        setGenitiveNameValue(response.data.data.genitive_name)
        setGenitiveNameXValue(response.data.data.genitive_name_x)
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
            <CForm
              noValidate
              validated={validated}
              ref={refForm}
              className="d-flex flex-column gap-3"
              onSubmit={handleSubmit}
            >
              <CRow className="gap-3">
                <CCol sm="3" className="d-flex flex-column justify-content-end">
                  <CFormInput
                    type="text"
                    id="link"
                    aria-describedby="link"
                    label="Ссылка"
                    placeholder="Ссылка"
                    feedbackValid="Заполнено"
                    feedbackInvalid="Необходимо заполнить"
                    required
                    value={linkValue}
                    onChange={(e) => setLinkValue(e.target.value)}
                  />
                </CCol>
                <CCol sm="3" className="d-flex flex-column justify-content-end">
                  <CFormInput
                    type="text"
                    id="metaTitleValue"
                    aria-describedby="metaTitleValue"
                    label="metaTitleValue"
                    placeholder="metaTitleValue"
                    feedbackValid="Заполнено"
                    feedbackInvalid="Необходимо заполнить"
                    required
                    value={metaTitleValue}
                    onChange={(e) => setMetaTitleValue(e.target.value)}
                  />
                </CCol>
                <CCol sm="3" className="d-flex flex-column justify-content-end">
                  <CFormSelect
                    aria-label="Default select example"
                    options={[...GENDER_LIST]}
                    label="Гендер текста"
                    required
                    onChange={(e) => setGenderValue(e.target.value)}
                    feedbackValid="Заполнено"
                    value={genderValue}
                    feedbackInvalid="Необходимо заполнить"
                  />
                </CCol>
                <CCol sm="3" className="d-flex flex-column justify-content-end">
                  <CFormInput
                    type="text"
                    id="filterValue"
                    aria-describedby="filterValue"
                    label="filterValue"
                    placeholder="filterValue"
                    feedbackValid="Заполнено"
                    feedbackInvalid="Необходимо заполнить"
                    required
                    value={filterValue}
                    onChange={(e) => setFilterValue(e.target.value)}
                  />
                </CCol>
                <CCol sm="3" className="d-flex flex-column justify-content-end">
                  <CFormInput
                    type="text"
                    id="metaDescriptionValue"
                    aria-describedby="metaDescriptionValue"
                    label="metaDescriptionValue"
                    placeholder="metaDescriptionValue"
                    feedbackValid="Заполнено"
                    feedbackInvalid="Необходимо заполнить"
                    required
                    value={metaDescriptionValue}
                    onChange={(e) => setMetaDescriptionValue(e.target.value)}
                  />
                </CCol>
                <CCol sm="3" className="d-flex flex-column justify-content-end">
                  <CFormInput
                    type="text"
                    id="h1Value"
                    aria-describedby="h1Value"
                    label="h1Value"
                    placeholder="h1Value"
                    feedbackValid="Заполнено"
                    feedbackInvalid="Необходимо заполнить"
                    required
                    value={h1Value}
                    onChange={(e) => setH1Value(e.target.value)}
                  />
                </CCol>
                <CCol sm="3" className="d-flex flex-column justify-content-end">
                  <CFormInput
                    type="text"
                    id="externalLinkValue"
                    aria-describedby="externalLinkValue"
                    label="externalLinkValue"
                    placeholder="externalLinkValue"
                    feedbackValid="Заполнено"
                    feedbackInvalid="Необходимо заполнить"
                    required
                    value={externalLinkValue}
                    onChange={(e) => setExternalLinkValue(e.target.value)}
                  />
                </CCol>
                <CCol sm="3" className="d-flex flex-column justify-content-end">
                  <CFormInput
                    type="text"
                    id="genitiveNameXValue"
                    aria-describedby="genitiveNameXValue"
                    label="genitiveNameXValue"
                    placeholder="genitiveNameXValue"
                    feedbackValid="Заполнено"
                    feedbackInvalid="Необходимо заполнить"
                    required
                    value={genitiveNameXValue}
                    onChange={(e) => setGenitiveNameXValue(e.target.value)}
                  />
                </CCol>
                <CCol sm="3" className="d-flex flex-column justify-content-end">
                  <CFormInput
                    type="text"
                    id="genitiveNameValue"
                    aria-describedby="genitiveNameValue"
                    label="genitiveNameValue"
                    placeholder="genitiveNameValue"
                    feedbackValid="Заполнено"
                    feedbackInvalid="Необходимо заполнить"
                    required
                    value={genitiveNameValue}
                    onChange={(e) => setGenitiveNameValue(e.target.value)}
                  />
                </CCol>
                <CCol sm="3" className="d-flex align-items-center">
                  <CButton type="submit">Сохранить</CButton>
                </CCol>
              </CRow>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default TypesListEditItem

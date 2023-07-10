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

  const [typesList, setTypesList] = useState(null)
  const refForm = useRef(null)

  const handleSubmit = (e) => {
    const form = e.currentTarget
    if (form.checkValidity() === true) {
      alert('sended')
    } else {
      setValidated(true)
    }
    e.preventDefault()
    e.stopPropagation()
  }

  useEffect(() => {
    let indexitem = TYPES_LIST.findIndex((item) => item.id === Number(id))
    let item = TYPES_LIST[indexitem]
    console.log(id)
    setNameValue(item.name)
    setLinkValue(item.link)
    setFilterValue(item.filterValue)
    setMetaTitleValue(item.metaTitleValue)
    setMetaDescriptionValue(item.metaDescriptionValue)
    setH1Value(item.h1Value)
    setGenderValue(item.genderValue)
    setExternalLinkValue(item.externalLinkValue)
    setGenitiveNameValue(item.genitiveNameValue)
    setGenitiveNameXValue(item.genitiveNameXValue)
  }, [])

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>
              {'Редактирование - ' +
                TYPES_LIST[TYPES_LIST.findIndex((item) => item.id === Number(id))].name}
            </strong>
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
                    id="name"
                    aria-describedby="name"
                    label="Название"
                    placeholder="Название"
                    feedbackValid="Заполнено"
                    feedbackInvalid="Необходимо заполнить"
                    required
                    value={nameValue}
                    onChange={(e) => setNameValue(e.target.value)}
                  />
                </CCol>
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

import React, { useState, useRef, useEffect } from 'react'
import {
  CRow,
  CCard,
  CCol,
  CCardHeader,
  CCardBody,
  CForm,
  CFormInput,
  CButton,
  CTable,
  CTableRow,
  CTableHead,
  CTableBody,
  CTableHeaderCell,
  CTableDataCell,
  CFormSelect,
} from '@coreui/react'
import { TYPES_LIST, GENDER_LIST } from 'src/mockData'
import TypesListItem from './TypesListItem'

const TypesList = () => {
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
      let copyList = [...typesList]
      let newItem = {
        id: typesList[typesList.length - 1]?.id ? typesList[typesList.length - 1].id + 1 : 1,
        name: nameValue,
        link: linkValue,
        acitivty: false,
        filterValue: filterValue,
        metaTitleValue: metaTitleValue,
        h1Value: h1Value,
        metaDescriptionValue: metaDescriptionValue,
        genderValue: genderValue,
        externalLinkValue: externalLinkValue,
        genitiveNameValue: genitiveNameValue,
        genitiveNameXValue: genitiveNameXValue,
      }
      copyList.push(newItem)
      setTypesList(copyList)
      setNameValue(null)
      setLinkValue(null)
      setValidated(false)
      setFilterValue(null)
      setMetaTitleValue(null)
      setMetaDescriptionValue(null)
      setH1Value(null)
      setExternalLinkValue(null)
      setGenitiveNameValue(null)
      setGenitiveNameXValue(null)
      setGenderValue(null)
      form.reset()
    } else {
      setValidated(true)
    }
    e.preventDefault()
    e.stopPropagation()
  }

  const handleRemoveItem = (e) => {
    const id = e.target.dataset.id
    let copyList = [...typesList]
    copyList.splice(
      copyList.findIndex((item) => item.id === id),
      1,
    )
    setTypesList(copyList)
  }

  useEffect(() => {
    setTypesList(TYPES_LIST)
  }, [])

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Типы работ</strong>
          </CCardHeader>
          <CCardBody className="d-flex flex-column gap-3">
            <p className="text-medium-emphasis small">Здесь вы можете изменить типы работы</p>
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
                    onChange={(e) => setGenitiveNameValue(e.target.value)}
                  />
                </CCol>
                <CCol sm="3" className="d-flex align-items-center">
                  <CButton type="submit">Сохранить</CButton>
                </CCol>
              </CRow>
            </CForm>
            <CTable>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">#</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Название</CTableHeaderCell>
                  <CTableHeaderCell scope="col" className="text-start">
                    Ссылка
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col" className="text-center">
                    Активность
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col" className="text-start"></CTableHeaderCell>
                  <CTableHeaderCell scope="col" className="text-start"></CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {typesList && typesList.length ? (
                  typesList.map((item, index) => (
                    <TypesListItem key={index} item={item} handleRemoveItem={handleRemoveItem} />
                  ))
                ) : (
                  <CTableRow>
                    <CTableHeaderCell scope="row" className="align-middle"></CTableHeaderCell>
                    <CTableDataCell colSpan={4} className="text-center">
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

export default TypesList

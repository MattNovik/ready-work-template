import React, { useEffect, useState, useRef } from 'react'
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
import { PAGES_LIST } from 'src/mockData'
import PagesListItem from './PagesListItem'

const PagesList = () => {
  const [nameValue, setNameValue] = useState(null)
  const [textValue, setTextValue] = useState(null)
  const [metaTitleValue, setMetaTitleValue] = useState(null)
  const [metaDescriptionValue, setMetaDescriptionValue] = useState(null)
  const [h1Value, setH1Value] = useState(null)
  const [lisPages, setListPages] = useState(null)
  const [validated, setValidated] = useState(false)
  const refForm = useRef(null)

  const removeItem = (e) => {
    const id = e.target.dataset.id
    let copyList = [...lisPages]
    copyList.splice(
      copyList.findIndex((item) => item.id === id),
      1,
    )
    setListPages(copyList)
  }

  const handleSubmit = (e) => {
    const form = e.currentTarget
    if (form.checkValidity() === true) {
      let copyList = [...lisPages]
      let newItem = {
        id: lisPages[lisPages.length - 1]?.id ? lisPages[lisPages.length - 1].id + 1 : 1,
        name: nameValue,
        text: textValue,
        metaTitle: metaTitleValue,
        metaDescription: metaDescriptionValue,
        h1: h1Value,
        activity: true,
      }
      copyList.push(newItem)
      setListPages(copyList)
      setNameValue(null)
      setTextValue(null)
      setMetaTitleValue(null)
      setMetaDescriptionValue(null)
      setH1Value(null)
      setValidated(false)
      form.reset()
    } else {
      setValidated(true)
    }
    e.preventDefault()
    e.stopPropagation()
  }

  useEffect(() => {
    setListPages(PAGES_LIST)
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
                  <CFormLabel htmlFor="nameInput">Название</CFormLabel>
                  <CFormInput
                    type="text"
                    id="nameInput"
                    placeholder="Название страницы"
                    required
                    feedbackValid="Заполнено"
                    feedbackInvalid="Необходимо заполнить"
                    onChange={(e) => setNameValue(e.target.value)}
                  />
                </CCol>
                <CCol sm="auto" className="d-flex flex-column justify-content-end">
                  <CFormLabel htmlFor="textInput">Текст</CFormLabel>
                  <CFormInput
                    type="text"
                    id="textInput"
                    placeholder="Текст"
                    required
                    feedbackValid="Заполнено"
                    feedbackInvalid="Необходимо заполнить"
                    onChange={(e) => setTextValue(e.target.value)}
                  />
                </CCol>
                <CCol sm="auto" className="d-flex flex-column justify-content-end">
                  <CFormLabel htmlFor="metaDescriptionInput">Мета описание</CFormLabel>
                  <CFormInput
                    type="text"
                    id="metaDescriptionInput"
                    placeholder="Мета описание"
                    required
                    feedbackValid="Заполнено"
                    feedbackInvalid="Необходимо заполнить"
                    onChange={(e) => setMetaDescriptionValue(e.target.value)}
                  />
                </CCol>
                <CCol sm="auto" className="d-flex flex-column justify-content-end">
                  <CFormLabel htmlFor="metaTitleInput">Мета название</CFormLabel>
                  <CFormInput
                    type="text"
                    id="metaTitleInput"
                    placeholder="Мета название"
                    required
                    feedbackValid="Заполнено"
                    feedbackInvalid="Необходимо заполнить"
                    onChange={(e) => setMetaTitleValue(e.target.value)}
                  />
                </CCol>
                <CCol sm="auto" className="d-flex flex-column justify-content-end">
                  <CFormLabel htmlFor="h1Input">Заголовок</CFormLabel>
                  <CFormInput
                    type="text"
                    id="h1Input"
                    placeholder="Заголовок"
                    required
                    feedbackValid="Заполнено"
                    feedbackInvalid="Необходимо заполнить"
                    onChange={(e) => setH1Value(e.target.value)}
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
                  <CTableHeaderCell scope="col" className="text-center">
                    Текст
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col" className="text-center">
                    Мета название
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col" className="text-center">
                    Мета описание
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col" className="text-center">
                    Заголовок
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col" className="text-center">
                    Активность
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col" className="text-center"></CTableHeaderCell>
                  <CTableHeaderCell scope="col" className="text-center"></CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {lisPages && lisPages.length ? (
                  lisPages.map((item, index) => (
                    <PagesListItem key={index} item={item} removeItem={removeItem} />
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

export default PagesList

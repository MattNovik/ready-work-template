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
  CCloseButton,
  CFormCheck,
} from '@coreui/react'
import { TYPES_LIST } from 'src/mockData'

const TypesList = () => {
  const [nameValue, setNameValue] = useState(null)
  const [linkValue, setLinkValue] = useState(null)
  const [validated, setValidated] = useState(false)
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
      }
      copyList.push(newItem)
      setTypesList(copyList)
      setNameValue(null)
      setLinkValue(null)
      setValidated(false)
      form.reset()
    } else {
      setValidated(true)
    }
    e.preventDefault()
    e.stopPropagation()
  }

  const handleActivtyChange = () => {}

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
          <CCardBody>
            <p className="text-medium-emphasis small">Здесь вы можете изменить типы работы</p>
            <CForm
              noValidate
              validated={validated}
              ref={refForm}
              className="d-flex flex-column gap-3"
              onSubmit={handleSubmit}
            >
              <CRow className="gap-3">
                <CCol sm="auto" className="d-flex flex-column justify-content-end">
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
                <CCol sm="auto" className="d-flex flex-column justify-content-end">
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
                  <CTableHeaderCell scope="col" className="text-start">
                    Ссылка
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col" className="text-center">
                    Активност
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col" className="text-center"></CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {typesList && typesList.length ? (
                  typesList.map((item, index) => (
                    <CTableRow key={index}>
                      <CTableHeaderCell scope="row" className="align-middle">
                        {item.id}
                      </CTableHeaderCell>
                      <CTableDataCell className="align-middle">{item.name}</CTableDataCell>
                      <CTableDataCell className="align-middle text-start">
                        {item.link}
                      </CTableDataCell>
                      <CTableDataCell className="align-middle text-center">
                        <CFormCheck
                          id={'activity' + item.id}
                          defaultChecked={item.activity}
                          onChange={handleActivtyChange}
                        />
                      </CTableDataCell>
                      <CTableHeaderCell className="align-middle text-center">
                        <CCloseButton data-id={item.id} onClick={handleRemoveItem} />
                      </CTableHeaderCell>
                    </CTableRow>
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

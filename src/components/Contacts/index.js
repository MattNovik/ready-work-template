import React, { useState, useRef } from 'react'
import {
  CRow,
  CCard,
  CCol,
  CCardHeader,
  CCardBody,
  CForm,
  CFormInput,
  CButton,
} from '@coreui/react'

const Contacts = () => {
  const [validated, setValidated] = useState(false)
  const refForm = useRef(null)

  const handleSubmit = (e) => {
    const form = e.currentTarget
    if (form.checkValidity() === true) {
      setValidated(false)
      form.reset()
    } else {
      setValidated(true)
    }
    e.preventDefault()
    e.stopPropagation()
  }
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Контакты</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Здесь вы можете изменить настройки контактов
            </p>
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
                    id="entity"
                    aria-describedby="entity"
                    label="Наименование юр.лица"
                    placeholder="Наименование юр.лица"
                    feedbackValid="Заполнено"
                    feedbackInvalid="Необходимо заполнить"
                    required
                  />
                </CCol>
                <CCol sm="auto" className="d-flex flex-column justify-content-end">
                  <CFormInput
                    type="text"
                    id="workTimeUsual"
                    aria-describedby="workTimeUsual"
                    label="График работы (пн-пт)"
                    placeholder="График работы (пн-пт)"
                    feedbackValid="Заполнено"
                    feedbackInvalid="Необходимо заполнить"
                    required
                  />
                </CCol>
                <CCol sm="auto" className="d-flex flex-column justify-content-end">
                  <CFormInput
                    type="text"
                    id="workTimeWeekend"
                    aria-describedby="workTimeWeekend"
                    label="График работы (св-вс)"
                    placeholder="График работы (св-вс)"
                    feedbackValid="Заполнено"
                    feedbackInvalid="Необходимо заполнить"
                    required
                  />
                </CCol>
                <CCol sm="auto" className="d-flex flex-column justify-content-end">
                  <CFormInput
                    type="text"
                    id="inn"
                    aria-describedby="inn"
                    label="ИНН"
                    placeholder="ИНН"
                    feedbackValid="Заполнено"
                    feedbackInvalid="Необходимо заполнить"
                    required
                  />
                </CCol>
                <CCol sm="auto" className="d-flex flex-column justify-content-end">
                  <CFormInput
                    type="text"
                    id="ogrn"
                    aria-describedby="ogrn"
                    label="ОГРН"
                    placeholder="ОГРН"
                    feedbackValid="Заполнено"
                    feedbackInvalid="Необходимо заполнить"
                    required
                  />
                </CCol>
                <CCol sm="auto" className="d-flex flex-column justify-content-end">
                  <CFormInput
                    type="text"
                    id="adress"
                    aria-describedby="adress"
                    label="Адрес"
                    placeholder="Адрес"
                    feedbackValid="Заполнено"
                    feedbackInvalid="Необходимо заполнить"
                    required
                  />
                </CCol>
              </CRow>
              <CCol sm="auto" className="d-flex align-items-center">
                <CButton type="submit">Отправить</CButton>
              </CCol>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Contacts

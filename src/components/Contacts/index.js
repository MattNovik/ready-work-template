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
} from '@coreui/react'
import Api from 'src/Api/Api'

const Contacts = () => {
  const [entityValue, setEntityValue] = useState(null)
  const [workDayValue, setWorkDayValue] = useState(null)
  const [workWeekEndValue, setWorkWeekEndValue] = useState(null)
  const [innValue, setInnValue] = useState(null)
  const [ogrnValue, setOgrnValue] = useState(null)
  const [adressValue, setAdressValue] = useState(null)
  const [phoneValue, setPhoneValue] = useState(null)
  const [validated, setValidated] = useState(false)
  const refForm = useRef(null)

  const handleSubmit = (e) => {
    const form = e.currentTarget
    if (form.checkValidity() === true) {
      let dataToSend = {
        name: 'contacts',
        value: {
          inn: innValue,
          ogrn: ogrnValue,
          phone: phoneValue,
          address: adressValue,
          work_time: workDayValue,
          work_time_we: workWeekEndValue,
          organization_name: entityValue,
        },
      }
      Api.sendSettingsContacts(dataToSend)
        .then((response) => {
          alert('Удачно')
          console.log(response)
        })
        .catch((error) => {
          alert('Ошибка')
          console.log(error)
        })
      setValidated(false)
      form.reset()
    } else {
      setValidated(true)
    }
    e.preventDefault()
    e.stopPropagation()
  }

  useEffect(() => {
    Api.getListSettingsContacts()
      .then((response) => {
        console.log(response)
        setEntityValue(response.data.data['organization_name'])
        setWorkDayValue(response.data.data['work_time'])
        setWorkWeekEndValue(response.data.data['work_time_we'])
        setInnValue(response.data.data['inn'])
        setOgrnValue(response.data.data['ogrn'])
        setAdressValue(response.data.data['adress'])
        setPhoneValue(response.data.data['phone'])
      })
      .catch((error) => console.log(error))
  }, [])
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
                    value={entityValue}
                    onChange={(e) => setEntityValue(e.target.value)}
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
                    value={workDayValue}
                    onChange={(e) => setWorkDayValue(e.target.value)}
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
                    value={workWeekEndValue}
                    onChange={(e) => setWorkWeekEndValue(e.target.value)}
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
                    value={innValue}
                    onChange={(e) => setInnValue(e.target.value)}
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
                    value={ogrnValue}
                    onChange={(e) => setOgrnValue(e.target.value)}
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
                    value={adressValue}
                    onChange={(e) => setAdressValue(e.target.value)}
                    required
                  />
                </CCol>
                <CCol sm="auto" className="d-flex flex-column justify-content-end">
                  <CFormInput
                    type="text"
                    id="phoneInput"
                    aria-describedby="phoneInput"
                    label="Телефон"
                    placeholder="Телефон"
                    feedbackValid="Заполнено"
                    feedbackInvalid="Необходимо заполнить"
                    value={phoneValue}
                    onChange={(e) => setPhoneValue(e.target.value)}
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

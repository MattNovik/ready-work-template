import React, { useState, useRef } from 'react'
import {
  CRow,
  CCard,
  CCardBody,
  CForm,
  CFormInput,
  CCardTitle,
  CButton,
  CFormCheck,
  CFormLabel,
  CCol,
} from '@coreui/react'
import { PIGS_HEAD_NAMES } from 'src/mockData'

const PigsFarmSettingsItem = (item, handleRemoveItem) => {
  const [nameValue, setNameValue] = useState(item.item.name)
  const [activityValue, setActivityValue] = useState(item.item.activity)
  const [h1Value, setH1Value] = useState(item.item.h1)
  const [h1AuthUsersValue, setH1AuthUsersValue] = useState(item.item.h2)
  const [h2Value, setH2Value] = useState(item.item.h2AuthUsers)
  const [h2AuthUsersValue, setH2AuthUsersValue] = useState(item.item.h2AuthUsers)
  const [bannerValue, setBannerValue] = useState(item.item.banner)
  const [textButtonValue, setTextButtonValue] = useState(item.item.textButton)
  const [textButtonAuthValue, setTextButtonAuthValue] = useState(item.item.textButtonAuth)
  const [timeToScriptValue, setTimeToScriptValue] = useState(item.item.timeToScript)
  const [timeToShowAgainValue, setTimeToShowAgainValue] = useState(item.item.timeToShowAgain)
  const [pagesDoNotShowValue, setPagesDoNotShowValue] = useState(item.item.pagesDoNotShow)
  const [imageSrc, setImageSrc] = useState(item.item.banner)
  const [validated, setValidated] = useState(false)
  const refForm = useRef(null)

  const handleActivtyChange = () => {
    setActivityValue(!activityValue)
  }

  const preloadImage = (e) => {
    const [file] = e.target.files
    setImageSrc(URL.createObjectURL(file))
  }

  const handleSubmit = (e) => {
    const form = e.currentTarget
    if (form.checkValidity() === true) {
    } else {
      setValidated(true)
    }
    e.preventDefault()
    e.stopPropagation()
  }

  return (
    <CCard className="pigs-item">
      <CCardTitle className="p-3 fw-bold">{item.item.id + ': ' + nameValue}</CCardTitle>
      <CCardBody className="gap-3 d-flex flex-column">
        <CForm
          className="gap-3 d-flex flex-column"
          onSubmit={handleSubmit}
          noValidate
          validated={validated}
          ref={refForm}
        >
          <CRow>
            <CCol className="gap-1 d-flex flex-column">
              <CFormInput
                type="text"
                id="h1Input"
                placeholder="Заголовок"
                required
                feedbackValid="Заполнено"
                label={PIGS_HEAD_NAMES.h1}
                feedbackInvalid="Необходимо заполнить"
                value={h1Value}
                onChange={(e) => setH1Value(e.target.value)}
              />
            </CCol>
          </CRow>
          <CRow>
            <CCol className="gap-1 d-flex flex-column">
              <CFormLabel>Активность</CFormLabel>
              <CFormCheck
                id={'activityInput' + item.name}
                defaultChecked={activityValue}
                onChange={handleActivtyChange}
              />
            </CCol>
          </CRow>
          <CRow>
            <CCol className="gap-1 d-flex flex-column">
              <CFormInput
                type="text"
                id="h1AuthUsersInput"
                placeholder={PIGS_HEAD_NAMES.h1AuthUsers}
                required
                feedbackValid="Заполнено"
                label={PIGS_HEAD_NAMES.h1AuthUsers}
                feedbackInvalid="Необходимо заполнить"
                value={h1AuthUsersValue}
                onChange={(e) => setH1AuthUsersValue(e.target.value)}
              />
            </CCol>
          </CRow>
          <CRow>
            <CCol className="gap-1 d-flex flex-column">
              <CFormInput
                type="text"
                id="h2Input"
                placeholder={PIGS_HEAD_NAMES.h2}
                required
                feedbackValid="Заполнено"
                label={PIGS_HEAD_NAMES.h2}
                feedbackInvalid="Необходимо заполнить"
                value={h2Value}
                onChange={(e) => setH2Value(e.target.value)}
              />
            </CCol>
          </CRow>
          <CRow>
            <CCol className="gap-1 d-flex flex-column">
              <CFormInput
                type="text"
                id="h2AuthUsersInput"
                placeholder={PIGS_HEAD_NAMES.h2AuthUsers}
                required
                feedbackValid="Заполнено"
                label={PIGS_HEAD_NAMES.h2AuthUsers}
                feedbackInvalid="Необходимо заполнить"
                value={h2AuthUsersValue}
                onChange={(e) => setH2AuthUsersValue(e.target.value)}
              />
            </CCol>
          </CRow>
          <CRow className="gap-3 d-flex flex-column">
            <CCol className="gap-1 d-flex flex-column">
              <CFormInput
                type="file"
                accept="image/png, image/gif, image/jpeg"
                aria-describedby="imageLoad"
                feedbackValid="Загружено"
                feedbackInvalid="Необходимо загрузить"
                aria-label="Upload"
                id="bannerValueInput"
                required={imageSrc ? false : true}
                label={PIGS_HEAD_NAMES.bannerValue}
                onChange={(e) => {
                  setBannerValue(e.target.value)
                  preloadImage(e)
                }}
              />
            </CCol>
            {imageSrc ? (
              <img src={imageSrc} width="200" height="200" alt="" className="pigs-item__image" />
            ) : null}
          </CRow>
          <CRow>
            <CCol className="gap-1 d-flex flex-column">
              <CFormInput
                type="text"
                id="textButtonInput"
                placeholder={PIGS_HEAD_NAMES.textButton}
                required
                feedbackValid="Заполнено"
                label={PIGS_HEAD_NAMES.textButton}
                feedbackInvalid="Необходимо заполнить"
                value={textButtonValue}
                onChange={(e) => setTextButtonValue(e.target.value)}
              />
            </CCol>
          </CRow>
          <CRow>
            <CCol className="gap-1 d-flex flex-column">
              <CFormInput
                type="text"
                id="textButtonAuthInput"
                placeholder={PIGS_HEAD_NAMES.textButtonAuth}
                required
                feedbackValid="Заполнено"
                label={PIGS_HEAD_NAMES.textButtonAuth}
                feedbackInvalid="Необходимо заполнить"
                value={textButtonAuthValue}
                onChange={(e) => setTextButtonAuthValue(e.target.value)}
              />
            </CCol>
          </CRow>
          <CRow>
            <CCol className="gap-1 d-flex flex-column">
              <CFormInput
                type="text"
                id="timeToScriptInput"
                placeholder={PIGS_HEAD_NAMES.timeToScript}
                required
                feedbackValid="Заполнено"
                label={PIGS_HEAD_NAMES.timeToScript}
                feedbackInvalid="Необходимо заполнить"
                value={timeToScriptValue}
                onChange={(e) => setTimeToScriptValue(e.target.value)}
              />
            </CCol>
          </CRow>
          <CRow>
            <CCol className="gap-1 d-flex flex-column">
              <CFormInput
                type="text"
                id="timeToShowAgainInput"
                placeholder={PIGS_HEAD_NAMES.timeToShowAgain}
                required
                feedbackValid="Заполнено"
                label={PIGS_HEAD_NAMES.timeToShowAgain}
                feedbackInvalid="Необходимо заполнить"
                value={timeToShowAgainValue}
                onChange={(e) => setTimeToShowAgainValue(e.target.value)}
              />
            </CCol>
          </CRow>
          <CRow>
            <CCol className="gap-1 d-flex flex-column">
              <CFormInput
                type="text"
                id="pagesDoNotShowInput"
                placeholder={PIGS_HEAD_NAMES.pagesDoNotShow}
                required
                feedbackValid="Заполнено"
                label={PIGS_HEAD_NAMES.pagesDoNotShow}
                feedbackInvalid="Необходимо заполнить"
                value={pagesDoNotShowValue}
                onChange={(e) => setPagesDoNotShowValue(e.target.value)}
              />
            </CCol>
          </CRow>
          <CRow className="gap-3 d-flex">
            <CCol className="gap-3 d-flex">
              <CButton type="submit" className="w-25">
                Сохранить
              </CButton>
              <CButton
                type="button"
                className="w-25"
                data-id={item.id}
                onClick={(e) => item.handleRemoveItem(e)}
              >
                Удалить
              </CButton>
            </CCol>
          </CRow>
        </CForm>
      </CCardBody>
    </CCard>
  )
}

export default PigsFarmSettingsItem

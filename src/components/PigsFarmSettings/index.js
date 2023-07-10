import React, { useEffect, useRef, useState } from 'react'
import {
  CRow,
  CCol,
  CCard,
  CCardHeader,
  CCardBody,
  CForm,
  CFormInput,
  CButton,
  CCardText,
  CFormTextarea,
} from '@coreui/react'
import { PIGS_SETTINGS, PIGS_HEAD_NAMES } from 'src/mockData'
import PigsFarmSettingsItem from '../PigsFarmSettingsItem'

const PigsFarmSettings = () => {
  const [nameValue, setNameValue] = useState(null)
  const [activityValue, setActivityValue] = useState(null)
  const [authUsersValue, seAuthUsersValue] = useState(null)
  const [h1Value, setH1Value] = useState(null)
  const [h1AuthUsersValue, setH1AuthUsersValue] = useState(null)
  const [h2Value, setH2Value] = useState(null)
  const [h2AuthUsersValue, setH2AuthUsersValue] = useState(null)
  const [bannerValue, setBannerValue] = useState(null)
  const [textButtonValue, setTextButtonValue] = useState(null)
  const [textButtonAuthValue, setTextButtonAuthValue] = useState(null)
  const [timeToScriptValue, setTimeToScriptValue] = useState(null)
  const [timeToShowAgainValue, setTimeToShowAgainValue] = useState(null)
  const [pagesDoNotShowValue, setPagesDoNotShowValue] = useState(null)
  const [pigsSettingsList, setPigsSettingsList] = useState(null)
  const [imageSrc, setImageSrc] = useState(null)
  const [formHideStatus, setFormHideStatus] = useState(true)

  const [validated, setValidated] = useState(false)
  const refForm = useRef(null)

  const handleSubmit = (e) => {
    const form = e.currentTarget
    if (form.checkValidity() === true) {
      let copyList = [...pigsSettingsList]
      let newItem = {
        id: pigsSettingsList[pigsSettingsList.length - 1]?.id
          ? pigsSettingsList[pigsSettingsList.length - 1].id + 1
          : 1,
        name: nameValue,
        activity: true,
        h1: h1Value,
        h1AuthUsers: h1AuthUsersValue,
        h2Value: h2Value,
        banner: bannerValue,
        textButton: textButtonValue,
        textButtonAuth: textButtonAuthValue,
        timeToScript: timeToScriptValue,
        timeToShowAgain: timeToShowAgainValue,
        pagesDoNotShow: pagesDoNotShowValue,
      }
      copyList.push(newItem)
      setPigsSettingsList(copyList)
      setValidated(false)
      setNameValue(null)
      setActivityValue(null)
      seAuthUsersValue(null)
      setH1Value(null)
      setH1AuthUsersValue(null)
      setH2Value(null)
      setH2AuthUsersValue(null)
      setBannerValue(null)
      setTextButtonValue(null)
      setTextButtonAuthValue(null)
      setTimeToShowAgainValue(null)
      setTimeToScriptValue(null)
      setPagesDoNotShowValue(null)
      form.reset()
      setFormHideStatus(true)
    } else {
      setValidated(true)
    }
    e.preventDefault()
    e.stopPropagation()
  }

  const handleRemoveItem = (e) => {
    const id = e.target.dataset.id
    let copyList = [...pigsSettingsList]
    copyList.splice(
      copyList.findIndex((item) => item.id === id),
      1,
    )
    setPigsSettingsList(copyList)
  }

  const preloadImage = (e) => {
    const [file] = e.target.files
    setBannerValue(file)
    setImageSrc(URL.createObjectURL(file))
  }

  useEffect(() => {
    setPigsSettingsList(PIGS_SETTINGS)
  }, [])
  return (
    <CRow className="pigs-farm">
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Свиньи</strong>
          </CCardHeader>
          <CCardBody className="gap-3 d-flex flex-column">
            <p className="text-medium-emphasis small">
              Здесь вы можете изменить настройки фермы свиней
            </p>
            <CButton
              type="button"
              onClick={() => setFormHideStatus(false)}
              className={'w-25' + (formHideStatus ? '' : ' pigs-farm__button-open')}
            >
              Добавить новый элемент
            </CButton>
            <CForm
              noValidate
              validated={validated}
              ref={refForm}
              className={
                'd-flex flex-column gap-3 pigs-farm__form' +
                (formHideStatus ? '' : ' pigs-farm__form--open')
              }
              onSubmit={handleSubmit}
            >
              <CRow className="gap-3">
                <CCol sm="3" className="d-flex flex-column justify-content-end">
                  <CFormInput
                    type="text"
                    id="h1Input"
                    placeholder="Название"
                    required
                    feedbackValid="Заполнено"
                    label={PIGS_HEAD_NAMES.name}
                    feedbackInvalid="Необходимо заполнить"
                    onChange={(e) => setNameValue(e.target.value)}
                  />
                </CCol>
                <CCol sm="3" className="d-flex flex-column justify-content-end">
                  <CFormInput
                    type="text"
                    id="h1Input"
                    placeholder="Заголовок"
                    required
                    feedbackValid="Заполнено"
                    label={PIGS_HEAD_NAMES.h1}
                    feedbackInvalid="Необходимо заполнить"
                    onChange={(e) => setH1Value(e.target.value)}
                  />
                </CCol>
                <CCol sm="3" className="d-flex flex-column justify-content-end">
                  <CFormInput
                    type="text"
                    id="h1AuthUsersInput"
                    placeholder={PIGS_HEAD_NAMES.h1AuthUsers}
                    required
                    feedbackValid="Заполнено"
                    label={PIGS_HEAD_NAMES.h1AuthUsers}
                    feedbackInvalid="Необходимо заполнить"
                    onChange={(e) => setH1AuthUsersValue(e.target.value)}
                  />
                </CCol>
                <CCol sm="3" className="d-flex flex-column justify-content-end">
                  <CFormInput
                    type="text"
                    id="h2Input"
                    placeholder={PIGS_HEAD_NAMES.h2}
                    required
                    feedbackValid="Заполнено"
                    label={PIGS_HEAD_NAMES.h2}
                    feedbackInvalid="Необходимо заполнить"
                    onChange={(e) => setH2Value(e.target.value)}
                  />
                </CCol>
                <CCol sm="3" className="d-flex flex-column justify-content-end">
                  <CFormInput
                    type="text"
                    id="h2AuthUsersInput"
                    placeholder={PIGS_HEAD_NAMES.h2AuthUsers}
                    required
                    feedbackValid="Заполнено"
                    label={PIGS_HEAD_NAMES.h2AuthUsers}
                    feedbackInvalid="Необходимо заполнить"
                    onChange={(e) => setH2AuthUsersValue(e.target.value)}
                  />
                </CCol>
                <CCol sm="3" className="d-flex flex-column justify-content-end">
                  <CFormInput
                    type="file"
                    accept="image/png, image/gif, image/jpeg"
                    aria-describedby="imageLoad"
                    feedbackValid="Загружено"
                    feedbackInvalid="Необходимо загрузить"
                    aria-label="Upload"
                    id="bannerValueInput"
                    required
                    label={PIGS_HEAD_NAMES.bannerValue}
                    onChange={(e) => {
                      setBannerValue(e.target.value)
                      preloadImage(e)
                    }}
                  />
                </CCol>
                <CCol sm="3" className="d-flex flex-column justify-content-end">
                  {imageSrc ? (
                    <img
                      src={imageSrc}
                      width="200"
                      height="200"
                      alt=""
                      className="pigs-item__image"
                    />
                  ) : (
                    <img
                      src="https://www.colorbook.io/imagecreator.php?hex=808080&width=300&height=320&text=Пусто"
                      width="200"
                      height="200"
                      alt=""
                      className="pigs-item__image"
                    />
                  )}
                </CCol>
                <CCol sm="3" className="d-flex flex-column justify-content-end">
                  <CFormInput
                    type="text"
                    id="textButtonInput"
                    placeholder={PIGS_HEAD_NAMES.textButton}
                    required
                    feedbackValid="Заполнено"
                    label={PIGS_HEAD_NAMES.textButton}
                    feedbackInvalid="Необходимо заполнить"
                    onChange={(e) => setTextButtonValue(e.target.value)}
                  />
                </CCol>
                <CCol sm="3" className="d-flex flex-column justify-content-end">
                  <CFormInput
                    type="text"
                    id="textButtonAuthInput"
                    placeholder={PIGS_HEAD_NAMES.textButtonAuth}
                    required
                    feedbackValid="Заполнено"
                    label={PIGS_HEAD_NAMES.textButtonAuth}
                    feedbackInvalid="Необходимо заполнить"
                    onChange={(e) => setTextButtonAuthValue(e.target.value)}
                  />
                </CCol>
                <CCol sm="3" className="d-flex flex-column justify-content-end">
                  <CFormInput
                    type="text"
                    id="timeToScriptInput"
                    placeholder={PIGS_HEAD_NAMES.timeToScript}
                    required
                    feedbackValid="Заполнено"
                    label={PIGS_HEAD_NAMES.timeToScript}
                    feedbackInvalid="Необходимо заполнить"
                    onChange={(e) => setTimeToScriptValue(e.target.value)}
                  />
                </CCol>
                <CCol sm="3" className="d-flex flex-column justify-content-end">
                  <CFormInput
                    type="text"
                    id="timeToShowAgainInput"
                    placeholder={PIGS_HEAD_NAMES.timeToShowAgain}
                    required
                    feedbackValid="Заполнено"
                    label={PIGS_HEAD_NAMES.timeToShowAgain}
                    feedbackInvalid="Необходимо заполнить"
                    onChange={(e) => setTimeToShowAgainValue(e.target.value)}
                  />
                </CCol>
                <CCol sm="3" className="d-flex flex-column justify-content-end">
                  <CFormTextarea
                    type="text"
                    id="pagesDoNotShowInput"
                    placeholder="products/1,products/2 и т.д: (about, products/{*}, page-3)"
                    required
                    feedbackValid="Заполнено"
                    label={PIGS_HEAD_NAMES.pagesDoNotShow}
                    feedbackInvalid="Необходимо заполнить"
                    onChange={(e) => setPagesDoNotShowValue(e.target.value)}
                  />
                </CCol>
                <CCol sm="3" className="d-flex flex-column justify-content-end">
                  <CButton type="submit">Сохранить</CButton>
                </CCol>
              </CRow>
            </CForm>
            <h2>Cписок настроек </h2>
            {pigsSettingsList && pigsSettingsList.length ? (
              pigsSettingsList.map((item, index) => (
                <PigsFarmSettingsItem key={index} item={item} handleRemoveItem={handleRemoveItem} />
              ))
            ) : (
              <CCardText>Пустой список </CCardText>
            )}
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default PigsFarmSettings

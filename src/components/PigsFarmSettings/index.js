import React, { useEffect, useRef, useState } from 'react'
import {
  CRow,
  CCol,
  CCard,
  CCardHeader,
  CCardBody,
  CForm,
  CTable,
  CTableBody,
  CTableHeaderCell,
  CTableDataCell,
  CFormCheck,
  CCloseButton,
  CTableRow,
} from '@coreui/react'
import { PIGS_SETTINGS } from 'src/mockData'

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

  const [validated, setValidated] = useState(false)
  const refForm = useRef(null)

  const handleSubmit = (e) => {
    const form = e.currentTarget
    if (form.checkValidity() === true) {
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
    } else {
      setValidated(true)
    }
    e.preventDefault()
    e.stopPropagation()
  }

  const handleActivtyChange = () => {}

  const handleRemoveItem = (e) => {
    const id = e.target.dataset.id
    let copyList = [...pigsSettingsList]
    copyList.splice(
      copyList.findIndex((item) => item.id === id),
      1,
    )
    setPigsSettingsList(copyList)
  }

  useEffect(() => {
    setPigsSettingsList(PIGS_SETTINGS)
  }, [])
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Свиньи</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Здесь вы можете изменить настройки фермы свиней
            </p>
            <CForm
              noValidate
              validated={validated}
              ref={refForm}
              className="d-flex flex-column gap-3"
              onSubmit={handleSubmit}
            >
              <CRow className="gap-3"></CRow>
            </CForm>
            <CTable>
              <CTableBody>
                {pigsSettingsList && pigsSettingsList.length ? (
                  pigsSettingsList.map((item, index) => (
                    <CTableRow key={index}>
                      <CTableHeaderCell scope="row" className="align-middle">
                        {item.id}
                      </CTableHeaderCell>
                      <CTableDataCell className="align-middle">{item.name}</CTableDataCell>
                      <CTableDataCell className="align-middle text-start">{item.h1}</CTableDataCell>
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

export default PigsFarmSettings

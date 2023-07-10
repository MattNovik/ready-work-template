import React, { useState, useRef, useEffect } from 'react'
import {
  CRow,
  CCol,
  CCard,
  CCardHeader,
  CCardBody,
  CForm,
  CFormInput,
  CTable,
  CTableRow,
  CTableHeaderCell,
  CTableHead,
  CTableBody,
  CTableDataCell,
  CButton,
} from '@coreui/react'
import { MENU_LIST } from 'src/mockData'
import BottomMenuItem from './BottomMenuItem'

const BottomMenu = () => {
  const [nameValue, setNameValue] = useState(null)
  const [linkValue, setLinkValue] = useState(null)
  const [validated, setValidated] = useState(false)
  const [menuList, setMenuList] = useState(null)
  const refForm = useRef(null)

  const handleSubmit = (e) => {
    const form = e.currentTarget
    if (form.checkValidity() === true) {
      let copyList = [...menuList]
      let newItem = {
        id: menuList[menuList.length - 1]?.id ? menuList[menuList.length - 1].id + 1 : 1,
        name: nameValue,
        link: linkValue,
      }
      copyList.push(newItem)

      setMenuList(copyList)
      form.reset()
      setNameValue(null)
      setLinkValue(null)
      setValidated(false)
    } else {
      setValidated(true)
    }
    e.preventDefault()
    e.stopPropagation()
  }

  const handleRemoveItem = (e) => {
    const id = e.target.dataset.id
    let copyList = [...menuList]
    copyList.splice(
      copyList.findIndex((item) => item.id === id),
      1,
    )
    setMenuList(copyList)
  }

  useEffect(() => {
    setMenuList(MENU_LIST)
  }, [])
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Меню в футуре</strong>
          </CCardHeader>
          <CCardBody className="d-flex flex-column gap-3">
            <p className="text-medium-emphasis small">Здесь вы можете изменить меню в футуре</p>
            <CForm
              noValidate
              validated={validated}
              ref={refForm}
              className="d-flex flex-column gap-3"
              onSubmit={handleSubmit}
            >
              <CRow>
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
                    Ссылка
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col" className="text-center"></CTableHeaderCell>
                  <CTableHeaderCell scope="col" className="text-center"></CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {menuList && menuList.length ? (
                  menuList.map((item, index) => (
                    <BottomMenuItem key={index} item={item} handleRemoveItem={handleRemoveItem} />
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

export default BottomMenu

import React, { useRef, useState, useEffect } from 'react'
import { CRow, CCol, CCard, CCardHeader, CCardBody, CButton } from '@coreui/react'
import { Editor } from '@tinymce/tinymce-react'
import Api from 'src/Api/Api'

const DocsEditor = () => {
  const [docValue, setDocValue] = useState(null)
  const [offertaValue, setOffertaValue] = useState(null)
  const [someValue, setSomeValue] = useState(null)

  const editorRef = useRef(null)
  const editorOffertRef = useRef(null)
  const editorSomeRef = useRef(null)
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent())
      let dataToSend = {
        text: editorRef.current.getContent(),
      }
      Api.sendDocumentItem('policy', dataToSend)
        .then((response) => {
          alert('Удачно')
          console.log(response)
        })
        .catch((error) => {
          alert('Ошибка')
          console.log(error)
        })
    }
  }

  const logOfferta = () => {
    if (editorRef.current) {
      console.log(editorOffertRef.current.getContent())
      let dataToSend = {
        text: editorOffertRef.current.getContent(),
      }
      Api.sendDocumentItem('offer', dataToSend)
        .then((response) => {
          alert('Удачно')
          console.log(response)
        })
        .catch((error) => {
          alert('Ошибка')
          console.log(error)
        })
    }
  }

  const logSome = () => {
    if (editorSomeRef.current) {
      console.log(editorSomeRef.current.getContent())
      let dataToSend = {
        text: editorSomeRef.current.getContent(),
      }
      Api.sendDocumentItem('safe-payment', dataToSend)
        .then((response) => {
          alert('Удачно')
          console.log(response)
        })
        .catch((error) => {
          alert('Ошибка')
          console.log(error)
        })
    }
  }

  useEffect(() => {
    Api.getDocumentsList()
      .then((response) => {
        setDocValue(response.data.data.policy)
        setSomeValue(response.data.data.safe.payment)
        setOffertaValue(response.data.data.offer)
        console.log(response)
      })
      .catch((error) => console.log(error))
  }, [])
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Документ Политика конфиденциальности</strong>
          </CCardHeader>
          <CCardBody className="d-flex flex-column gap-3">
            <p className="text-medium-emphasis small">Здесь вы можете изменить договор</p>
            <Editor
              onInit={(evt, editor) => (editorRef.current = editor)}
              initialValue={
                docValue ? docValue : '<p>This is the initial content of the editor.</p>'
              }
              init={{
                height: 500,
                menubar: false,
                plugins: [
                  'advlist autolink lists link image charmap print preview anchor',
                  'searchreplace visualblocks code fullscreen',
                  'insertdatetime media table paste code help wordcount',
                ],
                toolbar:
                  'undo redo | formatselect | ' +
                  'bold italic backcolor | alignleft aligncenter ' +
                  'alignright alignjustify | bullist numlist outdent indent | ' +
                  'removeformat | help',
                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
              }}
            />
            <CButton style={{ width: 'max-content' }} onClick={log}>
              Log editor content
            </CButton>
          </CCardBody>
        </CCard>

        <CCard className="mb-4 ">
          <CCardHeader>
            <strong>Документы Оферта</strong>
          </CCardHeader>
          <CCardBody className="d-flex flex-column gap-3">
            <p className="text-medium-emphasis small">Здесь вы можете изменить договор оферты</p>
            <Editor
              onInit={(evt, editor) => (editorOffertRef.current = editor)}
              initialValue={
                offertaValue ? offertaValue : '<p>This is the initial content of the editor.</p>'
              }
              init={{
                height: 500,
                menubar: false,
                plugins: [
                  'advlist autolink lists link image charmap print preview anchor',
                  'searchreplace visualblocks code fullscreen',
                  'insertdatetime media table paste code help wordcount',
                ],
                toolbar:
                  'undo redo | formatselect | ' +
                  'bold italic backcolor | alignleft aligncenter ' +
                  'alignright alignjustify | bullist numlist outdent indent | ' +
                  'removeformat | help',
                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
              }}
            />
            <CButton style={{ width: 'max-content' }} onClick={logOfferta}>
              Log editor content
            </CButton>
          </CCardBody>
        </CCard>
        <CCard className="mb-4 ">
          <CCardHeader>
            <strong>Документ Безопасность платежей</strong>
          </CCardHeader>
          <CCardBody className="d-flex flex-column gap-3">
            <p className="text-medium-emphasis small">Здесь вы можете изменить</p>
            <Editor
              onInit={(evt, editor) => (editorSomeRef.current = editor)}
              initialValue={
                someValue ? someValue : '<p>This is the initial content of the editor.</p>'
              }
              init={{
                height: 500,
                menubar: false,
                plugins: [
                  'advlist autolink lists link image charmap print preview anchor',
                  'searchreplace visualblocks code fullscreen',
                  'insertdatetime media table paste code help wordcount',
                ],
                toolbar:
                  'undo redo | formatselect | ' +
                  'bold italic backcolor | alignleft aligncenter ' +
                  'alignright alignjustify | bullist numlist outdent indent | ' +
                  'removeformat | help',
                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
              }}
            />
            <CButton style={{ width: 'max-content' }} onClick={logSome}>
              Log editor content
            </CButton>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default DocsEditor

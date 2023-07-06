import React, { useRef } from 'react'
import { CRow, CCol, CCard, CCardHeader, CCardBody, CButton } from '@coreui/react'
import { Editor } from '@tinymce/tinymce-react'

const DocsEditor = () => {
  const editorRef = useRef(null)
  const editorOffertRef = useRef(null)
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent())
    }
  }

  const logOfferta = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent())
    }
  }
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Документ Договор</strong>
          </CCardHeader>
          <CCardBody className="d-flex flex-column gap-3">
            <p className="text-medium-emphasis small">Здесь вы можете изменить договор</p>
            <Editor
              onInit={(evt, editor) => (editorRef.current = editor)}
              initialValue="<p>This is the initial content of the editor.</p>"
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
              initialValue="<p>This is the initial content of the editor.</p>"
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
      </CCol>
    </CRow>
  )
}

export default DocsEditor

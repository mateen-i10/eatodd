import React, { useRef } from 'react'
import styled from 'styled-components'
import { Button } from 'reactstrap'

import EmailEditor from 'react-email-editor'
import sample from './sample.json'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
`

const Bar = styled.div`
  flex: 1;
  // background-color: #61dafb;
  color: #000;
  padding: 10px;
  display: flex;
  max-height: 60px;
  h1 {
    flex: 1;
    font-size: 16px;
    text-align: left;
    margin-top: 10px;
  }
  button {
    flex: 1;
    // padding: 10px;
    margin-left: 10px;
    font-size: 14px;
    font-weight: bold;
    border: 0px;
    max-width: 150px;
    cursor: pointer;
  }
`
// eslint-disable-next-line no-unused-vars
const Designer = (props) => {
    const emailEditorRef = useRef(null)
    const saveDesign = () => {
        emailEditorRef.current.editor.saveDesign((design) => {
            console.log('saveDesign', design)
            alert('Design JSON has been logged in your developer console.')
        })
    }

    const exportHtml = () => {
        emailEditorRef.current.editor.exportHtml((data) => {
            // eslint-disable-next-line no-unused-vars
            const { design, html } = data
            console.log('exportHtml', html)
            alert('Output HTML has been logged in your developer console.')
        })
    }

    const onDesignLoad = (data) => {
        console.log('onDesignLoad', data)
    }
    const onLoad = () => {
        console.log('onLoad')
        emailEditorRef.current.editor.addEventListener(
            'design:loaded',
            onDesignLoad
        )

        emailEditorRef.current.editor.loadDesign(sample)
    }
    const loadagain = () => {
        onLoad()
    }

    const onReady = () => {
        console.log('onReady')
    }
    return (
        <Container>
            <Bar>
                <h1>EATOMG Email Designer</h1>
                <Button.Ripple color='primary' outline onClick={saveDesign}>Save Design</Button.Ripple>
                <Button.Ripple color='primary' onClick={exportHtml}>Export HTML</Button.Ripple>
                <Button.Ripple color='primary' onClick={loadagain}>Load</Button.Ripple>
            </Bar>

            <React.StrictMode>
                <EmailEditor ref={emailEditorRef} onLoad={onLoad} onReady={onReady} />
            </React.StrictMode>
        </Container>
    )
}

export default Designer
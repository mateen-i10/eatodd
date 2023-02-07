import React, {useLayoutEffect, useRef} from 'react'
import styled from 'styled-components'
import { Button } from 'reactstrap'

import EmailEditor from 'react-email-editor'
import sample from './sample.json'
import {useDispatch, useSelector} from "react-redux"
import {getTemplate, updateTemplate} from "../../../redux/template/action"

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
const Designer = ({match}) => {
    const id = match.params.id

    const tempObj = useSelector(state => state.template.object)
    console.log("tempObj", tempObj)

    const dispatch = useDispatch()

    useLayoutEffect(() => {
        dispatch(getTemplate(id))
    }, [])

    const emailEditorRef = useRef(null)

    const saveDesign = () => {
        // console.log(emailEditorRef.current.editor)
        // return
        emailEditorRef.current.editor.exportHtml((data) => {
            const {design, html} = data
            console.log('saveDesign', design)
            console.log('saveHTML', html)
            const finalData = {...tempObj, json:JSON.stringify(design)}
            console.log(finalData, "all data")
            dispatch(updateTemplate(finalData))
            // alert('Design JSON has been logged in your developer console.')
        })
    }
    console.log("*****", emailEditorRef, id)
    const exportHtml = () => {
        emailEditorRef.current.editor.exportHtml((data) => {
            // eslint-disable-next-line no-unused-vars
            const { design, html } = data
            console.log('exportHtml', html)

            // alert('Output HTML has been logged in your developer console.')
        })
    }

    const onLoad = () => {
        console.log('onLoad')

    }

    // JSON.parse(d)

    const loadagain = () => {
        onLoad()
    }

    const onReady = () => {
        console.log('onReady')
        console.log(emailEditorRef.current.editor, 'current ')

        const json = tempObj.json
        console.log("JSON", json)

        if (json === null || json === undefined) emailEditorRef.current?.editor?.loadDesign(sample)

        else emailEditorRef.current?.editor?.loadDesign(JSON.parse(json))
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
/* eslint-disable multiline-ternary */
import React, {forwardRef} from "react"
import {Modal, ModalBody, ModalHeader} from "reactstrap"
import MyForm from "./MyForm"
import UILoader from "../@core/components/ui-loader"

const FormModal =  (props, ref) => {

    const onModalToggle = () => {
        props.toggleModal(null)
    }
    const renderModal = () => {
        return <Modal isOpen={props.isModal} fade={true} size="lg" backdrop="static" toggle={onModalToggle}>
            <UILoader blocking={props.isLoading}>
                <ModalHeader toggle={onModalToggle}>{props.modalTitle}</ModalHeader>
                <ModalBody className="px-4">
                    <MyForm {...props} ref={ref} />
                </ModalBody>
            </UILoader>
        </Modal>
    }

 return renderModal()
}

export default forwardRef(FormModal)

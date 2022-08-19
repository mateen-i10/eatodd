/* eslint-disable multiline-ternary */
import React, {forwardRef} from "react"
import {Modal, ModalBody, ModalHeader} from "reactstrap"
import Wizard from "../@core/components/wizard"
import UILoader from "../@core/components/ui-loader"

const ModalWizard =  (props, ref) => {
    const onModalToggle = () => {
        props.toggleModal(null)
    }
    const renderModal = () => {
        return <Modal isOpen={props.isModal} className='modal-lg' fade={true} size="lg" backdrop="static" toggle={onModalToggle} >
            <UILoader blocking={props.isLoading}>
                <ModalHeader  toggle={onModalToggle}>{props.modalTitle}</ModalHeader>
                <ModalBody className="px-1">
                        <div className='vertical-wizard'>
                            <Wizard
                                ref={ref}
                                steps={props.steps}
                                options={{
                                    linear: props.isLinear
                                }}
                                instance={el => props.setStepper(el)}
                            />
                        </div>
                </ModalBody>
            </UILoader>
        </Modal>
    }
    return renderModal()
}

export default forwardRef(ModalWizard)

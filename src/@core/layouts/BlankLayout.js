// ** React Imports
import React, { useEffect, useState } from 'react'

// ** Custom Hooks
import { useSkin } from '@hooks/useSkin'

// ** Third Party Components
import classnames from 'classnames'
import {Button, Card, CardBody, CardText, CardTitle, Modal, ModalBody, ModalFooter} from "reactstrap"
import {useDispatch, useSelector} from "react-redux"
import {setGroupOrderExist} from "../../redux/customer/reducer"

const BlankLayout = ({ children }) => {
  // ** States
  const [isMounted, setIsMounted] = useState(false)
  const isGroupOrderExist = useSelector(state => state.customer.isGroupOrderExist)

  // ** Hooks
  const { skin } = useSkin()
  const dispatch = useDispatch()

  useEffect(() => {
    setIsMounted(true)
    return () => setIsMounted(false)
  }, [])

  if (!isMounted) {
    return null
  }

  const renderModal = () => {
    return (
        <div className='basic-modal '>
          <Modal isOpen={isGroupOrderExist}>
            <Card className='text-center'>
              <CardBody>
                <CardTitle tag='h4'>Group Order Exist</CardTitle>
                <CardText>You have an active group order either complete it or cancel it!!!</CardText>
                <Button.Ripple color='primary' onClick={() => dispatch(setGroupOrderExist(false))} outline>
                  OK
                </Button.Ripple>
              </CardBody>
            </Card>
          </Modal>
        </div>
    )
  }

  return (
    <div
      className={classnames('blank-page', {
        'dark-layout': skin === 'dark'
      })}
    >
      <div className='app-content'>
        <div className='content-wrapper'>
          <div className='content-body'>{children}</div>
        </div>
      </div>
      {renderModal()}
    </div>
  )
}

export default BlankLayout

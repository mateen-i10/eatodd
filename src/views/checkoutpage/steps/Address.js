// ** Third Party Components
import { useForm, Controller } from 'react-hook-form'

// ** Reactstrap Imports
import { Form, Input, Card, Label, CardHeader, CardTitle, CardBody, CardText, Button, Row, Col } from 'reactstrap'
import {useState} from "react"

const defaultValues = {
  fullName: '',
  city: '',
  state: '',
  phonenumb: '',
  flat: '',
  pinCode: '',
  landmark: ''
}

const Address = props => {
  // ** Props
  const { stepper } = props

  // ** Vars
  const {
    control,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues })

  const [user, setUser] = useState("")
  const [contact, setContact] = useState("")
  const [address, setAddress] = useState("")

  const onSubmit = data => {
    if (Object.values(data).every(field => field.length > 0)) {
      // stepper.next()
      console.log("Form Data", data.fullName)
      setUser(data.fullName)
      setContact(data.phonenumb)
      setAddress(data.flat)

    } else {
      for (const key in data) {
        if (data[key].length === 0) {
          setError(key, {
            type: 'manual'
          })
        }
      }
    }
  }

  return (
      <>
    <Form className='list-view product-checkout' onSubmit={handleSubmit(onSubmit)} style={{marginBottom: 60}} >
      <div className='container-sm'>
        <Row>
          <Col xl={9}>
            <Card>
              <CardHeader className='flex-column align-items-start'>
                <CardTitle tag='h4'>Add New Address</CardTitle>
                <CardText className='text-muted mt-25'>
                  Be sure to check "Deliver to this address" when you have finished
                </CardText>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col md='6' sm='12'>
                    <div className='mb-2'>
                      <Label className='form-label' for='fullName'>
                        Full Name:
                      </Label>
                      <Controller
                          control={control}
                          name='fullName'
                          render={({ field }) => (
                              <Input id='fullName' placeholder='John Doe' invalid={errors.fullName && true} {...field} />
                          )}
                      />
                    </div>
                  </Col>
                  <Col md='6' sm='12'>
                    <div className='mb-2'>
                      <Label className='form-label' for='phonenumb'>
                        Mobile Number:
                      </Label>
                      <Controller
                          control={control}
                          name='phonenumb'
                          render={({ field }) => (
                              <Input
                                  type='number'
                                  id='phonenumb'
                                  placeholder='0123456789'
                                  invalid={errors.phonenumb && true}
                                  {...field}
                              />
                          )}
                      />
                    </div>
                  </Col>
                  <Col md='6' sm='12'>
                    <div className='mb-2'>
                      <Label className='form-label' for='flat'>
                        Flat, House No:
                      </Label>
                      <Controller
                          control={control}
                          name='flat'
                          render={({ field }) => (
                              <Input
                                  type='number'
                                  id='flat'
                                  placeholder='9447 Glen Eagles Drive'
                                  invalid={errors.flat && true}
                                  {...field}
                              />
                          )}
                      />
                    </div>
                  </Col>
                  <Col md='6' sm='12'>
                    <div className='mb-2'>
                      <Label className='form-label' for='landmark'>
                        Landmark e.g. near apollo hospital:
                      </Label>
                      <Controller
                          control={control}
                          name='landmark'
                          render={({ field }) => (
                              <Input
                                  id='landmark'
                                  placeholder='Near Apollo Hospital'
                                  invalid={errors.landmark && true}
                                  {...field}
                              />
                          )}
                      />
                    </div>
                  </Col>
                  <Col md='6' sm='12'>
                    <div className='mb-2'>
                      <Label className='form-label' for='city'>
                        Town/City:
                      </Label>
                      <Controller
                          control={control}
                          name='city'
                          render={({ field }) => (
                              <Input
                                  id='city'
                                  placeholder='Los Angeles'
                                  invalid={errors.city && true}
                                  {...field}
                              />
                          )}
                      />
                    </div>
                  </Col>
                  <Col md='6' sm='12'>
                    <div className='mb-2'>
                      <Label className='form-label' for='pinCode'>
                        Pincode:
                      </Label>
                      <Controller
                          control={control}
                          name='pinCode'
                          render={({ field }) => (
                              <Input
                                  type='number'
                                  id='pinCode'
                                  placeholder='201301'
                                  invalid={errors.pinCode && true}
                                  {...field}
                              />
                          )}
                      />
                    </div>
                  </Col>
                  <Col md='6' sm='12'>
                    <div className='mb-2'>
                      <Label className='form-label' for='state'>
                        State:
                      </Label>
                      <Controller
                          control={control}
                          name='state'
                          render={({ field }) => (
                              <Input
                                  id='state'
                                  placeholder='California'
                                  invalid={errors.state && true}
                                  {...field}
                              />
                          )}
                      />
                    </div>
                  </Col>
                  <Col md='6' sm='12'>
                    <div className='mb-2'>
                      <Label className='form-label' for='add-type'>
                        Address Type:
                      </Label>
                      <Input type='select' name='add-type' id='add-type'>
                        <option value='home'>Home</option>
                        <option value='work'>Work</option>
                      </Input>
                    </div>
                  </Col>
                  <Col sm='6'>
                    <Button color='primary' onClick={() => stepper.previous()} >
                      Go Back
                    </Button>
                  </Col>
                  <Col sm='6' className="text-end">
                    <Button type='submit' color='primary'>
                      Save
                    </Button>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>

          <Col xl={3}>
            <div className='customer-card'>
                  <Card>
                    <CardHeader>
                      <CardTitle tag='h4'>User Data</CardTitle>
                    </CardHeader>
                    <CardBody>
                      <CardText>{user !== '' ? <div>
                          <h5>Customer Name:</h5>
                          <p>{user}</p>
                      </div> : []}</CardText>
                      <CardText>{contact !== '' ? <div>
                        <h5>Contact Details:</h5>
                        <p>{contact}</p>
                      </div> : []}</CardText>
                      <CardText>{address !== '' ? <div>
                        <h5>address:</h5>
                        <p>{address}</p>
                      </div> : []}</CardText>
                    </CardBody>
                    {user !== "" ? <Button
                        block
                        type='button'
                        color='primary'
                        onClick={() => stepper.next()}
                        className="btn-next delivery-address mt-2"
                    >
                      Deliver To This Address
                    </Button> : []}
                  </Card>
            </div>
          </Col>
        </Row>
      </div>
    </Form>
      </>
  )
}

export default Address

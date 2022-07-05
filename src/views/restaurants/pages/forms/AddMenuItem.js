// ** React Imports
import { Fragment } from 'react'

// ** Reactstrap Imports
import {
    Card,
    Row,
    Col,
    Modal,
    Input,
    Label,
    Button,
    CardBody,
    CardText,
    CardTitle,
    ModalBody,
    ModalHeader,
    FormFeedback
} from 'reactstrap'

// ** Third Party Components
import Select from 'react-select'
import { User, Check, X } from 'react-feather'
import { useForm, Controller } from 'react-hook-form'

// ** Utils
import { selectThemeColors } from '@utils'

// ** Styles
import '@styles/react/libs/react-select/_react-select.scss'
import Link from "react-router-dom/es/Link"

const roleOptions = [
    { value: 'under the spot', label: 'Under The Spot' },
    { value: 'salad', label: 'Salad' },
    { value: 'something on the side', label: 'Something on the Side' },
    { value: 'sandwiches', label: 'Sandwiches' },
    { value: 'build your own plate', label: 'Build Your Own Plate' },
    { value: 'drinks', label: 'Drinks' },
    { value: 'desserts', label: 'Desserts' },
    { value: 'wines', label: 'Wines' }
]

const BranchOptions = [
    { value: 'active', label: 'Active' },
    { value: 'disable', label: 'Disable' }
]

const defaultValues = {
    firstName: 'Bob',
    lastName: 'Barton',
    username: 'bob.dev'
}

const values = [
    {line: "Select a bread or wrap"},
    {line: "Healthy Spread"},
    {line: "Stock up on Salad"},
    {line: "Lay your base"},
    {line: "Pick a protein or vegetable"}
]

const addonValues = [
    {addonline: 'Add a grain to your sandwich'},
    {addonline: 'Add a salad to your sandwich'},
    {addonline: 'Extra Protein'},
    {addonline: 'Add Side of Grain'},
    {addonline: 'Add Side Sauce'},
    {addonline: 'Add extra Protein'},
    {addonline: 'Add Side of Pita Bread'},
    {addonline: 'Add A Side Salad'},
    {addonline: 'Add Feta On top'},
    {addonline: 'Add A Hard Boiled Egg'},
    {addonline: 'Add a Lentil Soip'}
]

const wineValues = [
    {wineline:"Veuve Clicquot (Sparkling, Champagne)"},
    {wineline:"Mumm (Sparkling, Champagne)"},
    {wineline:"Ruffino Prosecco (Sparkling, Glera)"},
    {wineline:"Oysters Bay (White, Sauvignon Blanc)"},
    {wineline:"Cakebread (White, Chardonnay)"},
    {wineline:"Duckhorn Vinyards (Sauvignon Blanc, White)"},
    {wineline:"Michele Charlo (White, Moscato)"},
    {wineline:"Ferrari Carrano (White, Chardonnay)"},
    {wineline:"Santa Margarita (White, Pinot Grigio)"},
    {wineline:"Kim Crawford (White, Sauvignon Blanc)"},
    {wineline:"Whispering Angel (Rose)"},
    {wineline:"Prisoner (Red, Zinfendel)"},
    {wineline:"Daou (Red, Cabernet Sauvignon)"},
    {wineline:"Beaulieu Vineyard (Red, Cabernet Sauvignon)"},
    {wineline:"Cakebread (Red, Pinot Noir)"},
    {wineline:"Caymus (Red, Cabernet Sauvignon)"},
    {wineline:"Meiomi (Red, Pinot Noir)"},
    {wineline:"Duckhorn Vinyards (Red, Merlot)"},
    {wineline:"Duckhorn Vinyards (Red, Cabernet Sauvignon)"},
    {wineline:"Silver Oak (Red, Cabernet Sauvignon)"},
    {wineline:"Ruffino Ducale (Red, Sangiovese)"}
]

const AddMenuItem = (props) => {

    // ** Hooks
    const {
        control,
        setError,
        handleSubmit,
        formState: { }
    } = useForm({ defaultValues })

    const onSubmit = data => {
        if (Object.values(data).every(field => field.length > 0)) {
            return null
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
        <Fragment>
            <Modal isOpen={props.isShow} className='modal-dialog-centered modal-lg'>
                    <ModalHeader className='bg-transparent' toggle={() => props.setShow(!props.isShow)}></ModalHeader>
                <ModalBody className='mx-50 pb-5'>
                    <div className='text-center mb-2'>
                        <h1 className='mb-1'>Add a New Menu Item</h1>
                    </div>
                    <Row tag='form' className='gy-1 pt-75' onSubmit={handleSubmit(onSubmit)}>
                        <Col md={6} xs={12}>
                            <Label className='form-label' for='lastName'>
                                Name
                            </Label>
                            <Controller
                                name='Name'
                                control={control}
                                render={({ field }) => (
                                    <Input {...field} id='name' value={props.data.name} placeholder='jane' />
                                )}
                            />
                        </Col>
                        <Col md={6} xs={12}>
                            <Label className='form-label' for='lastName'>
                                Description
                            </Label>
                            <Controller
                                name='description'
                                control={control}
                                render={({ field }) => (
                                    <Input {...field} id='description' value={props.description} placeholder='description' />
                                )}
                            />
                        </Col>
                        <Col md={6} xs={12}>
                            <Label className='form-label'>
                                Price
                            </Label>
                            <Controller
                                name='price'
                                control={control}
                                render={({ field }) => (
                                    <Input {...field} id='price' value={props.data.prices} placeholder='price' />
                                )}
                            />
                        </Col>
                        <Col md={6} xs={12}>
                            <Label className='form-label' for='status'>
                                Category
                            </Label>
                            <Select
                                id='status'
                                isClearable={false}
                                className='react-select'
                                classNamePrefix='select'
                                options={roleOptions}
                                theme={selectThemeColors}
                                defaultValue={roleOptions[0]}
                            />
                        </Col>
                        <Col md={6} xs={12}>
                            <Label className='form-label'>
                                Status
                            </Label>
                            <Select
                                id='Branch'
                                isClearable={false}
                                className='react-select'
                                classNamePrefix='select'
                                options={BranchOptions}
                                theme={selectThemeColors}
                                defaultValue={BranchOptions[0]}
                            />
                        </Col>
                        <Col md={6} xs={12}>
                            <Label className='form-label'>
                                Push Item
                            </Label>
                            <Select
                                id='Branch'
                                isClearable={false}
                                className='react-select'
                                classNamePrefix='select'
                                options={BranchOptions}
                                theme={selectThemeColors}
                                defaultValue={BranchOptions[0]}
                            />
                        </Col>
                        <h4 style={{marginTop:30, marginBottom: -10}}>Modifiers</h4>
                        <hr />
                        <div style={{marginTop:-2}}>
                            <div className="form-check">
                                {values.map((element) => {
                                   return <div>
                                       <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                       <label className="form-check-label" htmlFor="flexCheckDefault">
                                           {element.line}
                                       </label>
                                   </div>
                                })}
                            </div>
                        </div>

                        <h4 style={{marginTop:30, marginBottom: -10}}>Addon</h4>
                        <hr />
                        <div style={{marginTop:-2}}>
                            <div className="form-check">
                                {addonValues.map((element) => {
                                    return <div>
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            {element.addonline}
                                        </label>
                                    </div>
                                })}
                            </div>
                        </div>

                        <h4 style={{marginTop:30, marginBottom: -10}}>Wine Pairing</h4>
                        <hr />
                        <div style={{marginTop:-2}}>
                            <div className="form-check">
                                {wineValues.map((element) => {
                                    return <div>
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            {element.wineline}
                                        </label>
                                    </div>
                                })}
                            </div>
                        </div>

                        <Col xs={12} className='text-center mt-2 pt-50'>
                                <Button type='submit' className='me-1' color='primary'>
                                    Submit
                                </Button>
                                <Button type='reset' color='secondary' outline onClick={() => props.setShow(!props.isShow)}>
                                    Discard
                                </Button>
                        </Col>
                    </Row>
                </ModalBody>
            </Modal>
        </Fragment>
    )
}

export default AddMenuItem
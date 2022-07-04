// ** React Imports
import { Fragment, useState } from 'react'

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
import AddingFeilds from "./AddingFeilds"

// ** Third Party Components
import Select from 'react-select'
import { User, Check, X } from 'react-feather'
import { useForm, Controller } from 'react-hook-form'

// ** Utils
import { selectThemeColors } from '@utils'
// ** Styles
import '@styles/react/libs/react-select/_react-select.scss'
import Link from "react-router-dom/es/Link"
import AddingCategoryFeilds from "./AddCatogoryFeilds"

const defaultValues = {
    firstName: 'Bob',
    lastName: 'Barton',
    username: 'bob.dev'
}

const BranchOptions = [
    { value: 'make your own pizza', label: 'Make your own Pizza' },
    { value: 'hand pulled lamb', label: 'Hand Pulled Lamb' },
    { value: 'chicken shawarma', label: 'Chicken Shawarma' },
    { value: 'spicy chicken kebab', label: 'Spicy Chicken Kebab' },
    { value: 'turkish meatball', label: 'Turkish Meatball' },
    { value: 'ratatuille pizza', label: 'Ratatuille Pizza' },
    { value: 'flafel pizza', label: 'Flafel Pizza' },
    { value: 'cheese and zatar pizza', label: 'Cheese and Zatar Pizza' },
    { value: 'spicy chicken pizza', label: 'spicy chicken pizza' },
    { value: 'build your own plate', label: 'Build Your Own Plate' },
    { value: 'MEZZE PLATTER: No Meat, All Treat', label: 'MEZZE PLATTER: No Meat, All Treat' },
    { value: 'STEAK KABSA: Well Fed, Enough Said', label: 'STEAK KABSA: Well Fed, Enough Said' },
    { value: 'BEEF KEBOB: Big Taset, Small Calories', label: 'BEEF KEBOB: Big Taset, Small Calories' },
    { value: 'MEDITERRANEAN SALAD - Weight Management Meal', label: 'MEDITERRANEAN SALAD - Weight Management Meal' },
    { value: 'CHICKPEA SALAD: Superfood Yours', label: 'CHICKPEA SALAD: Superfood Yours' },
    { value: 'Quinoa tabbouleh: it is light but so full of good nutrition', label: 'Quinoa tabbouleh: it is light but so full of good nutrition' },
    { value: 'Tomato & dill salad - Start to be heart smart', label: 'Tomato & dill salad - Start to be heart smart' },
    { value: 'Lebanese Lentil Soup', label: 'Lebanese Lentil Soup' },
    { value: 'lentil soup with a twist', label: 'Lentil Soup With a Twist' },
    { value: 'Roasted okra stew', label: 'Roasted okra stew' },
    { value: 'muhammara (vegan)', label: 'muhammara (vegan)' },
    { value: 'sabich Aka- Falafels best friend', label: 'Sabich Aka- Falafels best friend' },
    { value: 'falafel: A Cultural icon in lebanor', label: 'Falafel: A Cultural Icon in lebanor' },
    { value: 'Eggs- No Steak', label: 'Eggs- No Steak' },
    { value: 'Baked Cauliflower', label: 'Baked Cauliflower' },
    { value: 'Turkish Spicy Meatballs', label: 'Turkish Spicy Meatballs' },
    { value: 'Spicy Chicken Kabob', label: 'Spicy Chicken Kabob' },
    { value: 'Chicken Shawarma - Old Faithful', label: 'Chicken Shawarma - Old Faithful' },
    { value: 'Hand Pulled Lamb - Meat Treat', label: 'Hand Pulled Lamb - Meat Treat' },
    { value: 'Steak Shawarma', label: 'Steak Shawarma' },
    { value: 'build your own plate', label: 'Build Your Own Plate' },
    { value: 'Mezza Platter', label: 'Mezza Platter' },
    { value: 'Steak Kabsa', label: 'Steak Kabsa' },
    { value: 'Spicy Ground Beef', label: 'Spicy Ground Beef' }
]

const AddRecipe = () => {
    // ** States
    const [show, setShow] = useState(true)

    // ** Hooks
    const {
        // eslint-disable-next-line no-unused-vars
        control
    } = useForm({ defaultValues })

    // const onSubmit = data => {
    //     if (Object.values(data).every(field => field.length > 0)) {
    //         return null
    //     } else {
    //         for (const key in data) {
    //             if (data[key].length === 0) {
    //                 setError(key, {
    //                     type: 'manual'
    //                 })
    //             }
    //         }
    //     }
    // }

    return (
        <Fragment>
            <Modal isOpen={show} className='modal-dialog-centered modal-lg'>
                <Link to="/dashboard/inventory/recipe">
                    <ModalHeader className='bg-transparent' toggle={() => setShow(!show)}></ModalHeader>
                </Link>
                <ModalBody className='mx-50 pb-5'>
                    <div className='text-center mb-2'>
                        <h1 className='mb-1'>Add a New Recipie</h1>
                    </div>
                    <Row tag='form' className='gy-1 pt-75' >
                        <Col md={6} xs={12}>
                            <Label className='form-label'>
                                Menu Item
                            </Label>
                            <Select
                                id='MenuItem'
                                isClearable={false}
                                className='react-select'
                                classNamePrefix='select'
                                options={BranchOptions}
                                theme={selectThemeColors}
                                defaultValue={BranchOptions[0]}
                            />
                        </Col>

                        <AddingCategoryFeilds />

                        <Col xs={12} className='text-center mt-2 pt-50'>
                            <Link to="/dashboard/inventory/recipe">
                                <Button type='submit' className='me-1' color='primary'>
                                    Create Add on
                                </Button>
                                <Button type='reset' color='secondary' outline onClick={() => setShow(false)}>
                                    Discard
                                </Button>
                            </Link>
                        </Col>
                    </Row>
                </ModalBody>
            </Modal>
        </Fragment>
    )
}

export default AddRecipe

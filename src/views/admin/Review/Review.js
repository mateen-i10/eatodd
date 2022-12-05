// ** React Imports
import React, {Fragment, useRef, useState} from 'react'

// ** Third Party Components
import ReactPaginate from 'react-paginate'
import DataTable from 'react-data-table-component'
import {ChevronDown, Edit, FileText, MoreVertical, Star, Trash} from 'react-feather'
import {
    Button,
    Card,
    CardHeader,
    CardTitle,
    Col,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Input,
    Row,
    UncontrolledDropdown
} from 'reactstrap'
import {useDispatch, useSelector} from "react-redux"
import Swal from "sweetalert2"
import Joi from "joi-browser"
import UILoader from "../../../@core/components/ui-loader"
import FormModal from "../../../components/FormModal"
import {FieldTypes} from "../../../utility/enums/FieldType"
import useLoadData from "../../../utility/customHooks/useLoadData"
import useEdit from "../../../utility/customHooks/useEdit"
import useModalError from "../../../utility/customHooks/useModalError"
import {addReview, deleteReview, getReview, loadReviews, updateReview} from "../../../redux/review/action"
import {setIsEdit, setIsReviewError, setReview} from "../../../redux/review/reducer"

const userReview = (props) => {

    const reviewsList = useSelector(state => state.review.list)
    const formInitialState = useSelector(state => state.review.object)
    const miscData = useSelector(state => state.review.miscData)
    const isEdit = useSelector(state => state.review.isEdit)
    const isLoading = useSelector(state => state.review.isLoading)
    const isError = useSelector(state => state.review.isError)
    const isSuccess = useSelector(state => state.review.isSuccess)
    const dispatch = useDispatch()

    // ** refs
    const formModalRef = useRef(null)

    const [currentPage, setCurrentPage] = useState(miscData && miscData.pageIndex ? miscData.pageIndex : 1)
    const [pageSize] = useState(10)
    const [searchValue, setSearchValue] = useState('')

    const ratings = async () => [
        {label: '*', value: 1},
        {label: '**', value: 2},
        {label: '***', value: 3},
        {label: '****', value: 4},
        {label: '*****', value: 5}
    ]

    // ** local States
    const [modalTitle, setModalTitle] = useState('Add Review')
    const [edit, setEdit] = useState(false)
    const [formState, setFormState] = useState({})
    const [isModal, setModal] = useState(false)
    const [isModalLoading, setModalLoading] = useState(false)
    const [formData] = useState([
        {
            type: FieldTypes.Text,
            label: 'Name',
            placeholder: 'Enter Name',
            name: 'personName',
            isRequired: true,
            fieldGroupClasses: 'col-6'
        },
        {
            type: FieldTypes.Select,
            label: 'Rating',
            name: 'rating',
            isRequired: true,
            fieldGroupClasses: 'col-6',
            loadOptions: ratings,
            isAsyncSelect: true,
            isMulti: false
        },
        {
            type: FieldTypes.Text,
            label: 'Address',
            placeholder: 'Enter Address',
            name: 'address',
            isRequired: true,
            fieldGroupClasses: 'col-12'
        },
        {
            type: FieldTypes.TextArea,
            label: 'Description',
            placeholder: 'Enter Description',
            name: 'description',
            fieldGroupClasses: 'col-12'
        }
    ])

    const schema = Joi.object({
        personName: Joi.string().required().label("Name"),
        rating: Joi.number().required().label("Rating"),
        address: Joi.string().required().label("Address")
    })
    // ** Function to handle filter
    const toggle = () => {
        if (isModal) setEdit(false)
        setModal(!isModal)
        setFormState({...formInitialState})
        if (isModalLoading) setModalLoading(false)
    }

    // custom hooks
    useLoadData(isSuccess, loadReviews, isModal, toggle, currentPage, pageSize, searchValue)
    useEdit(isEdit, setModalLoading, setFormState, formInitialState, setEdit, setIsEdit, setReview, {
        personName: '',
        rating: '',
        address: '',
        description: ''
    })
    useModalError(isError, setModalLoading, setIsReviewError)

    const addClick = () => {
        setModalTitle('Add Review')
        toggle()
    }

    const editClick = (id) => {
        toggle()
        dispatch(getReview(id, true))
        setModalTitle('Edit Review')
        setModalLoading(true)
    }

    const deleteClick = (id, e) => {
        e.preventDefault()
        // show sweet alert here
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#7367f0',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteReview(id))
            }
        })
    }

    const detailOptClick = (id, e) => {
        e.preventDefault()
        props.history.push(`/review/${id}`)
    }

    const handleSubmit = (event) => {
        console.log('formState', formState)

        const final = {...formState, rating: formState.rating?.value}
        console.log(final, 'see')

        event.preventDefault()
        const isError = formModalRef.current.validate(final)
        if (isError) return

        // call api
        setModalLoading(true)
        edit ? dispatch(updateReview(final)) : dispatch(addReview(final))
    }

    const handleFilter = e => {
        console.log('e.keyCode', e.keyCode)
        const value = e.target.value
        if (e.keyCode === 13) {
            dispatch(loadReviews(currentPage, pageSize, value))
        }
        setSearchValue(value)
    }

    // ** Function to handle Pagination
    const handlePagination = page => {
        dispatch(loadReviews(page.selected + 1, pageSize, searchValue))
        setCurrentPage(page.selected + 1)
    }

    const columns = [
        {
            name: 'Name',
            selector: (row) => row.personName,
            sortable: true,
            minWidth: '50px'
        },
        {
            name: 'Rating',
            selector: (row) => `${row.rating === 1 ? <div>abc</div> : row.rating === 2 ? '* *' : row.rating === 3 ? '* * *' : row.rating === 4 ? '* * * *' : row.rating === 5 ? '* * * * *' : ''}`,
            sortable: true,
            minWidth: '50px',
            style: { color: 'goldenrod', fontSize: '35px !important', paddingTop: '15px' }
        },
        {
            name: 'Address',
            selector: (row) => row.address,
            sortable: true,
            minWidth: '50px'
        },
        {
            name: 'Actions',
            allowOverflow: true,
            cell: row => {
                return (
                    <div className='d-flex'>
                        <UncontrolledDropdown>
                            <DropdownToggle className='pe-1 cursor-pointer' tag='span'>
                                <MoreVertical size={15}/>
                            </DropdownToggle>
                            <DropdownMenu end>
                                <DropdownItem tag='a' href='/' className='w-100' onClick={e => detailOptClick(row.id, e)}>
                                    <FileText size={15}/>
                                    <span className='align-middle ms-50'>Details</span>
                                </DropdownItem>
                                <DropdownItem tag='a' href='/' className='w-100' onClick={e => deleteClick(row.id, e)}>
                                    <Trash size={15}/>
                                    <span className='align-middle ms-50'>Delete</span>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <span className='cursor-pointer' onClick={() => {
                            editClick(row.id)
                        }}><Edit size={15}/></span>
                    </div>
                )
            }
        }
    ]

    // ** Custom Pagination
    const CustomPagination = () => {
        const count = miscData?.totalPages ?? 0

        return <ReactPaginate
            previousLabel={''}
            nextLabel={''}
            breakLabel='...'
            pageCount={count || 1}
            marginPagesDisplayed={2}
            pageRangeDisplayed={2}
            activeClassName='active'
            forcePage={currentPage !== 0 ? currentPage - 1 : 0}
            onPageChange={page => handlePagination(page)}
            pageClassName={'page-item'}
            nextLinkClassName={'page-link'}
            nextClassName={'page-item next'}
            previousClassName={'page-item prev'}
            previousLinkClassName={'page-link'}
            pageLinkClassName={'page-link'}
            breakClassName='page-item'
            breakLinkClassName='page-link'
            containerClassName={
                'pagination react-paginate separated-pagination pagination-sm justify-content-end pe-1 mt-1'
            }
        />
    }

    const dataToRender = () => {
        if (reviewsList.length > 0) {
            return reviewsList
        } else {
            return reviewsList.slice(0, pageSize)
        }
    }

    return (
        <Fragment>
            <UILoader blocking={isLoading}>
                <Card>
                    <CardHeader
                        className='flex-md-row flex-column align-md-items-center align-items-start border-bottom'>
                        <div>
                            <CardTitle tag='h4'>Reviews</CardTitle>
                        </div>
                        <Button.Ripple bssize='sm' color='primary' onClick={(e) => addClick(e)}>Add Review</Button.Ripple>
                    </CardHeader>
                    <Row className='justify-content-end mx-0'>
                        <Col className='mt-1' md='12' sm='12'>
                            <Input
                                className='dataTable-filter mb-50'
                                type='text'
                                placeholder='Search'
                                bsSize='sm'
                                id='search-input'
                                value={searchValue}
                                onKeyUp={handleFilter}
                                onChange={handleFilter}
                            />
                        </Col>
                    </Row>
                    <DataTable
                        noHeader
                        pagination
                        paginationServer
                        className='react-dataTable'
                        columns={columns}
                        sortIcon={<ChevronDown size={10}/>}
                        paginationComponent={CustomPagination}
                        data={dataToRender()}
                    />
                </Card>
            </UILoader>
            <FormModal ref={formModalRef}
                       formState={formState}
                       formData={formData}
                       setFormState={setFormState}
                       schema={schema}
                       isModal={isModal}
                       toggleModal={toggle}
                       modalTitle={modalTitle}
                       primaryBtnLabel='Save'
                       secondaryBtnLabel='Cancel'
                       isLoading={isModalLoading}
                       handleSubmit={handleSubmit}
            />

        </Fragment>
    )
}

export default userReview

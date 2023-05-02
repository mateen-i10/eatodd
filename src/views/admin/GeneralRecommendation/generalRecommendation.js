import React, {Fragment, useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {toast} from "react-toastify"
import {
    Badge,
    Button, Card, CardHeader, CardTitle,
    Col, DropdownItem,
    DropdownMenu,
    DropdownToggle, Input,
    Label,
    Modal,
    ModalBody, ModalFooter,
    ModalHeader,
    Row,
    UncontrolledDropdown
} from "reactstrap"
import AsyncSelect from "react-select/async"
import {ChevronDown, Delete, Edit, FileText, MoreVertical, Plus, Search, Trash} from "react-feather"
import {loadOptions} from "../../../utility/Utils"
import {setDetailLoading} from "../../../redux/generalRecommendation/reducer"
import {
    addGeneralRecommendationProduct,
    deleteGeneralRecommendation, getGeneralRecommendation,
    loadGeneralRecommendations, updateGeneralRecommendationProduct
} from "../../../redux/generalRecommendation/action"
import Swal from "sweetalert2"
import ReactPaginate from "react-paginate"
import DataTable from "react-data-table-component"
import UILoader from "../../../@core/components/ui-loader"
import SubcategoryDropdown from "../Components/SubcategoryDropdown"
import {useHistory, useLocation} from "react-router-dom"

const getQueryParams = (search) => {
    return search ? (/^[?#]/.test(search) ? search.slice(1) : search)
        .split("&")
        .reduce((params, param) => {
            const [key, value] = param.split("=")
            params[key] = value ? decodeURIComponent(value.replace(/\+/g, " ")) : ""
            return params
        }, {}) : {}
}

const AssignGeneralRecommendation = (props) => {

    const generalRecommendationList = useSelector(state => state.generalRecommendation.list)
    const miscData = useSelector(state => state.generalRecommendation.miscData)
    const formInitialState = useSelector(state => state.generalRecommendation.object)
    //const isRequestCompleted = useSelector(state => state.generalRecommendation.isRequestCompleted)
    const isSuccess = useSelector(state => state.generalRecommendation.isSuccess)
    const isEdit = useSelector(state => state.generalRecommendation.isEdit)
    const isLoading = useSelector(state => state.generalRecommendation.isLoading)

    console.log('formInitialState', formInitialState)

    const [currentPage, setCurrentPage] = useState(miscData && miscData.pageIndex ? miscData.pageIndex : 1)
    const [pageSize] = useState(10)
    const [searchValue, setSearchValue] = useState('')
    const [formModal, setFormModal] = useState(false)

    const [edit, setEdit] = useState(false)

    const history = useHistory()
    const location = useLocation()

    const RecommendedObject = {productId: 0, recommendedProducts: []}
    const [product, setProduct] = useState(RecommendedObject)

    const queryParams = getQueryParams(location.search)
    const [subcategoryId, setSubcategoryId] = useState(
        queryParams.subcategoryId ? parseInt(queryParams.subcategoryId, 10) : 0
    )
    const [catId, setCatId] = useState(queryParams.categoryId ? parseInt(queryParams.categoryId, 10) : 0)

    const [isSubmit, setSubmit] = useState(false)

    console.log('product', product)
    console.log('setSubmit', setSubmit)
    console.log('subcategoryId', subcategoryId)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadGeneralRecommendations())
    }, [isSuccess])

    const categories = async (input) => {
        return loadOptions('category', input, 1, 12)
    }

    const products = async (search) => {
        return loadOptions('product', search, 1, 100)
    }

    const onSelectProduct = (e) => {
        console.log('eee', e)
        setProduct({productId: e, recommendedProducts: product.recommendedProducts})
    }

    const onSelectRecommendedProduct = (e) => {
        console.log('eee', e)
        setProduct({productId: product.productId, recommendedProducts: e.map(l => l)})
    }

    const handleClose = () => {
        setProduct({productId: 0, recommendedProducts: []})
    }

    const onModalClose = (event) => {
        //props.onCloseModal(event)
        console.log('event', event)
        handleClose()
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
                dispatch(deleteGeneralRecommendation(id))
            }
        })
    }

    const detailOptClick = (id, e) => {
        e.preventDefault()
        props.history.push(`/GeneralRecommendation/${id}`)
    }

    const setData = () => {
        try {
            setProduct({productId: {...formInitialState.productId}, recommendedProducts: formInitialState.recommendedProducts})
        } catch (e) {
            toast.error(e.message)
        }

    }
    useEffect(() => {
        if (isEdit) setData()
    }, [formInitialState, isEdit])

    const addClickBtn = () => {
        setProduct({productId: 0, RecommendedProducts: []})
    }

    const editClick = (id) => {
        console.log('idEdit', id)
        dispatch(getGeneralRecommendation(id, true))
        setFormModal(!formModal)
        setEdit(true)
    }


    const handleSubmit = () => {
        /*setSubmit(true)*/
        try {
            console.log('recommendedProduct', product)
            const finalData = {
                productId: product.productId.value,
                recommendedProducts: product.recommendedProducts.map(p => p.value).toString()
            }
            dispatch(setDetailLoading(true))
            edit ? dispatch(updateGeneralRecommendationProduct({ id: formInitialState.id,
                ...finalData,
                productId: product.productId.value
            })) : dispatch(addGeneralRecommendationProduct(finalData))
            console.log('finalData', finalData)
            onModalClose()
            setEdit(false)
            setFormModal(!formModal)
        } catch (e) {
            toast.error(e.message)
        }
    }

    const handleFilter = e => {
        console.log('e.keyCode', e.keyCode)
        const value = e.target.value
        if (e.keyCode === 13) {
            dispatch(loadGeneralRecommendations(currentPage, pageSize, value))
        }
        setSearchValue(value)
    }

    // ** Function to handle Pagination
    const handlePagination = page => {
        const refId = subcategoryId
        dispatch(loadGeneralRecommendations(page.selected + 1, pageSize, searchValue, refId))
        setCurrentPage(page.selected + 1)
    }

    const callFunc = () => {
        const refId = subcategoryId
        console.log('refId', refId)

        if (refId !== 0) {
            history.push(`${location.pathname}?subcategoryId=${subcategoryId}`)
            dispatch(loadGeneralRecommendations(currentPage, pageSize, "", refId))
        } else {
            console.log("please select a value to search for")
        }
    }

    const columns = [
        {
            name: 'Product Name',
            selector: (row) => row.product.name,
            sortable: true,
            minWidth: '50px'
        },
        {
            name: 'Recommended Product',
            selector: (row) => row.recoProducts.map(r => { return <Badge key={r.id} className="" color={'light-primary'} pill>{r.name}</Badge> }),
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
                                <MoreVertical size={15} />
                            </DropdownToggle>
                            <DropdownMenu end>
                                <DropdownItem tag='a' href='/' className='w-100' onClick={e => detailOptClick(row.id, e)}>
                                    <FileText size={15} />
                                    <span className='align-middle ms-50'>Details</span>
                                </DropdownItem>
                                <DropdownItem tag='a' href='/' className='w-100' onClick={e => deleteClick(row.id, e)}>
                                    <Trash size={15} />
                                    <span className='align-middle ms-50'>Delete</span>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <span className='cursor-pointer' onClick={() => { editClick(row.id) }}><Edit size={15} /></span>
                    </div>
                )
            }
        }
    ]

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
        if (generalRecommendationList.length > 0) {
            return generalRecommendationList
        }  else {
            return generalRecommendationList.slice(0, pageSize)
        }
    }

    return (
        <>
        <Fragment>

            <UILoader blocking={isLoading}>
                <Card>
                    <CardHeader className='row border-bottom'>
                        <CardTitle tag='h4' className='col-4'>General Recommendations</CardTitle>
                        <div className='col-8 mt-md-0 mt-1'>
                            <div className='row'>
                                <div className='col-8 ps-5'>
                                    <Input
                                        className='search-field'
                                        type='text'
                                        bsSize='sm'
                                        id='search-input'
                                        value={searchValue}
                                        onKeyUp={handleFilter}
                                        onChange={handleFilter}
                                        placeholder= 'Search by name'
                                    />
                                </div>
                                <div className='col-4'>
                                    <Button className='float-end' color='primary' onClick={() => {
                                        setFormModal(true)
                                        addClickBtn()
                                    }}>
                                        <Plus size={15} />
                                        <span className='align-middle ms-50'>Add General Recommendation</span>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </CardHeader>
                    <Row className='justify-content-end mx-0'>
                        <Col className='mt-1' md='5' sm='12'>
                            <label>Search by Category <span className='text-danger'>*</span></label>
                            <AsyncSelect
                                loadOptions={categories}
                                defaultOptions
                                isLoading={true}
                                onChange={e => {
                                    setCatId(e.value)
                                    history.push(`${location.pathname}?subcategoryId=${subcategoryId}&categoryId=${e.value}`)
                                }}
                            />
                        </Col>
                        <Col className='mt-1' md='5' sm='12'>
                            <SubcategoryDropdown
                                categoryId={catId}
                                subcategoryId={subcategoryId}
                                setSubcategory={setSubcategoryId}
                                isFormSubmit={isSubmit}
                            />
                        </Col>
                        <Col md='2' sm='12' style={{marginTop:'32px'}}>
                            {catId !== 0 ? <Button style={{borderRadius: '50px', padding:'10px'}} type="button" color='primary' onClick={() => callFunc()}><Search size={18}/></Button> : []}
                        </Col>
                    </Row>
                    <DataTable
                        noHeader
                        pagination
                        paginationServer
                        className='react-dataTable'
                        columns={columns}
                        sortIcon={<ChevronDown size={10} />}
                        paginationComponent={CustomPagination}
                        data={dataToRender()}
                    />
                </Card>
            </UILoader>


        </Fragment>

            <div className='demo-inline-spacing'>
                <div>
                    <Modal isOpen={formModal} toggle={() => {
                        setFormModal(!formModal)
                        setEdit(false)
                    }} fade={true} backdrop="static" className='modal-lg'>
                        <ModalHeader toggle={() => {
                            setFormModal(!formModal)
                            setEdit(false)
                            handleClose()
                        }}>General Recommendation Form</ModalHeader>

                        <ModalBody className='mx-50 pb-5'>
                            <div className='text-center mb-2'>
                                <h1 className='mb-1'>Assign Recommendations To Product</h1>
                            </div>
                            <Row tag='form' className='gy-1 pt-75'>
                                <div className='col-6'>
                                    <Label className='form-label' for='name'>Select Product:</Label>
                                    <AsyncSelect
                                        cacheOptions
                                        defaultOptions
                                        value={product.productId}
                                        //defaultValue={product.productId.value}
                                        onChange={(e) => onSelectProduct(e)}
                                        loadOptions={products}
                                        closeMenuOnSelect={true}
                                        isMulti = {false}
                                    />
                                </div>
                                <div className='col-6'>
                                    <Label className='form-label' for='name'>Select Multiple Product For Recommendation:</Label>
                                    <AsyncSelect
                                        cacheOptions
                                        defaultOptions
                                        value={product.recommendedProducts}
                                        //defaultValue={product.recommendedProducts}
                                        onChange={(e) => onSelectRecommendedProduct(e)}
                                        loadOptions={products}
                                        closeMenuOnSelect={true}
                                        isMulti = {true}
                                    />
                                </div>
                              {/*  <Col xs={12} className='text-end mt-2 pt-50'>
                                    <Button type='reset' color='secondary' onClick={e => onModalClose(e)}>
                                        Close
                                    </Button>
                                    <Button className='ms-1' color='primary' onClick={handleSubmit}>
                                        Submit
                                    </Button>
                                </Col>*/}
                            </Row>
                        </ModalBody>
                        <ModalFooter>
                            <Button color='danger' onClick={() => {
                                setFormModal(!formModal)
                                setEdit(false)
                                handleClose()
                            }}>
                                Close
                            </Button>
                            <Button color='primary' onClick={handleSubmit}>
                                Submit
                            </Button>
                        </ModalFooter>

                    </Modal>
                </div>
            </div>
            {/*<Modal className='modal-dialog-centered modal-lg'>
                <ModalHeader className='bg-transparent' onClick={e => onModalClose(e)}></ModalHeader>

            </Modal>*/}

        </>
    )

}

export default AssignGeneralRecommendation
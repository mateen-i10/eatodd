import {Badge, Button, Col, Input, Modal, Row} from "reactstrap"
import {Link, useHistory} from "react-router-dom"
import {useRef, useState} from "react"
import {User} from "react-feather"
import {clearGroupOrder, isGroupOrder, isJoinedByLink} from "../../utility/Utils"
import Swal from "sweetalert2"
import http, {baseURL} from "../../utility/http"
import {toast} from "react-toastify"
import {groupOrderId} from "../../utility/constants"
import UILoader from "../../@core/components/ui-loader"

const GroupOrderCreated = ({groupCode, isAddMealBtn, isJoinedPeople, noOfPeople}) => {
    const inputRef = useRef(0)
    const history = useHistory()
    const [isLoading, setLoading] = useState(false)

    const onCopyCLick = async (e) => {
        e.preventDefault()
        await navigator.clipboard.writeText(inputRef.current.props.value)
    }
    const onCancelClick = (e) => {
        e.preventDefault()
        // show sweet alert here
        Swal.fire({
            title: 'Are you sure?',
            text: "If you cancel group order then all meals in this group order will be lost",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#7367f0',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, cancel it!',
            cancelButtonText: 'No'
        }).then((result) => {
            if (result.isConfirmed) {
                setLoading(true)
                http._put(`${baseURL}groupOrder/${Number(localStorage.getItem(groupOrderId))}`,  {})
                    .then(res => {
                        console.log('res', res)
                        if (res && res.status === 200 && res.data && res.data.statusCode === 200) {
                            clearGroupOrder()
                            toast.success('Group Order Canceled')
                            history.push('/home')
                        } else {
                            toast.error(res.data.message)
                        }
                    }).catch(e => {
                    toast.error(e.message)
                })
            }
        })
    }

    return (
        <UILoader blocking={isLoading}>
            <div className="row justify-content-center align-items-center">
                {isJoinedPeople && <div className='col-8 text-center'>
                     <Row className='mb-2'>
                        <Col xs={1}>
                            <div className='demo-inline-spacing'>
                                <div className='position-relative'>
                                    <Badge pill color='danger' className='badge-up'>
                                        {noOfPeople}
                                    </Badge>
                                    <User className='text-danger' size={24} />
                                </div>
                            </div>
                        </Col>
                        <Col xs={10}> <h4 className='pt-2'> People Have Joined </h4></Col>
                    </Row>
                </div>}
                <div className="col-12 text-center">
                    <h6 className='my-1'> Copy this link and share with up to 10 people </h6>
                    <Input type='text' ref={inputRef} readOnly className='my-2' value={`http://${window.location.hostname}:3000/group-order-menu/${groupCode}`} />
                    <Button onClick = {onCopyCLick} className='btn btn-success'>
                        Copy
                    </Button>

                    {isAddMealBtn && <div className='mt-2'>
                     <Link to="/home">
                         <Button
                                outline
                                color='secondary'
                                style={{
                                    marginBottom: 30,
                                    borderRadius: 0,
                                    height: 55,
                                    fontSize: "1.5rem",
                                    textTransform: 'uppercase'
                                }}
                            >
                                Add Another Meal
                            </Button>
                            </Link>
                    </div>}
                    {isGroupOrder() && !isJoinedByLink() && <div className='mt-2'>
                         <Button
                                outline
                                color='secondary'
                                onClick={(e) => onCancelClick(e)}
                                style={{
                                    marginBottom: 30,
                                    borderRadius: 0,
                                    height: 55,
                                    fontSize: "1.5rem",
                                    textTransform: 'uppercase'
                                }}
                            >
                                Cancel Order
                            </Button>
                    </div>}
                </div>
            </div>
        </UILoader>
    )
}

export default GroupOrderCreated
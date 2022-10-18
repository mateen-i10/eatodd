import {Button, Input} from "reactstrap"
import {Link} from "react-router-dom"
import {useRef} from "react"

const GroupOrderCreated = ({groupCode, isAddMealBtn}) => {
    const inputRef = useRef(0)
    const onCopyCLick = async (e) => {
        e.preventDefault()
        await navigator.clipboard.writeText(inputRef.current.props.value)
    }
    return (
            <div className="row justify-content-center align-items-center">
                <div className="col-sm-8 col-12 text-center">
                    <h2> Group Order </h2>
                    <h6 className='my-1'> Copy this link and share with up to 20 people </h6>
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
                </div>
            </div>
    )
}

export default GroupOrderCreated
import React, {useState} from 'react'
import {Button, Input, Modal, ModalBody, ModalFooter} from "reactstrap"
import {useDispatch, useSelector} from "react-redux"
import {setMealName} from "../../../../redux/test/reducer"


const Footer = () => {
    const [basicNameFoodModal, setBasicNameFoodModal] = useState(false)
    const [menuName, setMenuName] = useState('')
    const dispatch = useDispatch()

    const testData = useSelector(state => state.testReducer.testData)
    const meal = useSelector(state => state.testReducer.mealname)

    // useEffect(() => {
    //     // setArr([...testData])
    //     dispatch(loadData())
    // }, [])

    const RenderMealNameModal = () => {
        return (
            <div className='basic-modal '>
                <Modal isOpen={basicNameFoodModal} toggle={() => setBasicNameFoodModal(!basicNameFoodModal)}>
                    <div className='name-meal-model text-center my-1'><h1>Give this meal a name</h1></div>
                    <ModalBody>
                        <div className='col-8' style={{marginLeft: 80}}>
                            <Input type='text' placeholder='Enter Meal Name' style={{color: '#81be41'}} value={menuName}
                                   onChange={e => setMenuName(e.target.value)}/>
                        </div>
                        <div>
                            <h1>{meal.mealName}</h1>
                            <ul>
                                {testData && testData.length > 0 && testData.map(e => <li key={e}>{e}</li>)}
                                {/*{console.log('testData', testData)}*/}
                            </ul>
                        </div>
                    </ModalBody>
                    <ModalFooter style={{justifyContent: 'center', marginBottom: 20, marginTop: 30}}>
                        <Button color='danger' onClick={() => {
                            dispatch(setMealName({mealName: ''}))
                            setBasicNameFoodModal(!basicNameFoodModal)
                        }}>
                            Cancel
                        </Button>
                        <Button color='primary' onClick={() => {
                            if (menuName !== '') {
                                dispatch(setMealName({mealName: [menuName]}))
                                setMenuName('')
                            } else {
                                alert('please enter something in the menu name')
                            }
                            setBasicNameFoodModal(!basicNameFoodModal)
                        }}>
                            Save
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }

    return (
        <>
            <div className="container-fluid mt-2"
                 style={{
                     backgroundColor: 'whitesmoke',
                     // height: "130px",
                     position: "sticky",
                     bottom: 0,
                     // padding: 10,
                     // marginTop: 60,
                     borderTop: "1px solid black",
                     zIndex: 10

                 }}>
                <div className="row mb-2">
                    <div className="col-lg-7 col-12 mt-1 mb-2 d-lg-block d-none" style={{}}>
                        <div className="text-center text-uppercase fw-bolder"
                             style={{color: 'black', fontSize: "1.6rem"}}>Your
                            Menu Items
                        </div>
                        <div className="text-center fw-bolder" style={{color: 'black', fontSize: "1.3rem"}}>Select a
                            protein or vegie to get started
                        </div>
                    </div>
                    <div className="col-lg-5 col-12 mt-1 mb-1 mb-lg-0 " style={{textAlign: 'center'}}>
                        <button type="button"
                                style={{
                                    width: '90%',
                                    height: 60,
                                    backgroundColor: '#81be41',
                                    border: "0px",
                                    color: 'white',
                                    borderRadius: "5px"
                                }}
                                onClick={() => setBasicNameFoodModal((!basicNameFoodModal))}>
                            ADD TO BAG
                        </button>
                    </div>
                </div>
            </div>
            {RenderMealNameModal()}
        </>
    )
}

export default Footer
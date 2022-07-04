import React, { useState} from 'react'
import {Button, Input, Modal, ModalBody, ModalFooter} from "reactstrap"
import {useSelector, useDispatch} from "react-redux"
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
            <div className='basic-modal'>
                <Modal isOpen={basicNameFoodModal} toggle={() => setBasicNameFoodModal(!basicNameFoodModal)}>
                    <div className='name-meal-model text-center my-1'><h1>Give this meal a name</h1></div>
                    <ModalBody>
                        <div className='col-8' style={{marginLeft:80}}>
                            <Input type='text' placeholder='Enter Meal Name' style={{color:'#451400'}} value={menuName} onChange={e => setMenuName(e.target.value)} />
                        </div>
                        <div>
                            <h1>{meal.mealName}</h1>
                            <ul>
                                {testData && testData.length > 0 && testData.map(e => <li key={e}>{e}</li>)}
                                {console.log('testData', testData)}
                            </ul>
                        </div>
                    </ModalBody>
                    <ModalFooter style={{justifyContent:'center', marginBottom:20, marginTop:30}}>
                        <Button color='primary' onClick={() => {
                            dispatch(setMealName({mealName:''}))
                            setBasicNameFoodModal(!basicNameFoodModal)
                        }}>
                            Cancel
                        </Button>
                        <Button color='primary' onClick={() => {
                            if (menuName !== '') {
                                dispatch(setMealName({mealName:[menuName]}))
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
            <div className="container-fluid navbar-sticky" style={{backgroundColor: '#d4cfcb', padding:20, marginTop: 50 }}>
                <div className="row">
                    <div className="col" style={{paddingLeft:140}}>
                        <h1 style={{color:'#451400'}}>Your Menu Items</h1>
                        <h6 style={{color:'#451400'}}>Select a protein or vegie to get started</h6>
                    </div>
                    <div className="col" style={{textAlign:'right', paddingRight: 140}}>
                        <button type="button" style={{width:'50%', height:50, backgroundColor:'#81be41', color:'white'}} onClick={() => setBasicNameFoodModal((!basicNameFoodModal))} >
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
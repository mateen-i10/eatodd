// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react'
import {Button, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown} from "reactstrap"
import {ChevronDown} from "react-feather"

const MenuItemsCatering = (props) => {
    const [value, setValue] = useState("People")

    return (
        <div className="card" style={{height: "490px", paddingBottom: "15px"}}>
            <div>
                <img src={props.img} className="card-img-top" alt="..." />
            </div>
            <div style={{position: 'absolute', marginTop: 170, backgroundColor: '#2f2f2f', height: 30, width:"100%", opacity: "65%"}}>
            </div>
            <div style={{position: 'absolute', marginTop: 169, width: "100%"}}>
                <h5 style={{fontStyle: 'bold', fontSize: 25, color: 'white'}}>{props.mealTittle}</h5>
            </div>
            <div className="card-body">
                <p style={{fontFamily:'sans-serif', textAlign:'left',  textTransform: 'capitalize'}} >{props.menu}</p>
            </div>
            <div style={{display:'flex', padding: 10, justifyContent: 'space-around'}}>
                <h6 style={{marginTop: 10}}>${value === "10 People" ? props.price * 10 : value === "50 People" ? props.price * 50 : value === "100 People" ? props.price * 100 : `${props.price}/persons` }</h6>
                <UncontrolledDropdown>
                    <DropdownToggle
                        caret
                        color="transparent"
                        style={{border: "1px solid #81be41", color:'#81be41'}}
                    >
                        {value} <ChevronDown size={18}/>
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem onClick={() => setValue("10 People")}>10 People</DropdownItem>
                        <DropdownItem onClick={() => setValue("50 People")}>50 People</DropdownItem>
                        <DropdownItem onClick={() => setValue("100 People")}>100 People</DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </div>
            <Button color="primary" style={{ width: "150px", margin: "auto"}} onClick={() => console.log('clicked')}>Add to Bag</Button>
        </div>
    )
}

export default MenuItemsCatering
import React, {useState} from 'react'
import {Button, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown} from "reactstrap"
import {ChevronDown} from "react-feather"
import {Link} from "react-router-dom"

const OmgCorporate = (props) => {
    const {item} = props
    const [value, setValue] = useState("People")

    return (

        <div className="col-5">
            <div className="card" style={{height: "380px", paddingBottom: "15px"}}>
                <div>
                    <img src={item.image} className="card-img-top" style={{height: 185, objectFit: "cover"}} alt="..."/>
                </div>
                <div style={{
                    position: 'absolute',
                    marginTop: 155,
                    backgroundColor: '#2f2f2f',
                    height: 30,
                    width: "100%",
                    opacity: "65%"
                }}>
                </div>
                <div style={{position: 'absolute', marginTop: 155, width: "100%"}}>
                    <h5 className="text-center"
                        style={{fontStyle: 'bold', fontSize: 25, color: 'white'}}>{item.title}</h5>
                </div>
                <div className="card-body">
                    <p style={{
                        fontFamily: 'sans-serif',
                        textAlign: 'left',
                        textTransform: 'capitalize',
                        marginTop: -10
                    }}>{item.detail}</p>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-around', marginTop: "-29px", marginBottom: 10}}>
                    <h6 className="mt-1">${value === "10 People" ? item.price * 10 : value === "50 People" ? item.price * 50 : value === "100 People" ? item.price * 100 : `${item.price}/persons`}</h6>
                    <UncontrolledDropdown>
                        <DropdownToggle
                            caret
                            color="transparent"
                            style={{border: "1px solid #81be41", color: '#81be41'}}
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
                <div className="text-center text-uppercase ">
                    <Link to="/cateringMenuOrder">
                        <Button className=" text-uppercase " color="primary"
                                style={{width: "150px", margin: "auto"}}
                                onClick={() => console.log('clicked')}>
                            Add to Bag
                        </Button>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default OmgCorporate

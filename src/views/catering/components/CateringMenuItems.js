import React from 'react'
import {Button} from "reactstrap"
import {Link} from "react-router-dom"
import ProductImage from "../../home/components/product/ProductImage"

const CateringMenuItems = (props) => {
    const {item} = props

    return (

        <div className="card" style={{height: "380px", paddingBottom: "15px"}}>
            <div>
                <ProductImage attachment={item.attachment} classes="card-img-top" styles={{height: 185, objectFit: "cover"}}/>
                {/*<img src={item.image} className="card-img-top" style={{height: 185, objectFit: "cover"}} alt="..."/>*/}
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
                    style={{fontStyle: 'bold', fontSize: 25, color: 'white'}}>{item.title.toUpperCase()}</h5>
            </div>
            <div className="card-body" style={{
                maxHeight: 120,
                textOverflow: 'ellipsis',
                overflow: "hidden"
            }}>
                <p style={{
                    fontFamily: 'sans-serif',
                    textAlign: 'left',
                    textTransform: 'capitalize',
                    marginTop: -10
                }}>{item.detail}</p>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-around', marginTop: "-29px", marginBottom: 10}}>
                <h6 className="mt-1">${`${item.price}/persons`}</h6>
            </div>
            <div className="text-center text-uppercase ">
                <Link to={`/cateringMenuOrder/${item.id}`}>
                    <Button className=" text-uppercase " color="primary"
                            style={{width: "150px", margin: "auto"}}>
                        Select
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default CateringMenuItems

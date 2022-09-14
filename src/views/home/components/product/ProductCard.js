import React, {memo, useEffect, useState} from "react"
import {MdArrowBackIos} from "react-icons/all"
import CheckSign from "../../options/components/Utility/CheckSign"
import {ExtraQty} from "../../options/components/Utility/LighExSid"
import {MoreVertical} from "react-feather"
import '../../options/style/StyleSheet.css'
import {ProductTypes} from "../../../../utility/enums/Types"
import Counter from "../../options/components/Counter"
import ProductImage from "./ProductImage"

const ProductCard = ({item, limit, selectedItems, onItemClick, imgURL}) => {
    //local state
    const [customize, setCustomize] = useState(false)
    const [value, setValue] = useState(false)
    const [isLength, setIsLength] = useState(false)
    const imgStyles = {
        width: "100%",
        height: 180,
        objectFit: "contain",
        marginLeft: -8,
        marginTop: -19
    }

    // hooks
    useEffect(() => {
        setTimeout(() => {
            setIsLength(false)
        }, 1000)
    }, [isLength])

return <>
    <div className="card  add mb-lg-2 mb-1 overflow-hidden "
         style={!value ? {
             marginBottom: 25,
             maxHeight: 140
         } : {
             marginBottom: 25,
             maxHeight: 140,
             borderWidth: 1,
             borderColor: "black"
         }}>
        <div className={isLength ? "showFilling" : "hideFilling"} style={{
            position: "absolute",
            top: 30,
            zIndex: 1,
            backgroundColor: 'rgba(129, 190, 65, 1)',
            color: 'white',
            maxWidth: '50%',
            marginLeft: '30%',
            height: "35px",
            width: '300px',
            textAlign: "center",
            padding: '3px',
            fontSize: '1.4rem',
            fontWeight: 500,
            borderRadius: "3px"
        }}>
            You can select only {limit} fillings
        </div>
        {customize ? <div
                className={customize ? "row showCard justify-content-center align-items-center " : "hiddenCard"}>
                {item && item.options && item.options.length > 0 && item.options.map((op, index) => {
                    const cols = index === 0 ? Math.ceil(10 / item.options.length) : Math.floor(10 / item.options.length)
                    return <div key={`optionsKey-${index}`}
                        className={`col-${cols} ${index === 0 ? 'bg-primary text-white' : 'text-dark' } text-center cursor-pointer`}
                        style={{height: 130}}
                        onClick={() => { setCustomize(false) }}>
                        <div style={{marginTop: 42, fontSize: 17, fontWeight: 440}}>
                            {`${op?.name} ${op?.price ? ` - $${op.price}` : ''}`}
                        </div>
                    </div>
                })}

            {item && item.options && item.options.length > 0 && <div className="col-2 text-center border-dark cursor-pointer" style={{height: 130}}
                     onClick={() => setCustomize(!customize)}>
                    <div className=" text-primary" style={{marginTop: 42, fontSize: 30, fontWeight: 700}}>
                        <MdArrowBackIos/>
                    </div>
                </div>
            }
            </div> : <div className="row g-0">
                {selectedItems && selectedItems.map((selectedItem, index) => {
                const lmt = selectedItems.length <= 1 || limit <= 1 ? '1' : `1/${limit}`

                if (selectedItem.optionType === ProductTypes.Default) {
                    if (lmt === '1' && selectedItem.id === item.id) {
                        return <CheckSign key={`${selectedItem.id}-${index}`}/>
                    } else if (selectedItem.id === item.id) {
                        return  <ExtraQty value={lmt} key={`${selectedItem.id}-${index}`}/>
                    }
                    /*if (selectedProVeg.length === 2 && doubled === false) {
                        return (item.id === itemId ? <Half key={item.id}/> : "")
                    } else if (selectedProVeg.length === 2 && doubled === true) {

                        return (item.id === itemId ? <OneX key={item.id}/> : "")
                    }*/
                } else if (selectedItem.optionType === ProductTypes.Numeric && selectedItem.id === item.id) {
                    return <div className="mt-2" style={{
                        position: 'absolute',
                        left: '-220px',
                        backgroundColor: 'transparent',
                        zIndex: 100
                    }}>
                        <Counter/>
                    </div>
                }

            })}
                <div className="col-md-10 col-10 " onClick={() => {
                    onItemClick(item)
                    setValue(!value)
                    if (limit !== 0 && selectedItems.length === limit) {
                        setIsLength(true)
                        setValue(false)
                    }
                }}>
                    <div className="row g-0">
                        <div className="col-lg-4  col-md-4 col-5">
                            <ProductImage
                                path={imgURL}
                                styles={!value ? imgStyles : {
                                     ...imgStyles,
                                     backgroundColor: 'transparent',
                                     overflow: "hidden"
                                 }}/>
                        </div>
                        <div className="col-lg-8 col-md-8 col-7">
                            <div className="card-body ">
                                <div className=''>
                                    <div
                                        className="card-title text-start text-uppercase mt-0 mb-0 text-primary fw-bolder"
                                        style={{fontSize: '1.2rem'}}>{item?.name}</div>
                                    <p className="mb-0 text-dark  ">{item?.description}</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-2 col-2 mt-2 text-end">
                    {item && item.options && item.options.length > 1 && <div className=" moreAddon cursor-pointer me-2" id={item?.id}
                         onClick={() => setCustomize(!customize)}>
                        <MoreVertical size={34}/>
                    </div>}
                    <h5 className=" fw-bolder text-dark me-2 " style={{marginTop: 25}}>{item && item.price ? `$${item.price}` : ''}</h5>
                </div>
            </div>
        }
    </div>

</>
}

export default memo(ProductCard)

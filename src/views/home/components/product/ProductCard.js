import React, {memo, useEffect, useState} from "react"
import {MdArrowBackIos} from "react-icons/all"
import CheckSign from "../../options/components/Utility/CheckSign"
import {ExtraQty} from "../../options/components/Utility/LighExSid"
import {ArrowRight, Plus} from "react-feather"
import '../../options/style/StyleSheet.css'
import {ProductTypes} from "../../../../utility/enums/Types"
import Counter from "../../options/components/Counter"
import ProductImage from "./ProductImage"
import chilli from '../../../../assets/images/ORDER/chilli.png'
import {getUserData} from "../../../../auth/utils"
import {getWinePackageByCustomer} from "../../../../redux/memberShipType/action"
import {useDispatch, useSelector} from "react-redux"

const ProductCard = ({
                         item,
                         limit,
                         selectedItems,
                         onItemClick,
                         attachment,
                         subCatId,
                         onOptionClick,
                         onQuantityChange,
                         setShowExtra,
                         showExtra
                     }) => {
    //local state
    const [customize, setCustomize] = useState(false)
    const [value, setValue] = useState(false)
    const [isLength, setIsLength] = useState(false)
    console.log(item.flavour, "items coming from product card comp")

    // console.log(item, "lets see the items")
    const imgStyles = {
        width: "100%",
        height: "120px",
        backgroundColor: 'transparent',
        overflow: "hidden",
        objectFit: "fill"
    }

    const dispatch = useDispatch()

    const customerId = getUserData()?.customerId

    useEffect(() => {
        if (customerId) dispatch(getWinePackageByCustomer(customerId))
    }, [])

    const membershipObj = useSelector(state => state.memberShip.object)
    console.log('data for price section', membershipObj.id)

    // hooks
    useEffect(() => {
        setTimeout(() => {
            setIsLength(false)
        }, 1000)
    }, [isLength])

    return <>
        <div className="card add mb-lg-2 mb-1 overflow-hidden "
             style={!value ? {
                 marginBottom: 25,
                 maxHeight: 98,
                 minHeight: 98
             } : {
                 marginBottom: 25,
                 maxHeight: 98,
                 minHeight: 98,
                 borderWidth: 2,
                 borderColor: "black"
             }}>
            {customize ? <div
                className={customize ? "row showCard justify-content-center align-items-center " : "hiddenCard"}
                onMouseLeave={() => setCustomize(!customize)}
            >
                {item && item.options && item.options.length > 0 && item.options.map((op, index) => {
                    const cols = index === 0 ? Math.ceil(10 / item.options.length) : Math.floor(10 / item.options.length)
                    return <div key={`optionsKey-${index}`}
                                className={`col-${cols} ${op.isSelected ? 'bg-primary text-white' : 'text-dark'} text-center cursor-pointer`}
                                style={{maxHeight: 98, minHeight: 98}}
                                onClick={() => {
                                    setValue(true)
                                    setCustomize(false)
                                    onOptionClick(item, index, limit, subCatId)
                                }}>
                        <div style={{marginTop: 32, fontSize: 16, fontWeight: 440}}>
                            {`${op?.name} ${op?.price ? ` - $${op.price}` : ''}`}
                        </div>
                    </div>
                })}

                {item && item.options && item.options.length > 0 &&
                    <div className="col-2 text-center  cursor-pointer" style={{maxHeight: 98, minHeight: 98}}
                         onClick={() => setCustomize(!customize)}>
                        <div className=" text-primary" style={{marginTop: 22, fontSize: 30, fontWeight: 700}}>
                            <MdArrowBackIos/>
                        </div>
                    </div>
                }
            </div> : <div className="row g-0">
                {selectedItems && selectedItems.map((selectedItem, index) => {
                    const lmt = selectedItems.length === 1 || limit <= 1 ? '1' : `1/${limit}`
                    if (selectedItem.optionType === ProductTypes.Default) {
                        if (lmt === '1' && selectedItem.id === item.id) {
                            return <div className='check3'>
                                <CheckSign styles={{marginLeft: 10}} key={`${selectedItem.id}-${index}`}/>
                            </div>
                        } else if (selectedItem.id === item.id) {
                            return <div className="check3">
                                <ExtraQty value={lmt} selectedItems={selectedItems} selectedItem={selectedItem} key={`${selectedItem.id}-${index}`}/>
                            </div>
                        }
                    } else if (selectedItem.optionType === ProductTypes.Numeric && selectedItem.id === item.id) {
                        const option = selectedItem.options.find(p => p.isSelected)
                        return <div className="class2" >
                            <Counter
                                min={option ? option.min : 1}
                                max={option ? option.max : 0}
                                selectedProductIndex={index}
                                setProductQuantity={onQuantityChange}
                            />
                        </div>
                    }

                })}
                <div className="col-md-10 col-10 "  onClick={() => {
                  if (showExtra !== undefined && item.isBlank === true) setShowExtra(!showExtra)
                    onItemClick(item, subCatId, limit)
                    setValue(!value)
                    if (limit !== 0 && selectedItems.length === limit) {
                        if (item.isBlank === true) {
                            setValue(!value)
                        }  else {
                            setIsLength(true)
                            setValue(false)
                        }

                    }
                }}>
                    <div className="row g-0">
                        <div className="col-lg-4  col-md-4 col-5">
                            {item.isBlank ? <div className='check3' > <CheckSign styles={{marginLeft: 10}} checkStyle1={`${value ? 'checkStyle' : 'checkStyle1'}`}/> </div> : <ProductImage
                                attachment={attachment}
                                classes={"img-fluid rounded-start"}
                                styles={!value ? imgStyles : {
                                    ...imgStyles,
                                    backgroundColor: 'transparent',
                                    overflow: "hidden",
                                    objectFit: "fill"
                                }}/>}
                        </div>
                        <div className="col-lg-8 col-md-8 col-7">
                            <div className="card-body ">
                                <div className=''>
                                    <div
                                        className="card-title text-start text-uppercase mb-0 text-primary fw-bolder "
                                        style={{
                                            fontSize: '1.1em',
                                            lineHeight: "18px",
                                            marginTop: "-6px"
                                        }}>{item?.name}{item.flavour === 'Spicy' && <img src={chilli} width={20} alt="image"/>}</div>
                                    <p className="mb-0 text-dark  ">{item?.description}</p>

                                </div>
                            </div>
                            {item && item.options && item.options.length > 1 && <div className='bg-primary tooltipAdd d-none fs-5 text-white' style={{
                                position: 'absolute',
                                zIndex: 2,
                                top: 15,
                                right: 50,
                                paddingLeft: 8,
                                paddingRight: 2
                            }}>Add Quantity<ArrowRight style={{marginTop: 2}} size={18}/></div> }
                        </div>
                    </div>
                </div>
                <div className="col-md-2 col-2 pt-1 text-end">
                    {item && item.options && item.options.length > 1 &&
                        <div className=" moreAddon cursor-pointer me-2" id={item?.id}
                             onMouseOver={() => setCustomize(!customize)}>
                            <Plus size={20} />
                        </div>}
                            <div className=" fs-5 fw-bolder text-dark me-2 " style={{marginTop: 25}}>$ {membershipObj.id ? `${item.retailPrice ? item.retailPrice : item.price}` : `${item.wholePrice ? item.wholePrice : item.price}`}</div>
                </div>
            </div>
            }
        </div>
    </>
}

export default memo(ProductCard)

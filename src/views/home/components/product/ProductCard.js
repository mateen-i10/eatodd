import React, {memo, useEffect, useState} from "react"
import {MdArrowBackIos} from "react-icons/all"
import CheckSign from "../../options/components/Utility/CheckSign"
import {ExtraQty} from "../../options/components/Utility/LighExSid"
import {MoreVertical} from "react-feather"
import '../../options/style/StyleSheet.css'
import {ProductTypes} from "../../../../utility/enums/Types"
import Counter from "../../options/components/Counter"
import ProductImage from "./ProductImage"

const ProductCard = ({
                         item,
                         limit,
                         selectedItems,
                         onItemClick,
                         attachment,
                         subCatId,
                         onOptionClick,
                         onQuantityChange
                     }) => {
    //local state
    const [customize, setCustomize] = useState(false)
    const [value, setValue] = useState(false)
    const [isLength, setIsLength] = useState(false)
    const imgStyles = {
        width: "100%",
        height: 99,
        backgroundColor: 'transparent',
        overflow: "hidden",
        objectFit: "cover"
    }

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
                 borderWidth: 1,
                 borderColor: "black"
             }}>
            {customize ? <div
                className={customize ? "row showCard justify-content-center align-items-center " : "hiddenCard"}>
                {item && item.options && item.options.length > 0 && item.options.map((op, index) => {
                    const cols = index === 0 ? Math.ceil(10 / item.options.length) : Math.floor(10 / item.options.length)
                    return <div key={`optionsKey-${index}`}
                                className={`col-${cols} ${op.isSelected ? 'bg-primary text-white' : 'text-dark'} text-center cursor-pointer`}
                                style={{maxHeight: 98, minHeight: 98}}
                                onClick={() => {
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
                    const lmt = selectedItems.length <= 1 || limit <= 1 ? '1' : `1/${limit}`

                    if (selectedItem.optionType === ProductTypes.Default) {
                        if (lmt === '1' && selectedItem.id === item.id) {
                            return <div style={{
                                position: "absolute",
                                top: "-0.8%",
                                left: "2.6%"
                            }}><CheckSign key={`${selectedItem.id}-${index}`}/></div>
                        } else if (selectedItem.id === item.id) {
                            return <div className="" style={{
                                position: "absolute",
                                top: "-0.8%",
                                left: "2.6%"
                            }}><ExtraQty value={lmt} key={`${selectedItem.id}-${index}`}/></div>
                        }
                    } else if (selectedItem.optionType === ProductTypes.Numeric && selectedItem.id === item.id) {
                        const option = selectedItem.options.find(p => p.isSelected)
                        return <div className="" style={{
                            marginTop: 11,
                            marginLeft: 8,
                            position: 'absolute',
                            top: "1%",
                            left: "-41%",
                            backgroundColor: 'transparent',
                            zIndex: 1

                        }}>
                            <Counter
                                min={option ? option.min : 1}
                                max={option ? option.max : 0}
                                selectedProductIndex={index}
                                setProductQuantity={onQuantityChange}
                            />
                        </div>
                    }

                })}
                <div className="col-md-10 col-10 " onClick={() => {
                    onItemClick(item, subCatId, limit)
                    setValue(!value)
                    if (limit !== 0 && selectedItems.length === limit) {
                        setIsLength(true)
                        setValue(false)
                    }
                }}>
                    <div className="row g-0">
                        <div className="col-lg-4  col-md-4 col-5">
                            <ProductImage
                                attachment={attachment}
                                classes={"img-fluid rounded-start"}
                                styles={!value ? imgStyles : {
                                    ...imgStyles,
                                    backgroundColor: 'transparent',
                                    overflow: "hidden",
                                    objectFit: "cover"
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
                <div className="col-md-2 col-2 pt-1 text-end">
                    {item && item.options && item.options.length > 1 &&
                        <div className=" moreAddon cursor-pointer me-2" id={item?.id}
                             onClick={() => setCustomize(!customize)}>
                            <MoreVertical size={25}/>
                        </div>}
                    <h5 className=" fw-bolder text-dark me-2 "
                        style={{marginTop: 25}}>{item && item.price ? `$${item.price}` : ''}</h5>
                </div>
            </div>
            }
        </div>
    </>
}

export default memo(ProductCard)
